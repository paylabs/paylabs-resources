import ResourceCard from "./ResourceCard";
import { useTranslation } from "react-i18next";

export default function ResourceGrid() {
  const { t } = useTranslation();

  // Ambil data multi-bahasa
  const highlights = t("resources.highlights", {
    returnObjects: true,
  }) as any[];
  const plugins =
    (t("resources.plugins", { returnObjects: true }) as any[]) || [];

  return (
    <section
      id="resources"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* ======= Bagian utama: Resources ======= */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-center text-slate-900 dark:text-slate-100">
          {t("resources_nav") ?? "Resources"}
        </h2>
      </div>

      {/* Grid daftar resources */}
      {Array.isArray(highlights) && highlights.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((r) => (
            <ResourceCard key={r.title} {...r} />
          ))}
        </div>
      ) : (
        <div className="text-center text-slate-500 dark:text-slate-400 py-8">
          {t("no_resources") ?? "No resources available"}
        </div>
      )}

      {/* ======= Bagian Plugin & Integrasi ======= */}
      <div id="plugins" className="mt-20">
        <h3 className="text-2xl font-semibold mb-6 text-center text-slate-900 dark:text-slate-100">
          {t("plugin_section") ?? "Plugins & Integrations"}
        </h3>

        {Array.isArray(plugins) && plugins.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plugins.map((p) => (
              <ResourceCard
                key={p.name}
                title={p.name}
                desc={p.desc}
                href={p.href}
                badge="plugin" // Badge utama kategori
                status={p.status} // Badge status (production, on-dev, dll)
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-10 flex flex-col items-center justify-center text-center space-y-4 shadow-sm">
            <div className="text-slate-700 dark:text-slate-300 text-sm">
              🚧 <span className="font-medium">Integrations & Plugins</span> are
              currently under development.
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Soon you’ll be able to explore plugins that automate your
              workflows and extend Paylabs functionality.
            </p>
            <button
              disabled
              className="px-4 py-1.5 text-sm font-medium rounded-md border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 bg-white/60 dark:bg-slate-800/60 cursor-not-allowed"
            >
              Coming soon ⏳
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
