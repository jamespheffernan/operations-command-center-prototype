export type Tab = "growth" | "planning" | "operations";

export interface OutstandingItem {
  id: string;
  type: "approval" | "decision" | "task" | "review";
  tab: Tab;
  name: string;
  description: string;
  status: "pending" | "in_progress" | "resolved";
  owner: string;
  daysOutstanding: number;
  synthetic: true;
}

export interface Metric {
  label: string;
  value: string;
  trend: string;
  synthetic: true;
}
