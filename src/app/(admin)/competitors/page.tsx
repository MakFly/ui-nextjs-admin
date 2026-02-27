"use client";

import { ResourceContextProvider } from "ra-core";
import { CompetitorList } from "@/shared/competitors/CompetitorList";

export default function CompetitorsPage() {
  return (
    <ResourceContextProvider value="competitors">
      <CompetitorList />
    </ResourceContextProvider>
  );
}
