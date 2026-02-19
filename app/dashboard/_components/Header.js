"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { usePrivacy } from "@/components/SolanaProvider";
import { Shield, ShieldCheck, Loader2 } from "lucide-react";

function Header() {
  const { connected } = useWallet();
  const { isPrivacyActive, activatePrivacy, isActivating } = usePrivacy();

  const handleActivatePrivacy = async () => {
    try {
      await activatePrivacy();
    } catch (err) {
      console.error("Privacy activation failed:", err);
    }
  };

  return (
    <div className="flex justify-end items-center gap-3 p-5 shadow-sm">
      {/* Privacy Status Badge */}
      {isPrivacyActive ? (
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          <ShieldCheck className="w-4 h-4" />
          E2E Encrypted
        </div>
      ) : connected ? (
        <button
          onClick={handleActivatePrivacy}
          disabled={isActivating}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors cursor-pointer"
        >
          {isActivating ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Shield className="w-4 h-4" />
          )}
          {isActivating ? "Signing..." : "Activate Privacy"}
        </button>
      ) : (
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-500 rounded-full text-sm">
          <Shield className="w-4 h-4" />
          Connect wallet for E2E encryption
        </div>
      )}

      {/* Solana Wallet Connect Button */}
      <WalletMultiButton
        style={{
          height: "36px",
          fontSize: "14px",
          borderRadius: "9999px",
        }}
      />

      {/* Clerk User Button */}
      <UserButton />
    </div>
  );
}

export default Header;