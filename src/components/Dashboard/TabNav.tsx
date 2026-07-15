import type { Tab } from "../../types/shared";

type TabDefinition = {
  id: Tab;
  label: string;
  description: string;
};

const tabs: TabDefinition[] = [
  { id: "growth", label: "Growth", description: "Briefs and research" },
  { id: "planning", label: "Planning", description: "Decisions and capacity" },
  { id: "operations", label: "Operations", description: "Queues and runbooks" },
];

type Props = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
};

export default function TabNav({ activeTab, onTabChange }: Props) {
  return (
    <nav className="border-b border-slate-200 bg-white" aria-label="Dashboard sections">
      <div className="mx-auto max-w-6xl overflow-x-auto px-4">
        <div className="flex min-w-max space-x-4">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`rounded-t-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{tab.label}</span>
                  <span className={isActive ? "text-xs text-slate-300" : "text-xs text-slate-400"}>
                    {tab.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
