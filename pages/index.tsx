import Calculate from "@/components/calculate";
import Saved from "@/components/saved";
import Tabs from "@/components/tabs";
import { useState } from "react";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("calculate");

  return (
    <div>
      <h1 className="text-3xl text-center font-bold">
        Calcolatore troncatrice
      </h1>
      <Tabs
        selectedTab={selectedTab}
        tabs={[
          {
            label: "Calcola",
            value: "calculate",
          },
          {
            label: "Salvataggi",
            value: "saved",
          },
        ]}
        onChange={setSelectedTab}
      />
      <div className="p-4">
        {selectedTab === "calculate" && <Calculate />}
        {selectedTab === "saved" && <Saved />}
      </div>
    </div>
  );
}
