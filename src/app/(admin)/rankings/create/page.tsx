"use client";

import { ResourceContextProvider } from "ra-core";
import { RankingCreate } from "@/shared/ranking/RankingCreate";

export default function RankingsCreatePage() {
  return (
    <ResourceContextProvider value="rankings">
      <RankingCreate />
    </ResourceContextProvider>
  );
}
