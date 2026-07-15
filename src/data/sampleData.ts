import type { Metric, OutstandingItem, Tab } from "../types/shared";

export const sampleItems: OutstandingItem[] = [
  {
    id: "sample-growth-approval",
    type: "approval",
    tab: "growth",
    name: "Approve the fictional launch brief",
    description: "Review positioning and success criteria for the sample campaign.",
    status: "pending",
    owner: "Sample growth lead",
    daysOutstanding: 2,
    synthetic: true,
  },
  {
    id: "sample-growth-review",
    type: "review",
    tab: "growth",
    name: "Review sample interview notes",
    description: "Extract themes from five fictional customer interviews.",
    status: "in_progress",
    owner: "Sample researcher",
    daysOutstanding: 1,
    synthetic: true,
  },
  {
    id: "sample-planning-decision",
    type: "decision",
    tab: "planning",
    name: "Choose a prototype milestone",
    description: "Select one of three made-up delivery sequences for the next demo.",
    status: "pending",
    owner: "Sample product lead",
    daysOutstanding: 3,
    synthetic: true,
  },
  {
    id: "sample-planning-review",
    type: "review",
    tab: "planning",
    name: "Review the synthetic capacity model",
    description: "Check the assumptions in a fictional six-week planning exercise.",
    status: "resolved",
    owner: "Sample planning lead",
    daysOutstanding: 0,
    synthetic: true,
  },
  {
    id: "sample-operations-task",
    type: "task",
    tab: "operations",
    name: "Reconcile the demonstration queue",
    description: "Confirm that every sample work item has an owner and next action.",
    status: "in_progress",
    owner: "Sample operator",
    daysOutstanding: 1,
    synthetic: true,
  },
  {
    id: "sample-operations-approval",
    type: "approval",
    tab: "operations",
    name: "Approve the fictional runbook",
    description: "Inspect a made-up incident checklist before the prototype review.",
    status: "pending",
    owner: "Sample operations lead",
    daysOutstanding: 4,
    synthetic: true,
  },
];

export const sampleMetrics: Record<Tab, { headline: string; metrics: Metric[] }> = {
  growth: {
    headline: "Sample growth signals",
    metrics: [
      { label: "Qualified conversations", value: "18 demo", trend: "+3 synthetic", synthetic: true },
      { label: "Briefs awaiting review", value: "4 demo", trend: "-1 synthetic", synthetic: true },
      { label: "Experiment confidence", value: "72% demo", trend: "+5 sample pts", synthetic: true },
    ],
  },
  planning: {
    headline: "Sample planning signals",
    metrics: [
      { label: "Open decisions", value: "6 demo", trend: "2 need owners", synthetic: true },
      { label: "Milestones", value: "3 demo", trend: "all fictional", synthetic: true },
      { label: "Capacity", value: "80% demo", trend: "sample only", synthetic: true },
    ],
  },
  operations: {
    headline: "Sample operations signals",
    metrics: [
      { label: "Queue depth", value: "9 demo", trend: "-2 synthetic", synthetic: true },
      { label: "Pending approvals", value: "3 demo", trend: "1 ageing", synthetic: true },
      { label: "Runbook coverage", value: "88% demo", trend: "+4 sample pts", synthetic: true },
    ],
  },
};
