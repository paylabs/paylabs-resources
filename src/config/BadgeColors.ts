import {
  Rocket,
  FlaskConical,
  Wrench,
  Construction,
  Plug,
  FileCode2,
  ShieldCheck,
  Puzzle,
  Hammer,
  TerminalSquare,
} from "lucide-react";

/**
 * Konfigurasi warna dan ikon untuk badge.
 * Meliputi kategori resource & status pengembangan.
 * Bisa digunakan lintas komponen tanpa perlu ubah kode lain.
 */
export const badgeConfig: Record<
  string,
  {
    color: string;
    icon: any;
    label: string;
  }
> = {
  // 🌍 Status tahapan pengembangan plugin / resource
  production: {
    color:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    icon: Rocket,
    label: "Production",
  },
  "on-dev": {
    color:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    icon: Wrench,
    label: "On Dev",
  },
  testing: {
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    icon: FlaskConical,
    label: "Testing",
  },
  "coming-soon": {
    color: "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    icon: Construction,
    label: "Coming Soon",
  },

  // 🧩 Kategori umum (resource type)
  plugin: {
    color:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    icon: Plug,
    label: "Plugin",
  },
  example: {
    color: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
    icon: FileCode2,
    label: "Example",
  },
  "third-party": {
    color:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    icon: Puzzle,
    label: "Third Party",
  },
  tools: {
    color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
    icon: Hammer,
    label: "Tools",
  },
  sandbox: {
    color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    icon: TerminalSquare,
    label: "Sandbox",
  },
  official: {
    color:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    icon: ShieldCheck,
    label: "Official",
  },
  default: {
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    icon: FileCode2,
    label: "General",
  },
};
