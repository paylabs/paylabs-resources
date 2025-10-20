import { useEffect, useState, useRef } from "react";
import { Moon, Sun, Globe, Boxes } from "lucide-react";
import { useTranslation } from "react-i18next";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function Header() {
  const [theme, setTheme] = useState<string>(getInitialTheme());
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language || "id");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 🔄 Tema dark/light
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 🔄 Bahasa dari localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== lang) {
      i18n.changeLanguage(savedLang);
      setLang(savedLang);
    }
  }, []);

  // 🌍 Ganti bahasa
  const changeLang = (newLang: string) => {
    i18n.changeLanguage(newLang);
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    setShowDropdown(false);
  };

  // 🔒 Tutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 dark:border-slate-800/70 backdrop-blur bg-white/60 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* === Brand dengan Icon === */}
        <a
          href="#resources"
          className="flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
        >
          <img src="favicon.ico" alt="Paylabs Icon" className="w-5 h-5" />
          <span>Paylabs Resources</span>
        </a>

        {/* === Navigasi === */}
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a className="opacity-80 hover:opacity-100" href="#resources">
            {t("resources_nav") ?? "Resources"}
          </a>
          <a className="opacity-80 hover:opacity-100" href="#plugins">
            {t("plugins_nav") ?? "Plugins"}
          </a>
        </nav>

        {/* === Language & Theme === */}
        <div className="relative flex items-center gap-3" ref={dropdownRef}>
          {/* 🌍 Dropdown Bahasa */}
          <div className="relative">
            <button
              aria-label="Change language"
              onClick={() => setShowDropdown((v) => !v)}
              className="inline-flex items-center justify-center gap-1 rounded-full border border-slate-200 dark:border-slate-700 h-9 px-3 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{lang.toUpperCase()}</span>
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg">
                <ul className="text-sm">
                  <li>
                    <button
                      onClick={() => changeLang("id")}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 ${
                        lang === "id"
                          ? "font-semibold text-sky-600 dark:text-sky-400"
                          : ""
                      }`}
                    >
                      🇮🇩 Bahasa Indonesia
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => changeLang("en")}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 ${
                        lang === "en"
                          ? "font-semibold text-sky-600 dark:text-sky-400"
                          : ""
                      }`}
                    >
                      🇬🇧 English
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* ☀️🌙 Toggle Tema */}
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 h-9 w-9 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
