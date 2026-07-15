import { sampleItems } from "./sampleData";
import type { OutstandingItem, Tab } from "../types/shared";

export const itemsForTab = (
  tab: Tab,
  items: OutstandingItem[] = sampleItems,
): OutstandingItem[] => items.filter((item) => item.tab === tab);
