import { useState } from "react";

import Header from "../Common/Header";
import ItemDetailPanel from "./ItemDetailPanel";
import MetricsPanel from "./MetricsPanel";
import OutstandingItems from "./OutstandingItems";
import TabNav from "./TabNav";
import type { OutstandingItem, Tab } from "../../types/shared";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("growth");
  const [selectedItem, setSelectedItem] = useState<OutstandingItem | null>(null);

  const changeTab = (tab: Tab) => {
    setActiveTab(tab);
    setSelectedItem(null);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Header />
      <TabNav activeTab={activeTab} onTabChange={changeTab} />
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col lg:flex-row">
        <main className="flex-1 space-y-5 p-6">
          <OutstandingItems
            tab={activeTab}
            selectedItemId={selectedItem?.id}
            onSelectItem={setSelectedItem}
          />
          <MetricsPanel tab={activeTab} />
        </main>
        <ItemDetailPanel item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </div>
  );
}
