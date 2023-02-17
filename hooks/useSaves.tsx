import { Calculation } from "@/models/calculation";
import { useEffect, useState } from "react";

export default function useSaves() {
  const [saves, setSaves] = useState<Calculation[]>([]);

  useEffect(() => {
    let localData = localStorage.getItem("saves");
    if (localData) {
      setSaves(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("saves", JSON.stringify(saves));
  }, [saves]);

  const add = (calculation: Calculation) => {
    setSaves((prev) => [calculation, ...prev]);
  };

  const remove = (guid: string) => {
    setSaves((prev) => prev.filter((c) => c.id !== guid));
  };

  return {
    saves,
    add,
    remove,
  };
}
