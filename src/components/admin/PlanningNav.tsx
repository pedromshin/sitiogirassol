"use client";

import { useState, useEffect } from "react";

type NavDoc = {
  readonly id: string;
  readonly label: string;
  readonly group: string;
};

type PlanningNavProps = {
  readonly docs: readonly NavDoc[];
};

export default function PlanningNav({ docs }: PlanningNavProps) {
  const [activeId, setActiveId] = useState<string>(docs[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    for (const doc of docs) {
      const el = document.getElementById(doc.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [docs]);

  const groups = new Map<string, readonly NavDoc[]>();
  for (const doc of docs) {
    const existing = groups.get(doc.group) ?? [];
    groups.set(doc.group, [...existing, doc]);
  }

  return (
    <nav className="sticky top-0 h-screen overflow-y-auto border-r border-white/10 bg-[#0a100d] p-6 w-64 shrink-0">
      <div className="mb-8">
        <h1 className="text-accent-gold font-display text-xl font-bold tracking-wide">
          GSD Admin
        </h1>
        <p className="text-white/40 text-xs mt-1">Sitio Girassol</p>
      </div>

      {Array.from(groups.entries()).map(([group, groupDocs]) => (
        <div key={group} className="mb-6">
          <h2 className="text-white/50 text-[10px] font-semibold uppercase tracking-[0.15em] mb-2">
            {group}
          </h2>
          <ul className="space-y-0.5">
            {groupDocs.map((doc) => (
              <li key={doc.id}>
                <a
                  href={`#${doc.id}`}
                  className={`block px-3 py-1.5 rounded text-sm transition-all ${
                    activeId === doc.id
                      ? "bg-accent-gold/10 text-accent-gold font-medium"
                      : "text-white/60 hover:text-white/90 hover:bg-white/5"
                  }`}
                >
                  {doc.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
