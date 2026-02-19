import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { action } from "./_generated/server.js";
import { v } from "convex/values";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";

// Shared factory — keeps both actions in sync
function makeEmbeddings() {
  return new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    model: "embedding-001", // universally available GA embedding model
    taskType: TaskType.RETRIEVAL_DOCUMENT,
  });
}

// ── INGEST ───────────────────────────────────────────────────────────────────
export const ingest = action({
  args: {
    splitText: v.any(),
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    await ConvexVectorStore.fromTexts(
      args.splitText,
      args.fileId,
      makeEmbeddings(),
      { ctx }
    );
    return "Completed..";
  },
});

// ── SEARCH ───────────────────────────────────────────────────────────────────
export const search = action({
  args: {
    query: v.string(),
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    const vectorStore = new ConvexVectorStore(makeEmbeddings(), { ctx });

    const resultOne = (await vectorStore.similaritySearch(args.query, 1)).filter(
      (q) => q.metadata.fileId == args.fileId
    );
    console.log(resultOne);

    return JSON.stringify(resultOne);
  },
});
