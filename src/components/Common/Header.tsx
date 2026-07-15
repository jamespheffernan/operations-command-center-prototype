export default function Header() {
  return (
    <>
      <div className="bg-slate-900 px-4 py-2 text-center text-xs font-semibold tracking-wide text-white">
        Archived UI prototype — fictional data, no live services
      </div>
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-slate-500">
              Operations Command Center
            </p>
            <h1 className="text-2xl font-semibold text-slate-900">Review dashboard</h1>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>Browser-only demo</span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-800">
              Synthetic
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
