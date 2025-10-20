import { useTranslation } from "react-i18next";
import { Lightbulb, Code2, HelpCircle } from "lucide-react";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="text-center py-20 bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* ====== Headline ====== */}
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
        {t("hero_title", "Integrate Smarter with Paylabs API")}
      </h1>

      {/* ====== Subtitle ====== */}
      <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
        {t(
          "hero_subtitle",
          "Empower your business with seamless payment integration, real-time monitoring, and actionable insights."
        )}
      </p>

      {/* ====== CTA Button ====== */}
      <div className="mt-8">
        <a
          href="https://paylabs.co.id/api-reference.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-white font-medium shadow-md hover:bg-sky-700 hover:shadow-lg transition-all"
        >
          <Code2 className="w-5 h-5" />
          {t("cta_docs", "View API Documentation")}
        </a>
      </div>

      {/* ====== Highlights Section ====== */}
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* === Tips & Tricks === */}
        <div className="group p-6 rounded-2xl bg-white dark:bg-slate-800 shadow hover:shadow-lg border border-slate-200 dark:border-slate-700 transition-all">
          <div className="flex justify-center mb-3">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 group-hover:scale-110 transition">
              <Lightbulb className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
            {t("tips_title", "Tips & Tricks")}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            {t(
              "tips_desc",
              "Learn best practices for secure integration, token handling, and signature validation."
            )}
          </p>
        </div>

        {/* === Integration Guide === */}
        <div className="group p-6 rounded-2xl bg-white dark:bg-slate-800 shadow hover:shadow-lg border border-slate-200 dark:border-slate-700 transition-all">
          <div className="flex justify-center mb-3">
            <div className="p-3 rounded-full bg-sky-100 text-sky-600 group-hover:scale-110 transition">
              <Code2 className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
            {t("integration_title", "Integration Guide")}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            {t(
              "integration_desc",
              "Follow step-by-step examples using PHP, Python, or Node.js to connect your system instantly."
            )}
          </p>
        </div>

        {/* === FAQ & Contact === */}
        <div className="group p-6 rounded-2xl bg-white dark:bg-slate-800 shadow hover:shadow-lg border border-slate-200 dark:border-slate-700 transition-all">
          <div className="flex justify-center mb-3">
            <div className="p-3 rounded-full bg-emerald-100 text-emerald-600 group-hover:scale-110 transition">
              <HelpCircle className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
            {t("faq_title", "FAQ & Contact Center")}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            {t(
              "faq_desc",
              "Find quick answers or reach our support team for technical and operational assistance."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
