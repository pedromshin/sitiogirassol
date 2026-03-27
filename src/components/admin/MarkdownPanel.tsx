import { marked } from "marked";
import type { PlanningDoc } from "@/lib/admin/planning-reader";

type MarkdownPanelProps = {
  readonly doc: PlanningDoc;
};

export default function MarkdownPanel({ doc }: MarkdownPanelProps) {
  if (doc.error) {
    return (
      <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-6">
        <p className="text-red-400 text-sm font-mono">{doc.error}</p>
      </div>
    );
  }

  const isJson = doc.filePath.endsWith(".json");

  if (isJson) {
    return (
      <pre className="rounded-lg bg-[#0a100d] border border-white/10 p-6 overflow-x-auto text-sm text-green-300 font-mono">
        <code>{JSON.stringify(JSON.parse(doc.content), null, 2)}</code>
      </pre>
    );
  }

  const html = marked.parse(doc.content, { gfm: true, breaks: false }) as string;

  return (
    <div
      className="prose prose-invert prose-sm max-w-none
        prose-headings:text-white prose-headings:font-display prose-headings:border-b prose-headings:border-white/10 prose-headings:pb-2
        prose-h1:text-2xl prose-h1:text-accent-gold prose-h1:border-accent-gold/20
        prose-h2:text-xl prose-h2:mt-8
        prose-h3:text-lg prose-h3:mt-6
        prose-p:text-white/80 prose-p:leading-relaxed
        prose-a:text-accent-gold prose-a:no-underline hover:prose-a:underline
        prose-strong:text-white
        prose-code:text-green-300 prose-code:bg-[#0a100d] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:font-mono
        prose-pre:bg-[#0a100d] prose-pre:border prose-pre:border-white/10
        prose-table:text-sm
        prose-th:text-accent-gold/80 prose-th:border-white/20 prose-th:font-semibold prose-th:text-left
        prose-td:border-white/10 prose-td:text-white/70
        prose-li:text-white/80
        prose-ul:text-white/80
        prose-hr:border-white/10
        [&_input[type=checkbox]]:mr-2 [&_input[type=checkbox]]:accent-accent-gold"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
