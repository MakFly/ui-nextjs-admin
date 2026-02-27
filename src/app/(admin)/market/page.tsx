"use client";

import { ResourceContextProvider } from "ra-core";
import { MarketDashboard } from "@/shared/market/MarketDashboard";

export default function MarketPage() {
  return (
    <ResourceContextProvider value="market">
      <MarketDashboard />
    </ResourceContextProvider>
  );
}
