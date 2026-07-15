import Badge from "../Common/Badge";
import { itemsForTab } from "../../data/selectors";
import type { OutstandingItem, Tab } from "../../types/shared";

const iconMap: Record<OutstandingItem["type"], { emoji: string; label: string }> = {
  approval: { emoji: "✓", label: "Approval" },
  decision: { emoji: "◆", label: "Decision" },
  task: { emoji: "→", label: "Task" },
  review: { emoji: "◎", label: "Review" },
};

type Props = {
  tab: Tab;
  selectedItemId?: string;
  onSelectItem: (item: OutstandingItem) => void;
};

export default function OutstandingItems({ tab, selectedItemId, onSelectItem }: Props) {
  const items = itemsForTab(tab);

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <header className="bg-linear-to-r from-slate-50 to-white px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-900">Outstanding items ({items.length})</h2>
        <p className="text-sm text-slate-500">Fictional work routed for a decision or review</p>
      </header>
      <ul className="divide-y divide-slate-100">
        {items.map((item) => {
          const icon = iconMap[item.type];
          const selected = selectedItemId === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                className={`flex w-full items-start gap-4 px-6 py-5 text-left transition focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sky-600 ${
                  selected ? "bg-sky-50" : "hover:bg-slate-50"
                }`}
                onClick={() => onSelectItem(item)}
                aria-label={`${icon.label}: ${item.name}`}
                aria-pressed={selected}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl text-slate-700">
                  {icon.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <Badge status={item.status} />
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                  <p className="mt-2 text-xs text-slate-500">
                    {item.owner} · {item.daysOutstanding} days outstanding
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
