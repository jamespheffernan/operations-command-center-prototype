import { describe, expect, it } from "vitest";

import { sampleItems, sampleMetrics } from "./sampleData";
import { itemsForTab } from "./selectors";

describe("synthetic dashboard data", () => {
  it("keeps every item explicitly synthetic", () => {
    expect(sampleItems.length).toBeGreaterThan(0);
    expect(sampleItems.every((item) => item.synthetic)).toBe(true);
  });

  it("filters work items by tab", () => {
    expect(itemsForTab("growth").every((item) => item.tab === "growth")).toBe(true);
    expect(itemsForTab("planning").every((item) => item.tab === "planning")).toBe(true);
    expect(itemsForTab("operations").every((item) => item.tab === "operations")).toBe(true);
  });

  it("labels every metric as demonstration data", () => {
    const metrics = Object.values(sampleMetrics).flatMap((group) => group.metrics);
    expect(metrics.every((metric) => metric.synthetic && metric.value.includes("demo"))).toBe(true);
  });
});
