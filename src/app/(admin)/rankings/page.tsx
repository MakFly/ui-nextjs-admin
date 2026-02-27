"use client";

import { ResourceContextProvider } from "ra-core";
import { RankingList } from "@/shared/ranking/RankingList";

export default function RankingsPage() {
  return (
    <ResourceContextProvider value="rankings">
      <RankingList />
    </ResourceContextProvider>
  );
}
