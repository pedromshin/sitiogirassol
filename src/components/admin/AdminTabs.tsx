"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const MetaDashboard = dynamic(() => import("./MetaDashboard"), { ssr: false });

type AdminTabsProps = {
  readonly planningContent: React.ReactNode;
};

export default function AdminTabs({ planningContent }: AdminTabsProps) {
  const [tab, setTab] = useState<"planning" | "meta">("planning");

  return (
    <div className="flex-1 min-w-0 overflow-y-auto">
      {/* Tab bar */}
      <div className="sticky top-0 z-10 bg-[#0f1612] border-b border-white/[0.06] px-8 pt-6 pb-0">
        <div className="flex gap-1">
          {(["planning", "meta"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                tab === t
                  ? "bg-white/[0.04] text-accent-gold border-b-2 border-accent-gold"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              {t === "planning" ? "Planning Docs" : "Meta Ads"}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      {tab === "planning" ? (
        <div className="max-w-4xl mx-auto px-8 py-12">
          {planningContent}
        </div>
      ) : (
        <MetaDashboard />
      )}
    </div>
  );
}
