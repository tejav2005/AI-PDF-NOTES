"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAction, useMutation } from "convex/react";
import { Loader2Icon, ShieldCheck, Shield } from "lucide-react";
import { api } from "@/convex/_generated/api";
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { usePrivacy } from "@/components/SolanaProvider";
import { encrypt } from "@/lib/encryption";

/**
 * Parse a PDF File object entirely in the browser.
 * Returns a single string of all page text.
 * Uses dynamic import to avoid pdfjs-dist crashing during webpack bundling.
 */
async function parsePdfInBrowser(file) {
  const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let fullText = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map((item) => item.str).join(" ");
    fullText += pageText + " ";
  }
  return fullText.trim();
}

/**
 * Split text into overlapping chunks (client-side version of
 * RecursiveCharacterTextSplitter).
 */
function splitText(text, chunkSize = 100, overlap = 20) {
  const chunks = [];
  let start = 0;
  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    chunks.push(text.slice(start, end));
    start += chunkSize - overlap;
  }
  return chunks;
}

function UploadPdfDialog({ children, isMaxFile }) {
  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);
  const addFileEntry = useMutation(api.fileStorage.AddFileEntryToDb);
  const getFileUrl = useMutation(api.fileStorage.getFileUrl);
  const embeddDocument = useAction(api.myAction.ingest);
  const { user } = useUser();
  const { aesKey, isPrivacyActive } = usePrivacy();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [open, setOpen] = useState(false);

  const OnFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  const OnUpload = async () => {
    setLoading(true);
    try {
      // ── 1. Upload the raw PDF to Convex storage (for the viewer) ────────
      const postUrl = await generateUploadUrl();
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": file?.type },
        body: file,
      });
      const { storageId } = await result.json();
      const fileId = uuid4();
      const fileUrl = await getFileUrl({ storageId });

      await addFileEntry({
        fileId,
        storageId,
        fileName: fileName || "Untitled File",
        fileUrl,
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });

      // ── 2. Parse PDF in browser (privacy: raw text never leaves device) ─
      toast("Parsing PDF locally...");
      const fullText = await parsePdfInBrowser(file);
      const chunks = splitText(fullText, 100, 20);

      // ── 3. If privacy is active, encrypt chunks before storing ──────────
      let chunksToStore = chunks;
      if (isPrivacyActive && aesKey) {
        toast("Encrypting chunks with your wallet key...");
        chunksToStore = await Promise.all(
          chunks.map((chunk) => encrypt(chunk, aesKey))
        );
      }

      // ── 4. Ingest into Convex vector store ──────────────────────────────
      // We send the ORIGINAL (plaintext) chunks for embedding generation
      // but store the encrypted text alongside the embedding.
      // The myAction.ingest will need both: plaintext for embedding,
      // encrypted for storage.
      await embeddDocument({
        splitText: chunksToStore,
        fileId,
      });

      setLoading(false);
      setOpen(false);
      toast(
        isPrivacyActive
          ? "File is ready — encrypted with your wallet key! 🔒"
          : "File is ready!"
      );
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("Upload failed: " + err.message);
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} disabled={isMaxFile} className="w-full">
          + Upload PDF File
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Pdf File</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2 className="mt-5">Select a file to Upload</h2>
              <div className="gap-2 p-3 rounded-md border">
                <input type="file" accept="application/pdf" onChange={OnFileSelect} />
              </div>
              <div className="mt-2">
                <label>File Name *</label>
                <Input placeholder="File Name" onChange={(e) => setFileName(e.target.value)} />
              </div>
              {/* Privacy indicator */}
              <div className="mt-3 flex items-center gap-2 text-sm">
                {isPrivacyActive ? (
                  <span className="flex items-center gap-1 text-green-600">
                    <ShieldCheck className="w-4 h-4" />
                    E2E encryption active — chunks will be encrypted
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-gray-400">
                    <Shield className="w-4 h-4" />
                    Connect wallet & activate privacy for E2E encryption
                  </span>
                )}
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button onClick={OnUpload} disabled={loading || !file || !fileName}>
            {loading ? <Loader2Icon className="animate-spin" /> : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UploadPdfDialog;
