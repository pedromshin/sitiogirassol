import { readPlanningDocs, groupDocs } from "@/lib/admin/planning-reader";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import PlanningNav from "@/components/admin/PlanningNav";
import MarkdownPanel from "@/components/admin/MarkdownPanel";
import AdminTabs from "@/components/admin/AdminTabs";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type AdminPageProps = {
  readonly searchParams: Record<string, string | string[] | undefined>;
};

export default async function AdminPage({ searchParams }: AdminPageProps) {
  headers(); // force dynamic rendering

  const token = process.env.ADMIN_TOKEN ?? "";
  const provided = typeof searchParams.token === "string" ? searchParams.token : "";

  if (token && token !== provided) {
    notFound();
  }

  const docs = readPlanningDocs();
  const groups = groupDocs(docs);
  const navDocs = docs.map(({ id, label, group }) => ({ id, label, group }));

  const planningContent = (
    <>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-display font-bold text-accent-gold mb-2">
          Sitio Girassol Revenue Plan
        </h1>
        <p className="text-white/50 text-sm">
          3 phases &middot; 32 requirements &middot; R$4k April &middot; R$7k May
        </p>
        <div className="flex gap-3 mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold text-xs font-medium">
            Phase 1: Foundation
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-white/40 text-xs">
            Phase 2: Distribution
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-white/40 text-xs">
            Phase 3: Growth
          </span>
        </div>
      </div>

      {/* Documents by group */}
      {Array.from(groups.entries()).map(([group, groupDocs]) => (
        <div key={group} className="mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-gold/60 mb-6 border-b border-accent-gold/10 pb-2">
            {group}
          </h2>

          <div className="space-y-12">
            {groupDocs.map((doc) => (
              <section key={doc.id} id={doc.id} className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-display font-semibold text-white">
                    {doc.label}
                  </h3>
                  <span className="text-[10px] text-white/30 font-mono">
                    {doc.filePath}
                  </span>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                  <MarkdownPanel doc={doc} />
                </div>
              </section>
            ))}
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/30 text-xs">
        GSD Planning Dashboard &middot; Generated 2026-03-27
      </div>
    </>
  );

  return (
    <div className="flex">
      <PlanningNav docs={navDocs} />
      <AdminTabs planningContent={planningContent} />
    </div>
  );
}
