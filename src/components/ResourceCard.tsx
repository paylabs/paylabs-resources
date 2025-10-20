import { badgeConfig } from "@/config/BadgeColors";
import { ArrowUpRight } from "lucide-react";

interface ResourceCardProps {
  title: string;
  desc: string;
  href: string;
  badge: string; // kategori utama (plugin, example, dll.)
  status?: string; // status pengembangan (production, on-dev, testing, coming-soon)
}

export default function ResourceCard({
  title,
  desc,
  href,
  badge,
  status,
}: ResourceCardProps) {
  const normalize = (val?: string) => val?.toLowerCase().trim() || "";
  const normalizedBadge = normalize(badge);
  const normalizedStatus = normalize(status);

  const mainConfig = badgeConfig[normalizedBadge] || badgeConfig["default"];
  const statusConfig = badgeConfig[normalizedStatus] || null;

  const MainIcon = mainConfig.icon;
  const StatusIcon = statusConfig?.icon;

  return (
    <div className="relative overflow-hidden flex flex-col justify-between border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all p-6 group">
      {/* ===== Badge Group (Status + Kategori) ===== */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        {/* Badge status (ikon + tooltip Tailwind) */}
        {statusConfig && (
          <div className="relative group/status">
            <div
              className={`flex items-center justify-center rounded-full p-1 shadow-sm cursor-default ${statusConfig.color}`}
            >
              <StatusIcon className="w-3.5 h-3.5" strokeWidth={2} />
            </div>

            {/* Tooltip */}
            <div className="absolute -top-8 right-1/2 translate-x-1/2 invisible opacity-0 group-hover/status:visible group-hover/status:opacity-100 transition-all duration-200 bg-slate-800 text-white text-[11px] font-medium px-2 py-1 rounded-md whitespace-nowrap shadow-lg dark:bg-slate-700">
              {statusConfig.label}
              <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-slate-800 dark:bg-slate-700 rotate-45 -translate-x-1/2" />
            </div>
          </div>
        )}

        {/* Badge kategori */}
        <div
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-md ${mainConfig.color}`}
        >
          <MainIcon className="w-3.5 h-3.5" strokeWidth={2} />
          {mainConfig.label}
        </div>
      </div>

      {/* ===== Konten utama ===== */}
      <div className="mb-6 mt-4 relative z-10">
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          {desc}
        </p>
      </div>

      {/* ===== Tombol Click to open ===== */}
      <div className="mt-auto relative z-10">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30 rounded-md px-3 py-1.5 hover:bg-sky-100 dark:hover:bg-sky-800/40 transition group/button"
        >
          <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 transition-transform duration-200" />
          Click to open
        </a>
      </div>

      {/* ======= Logo dengan crop ======= */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="./favicon.ico"
          alt="WooCommerce Logo"
          className="absolute bottom-0 right-0 w-50 h-50 opacity-20 grayscale object-cover blur-[1px] transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  );
}
