export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Paylabs Resources ·
        {" "}
        <a
          className="underline hover:no-underline"
          href="https://paylabs.co.id/api-reference.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          API Reference
        </a>
      </div>
    </footer>
  )
}
