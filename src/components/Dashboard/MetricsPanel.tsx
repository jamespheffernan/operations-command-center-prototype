import { sampleMetrics } from "../../data/sampleData";
import type { Tab } from "../../types/shared";

type Props = {
  tab: Tab;
};

export default function MetricsPanel({ tab }: Props) {
  const data = sampleMetrics[tab];
  return (
    <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <p className="text-sm uppercase tracking-wide text-slate-500">{data.headline}</p>
        <h2 className="text-xl font-semibold text-slate-900">Quick view</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {data.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-inner"
          >
            <p className="text-sm text-slate-500">{metric.label}</p>
            <p className="text-2xl font-semibold text-slate-900">{metric.value}</p>
            <p className="mt-2 text-xs text-slate-500">{metric.trend}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
