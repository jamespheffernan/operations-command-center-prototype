import type { OutstandingItem } from "../../types/shared";

type Props = {
  item: OutstandingItem | null;
  onClose: () => void;
};

export default function ItemDetailPanel({ item, onClose }: Props) {
  return (
    <aside className="w-full border-l border-slate-200 bg-white p-6 lg:w-80">
      {item ? (
        <div className="space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Selected sample</p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">{item.name}</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-2 py-1 text-sm text-slate-500 hover:bg-slate-100"
              aria-label="Close details"
            >
              Close
            </button>
          </div>
          <p className="text-sm leading-6 text-slate-600">{item.description}</p>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-slate-500">Owner</dt>
              <dd className="font-medium text-slate-900">{item.owner}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Status</dt>
              <dd className="font-medium text-slate-900">{item.status.replace("_", " ")}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Boundary</dt>
              <dd className="font-medium text-slate-900">Fictional, browser-only data</dd>
            </div>
          </dl>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 p-5 text-sm text-slate-500">
          Select a work item to inspect the prototype detail panel.
        </div>
      )}
    </aside>
  );
}
