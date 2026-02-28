import { setRequestLocale } from "next-intl/server";
import ThemeColorPicker from "@/components/ui/ThemeColorPicker";
import { BASE_HEX } from "@/lib/design-system";
import { groupColorEntriesByFamily } from "@/lib/theme-colors";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ThemePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const groups = groupColorEntriesByFamily();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold text-primary mb-2">Design System Colors</h1>
      <p className="text-muted mb-12">Click any swatch to copy the hex value.</p>

      <section className="mb-12">
        <h2 className="text-lg font-medium text-text mb-4">Base color (single source)</h2>
        <ThemeColorPicker
          variant="panel"
          entries={[{ path: "BASE_HEX", value: BASE_HEX }]}
        />
      </section>

      <div className="space-y-12">
        {groups.map(({ family, entries }) => (
          <section key={family}>
            <h2 className="text-lg font-medium text-text mb-4 capitalize">{family}</h2>
            <ThemeColorPicker variant="panel" entries={entries} />
          </section>
        ))}
      </div>
    </div>
  );
}
