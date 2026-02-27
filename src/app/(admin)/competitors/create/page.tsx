"use client";

import { ResourceContextProvider } from "ra-core";
import { CompetitorCreate } from "@/shared/competitors/CompetitorCreate";

export default function CompetitorsCreatePage() {
  return (
    <ResourceContextProvider value="competitors">
      <CompetitorCreate />
    </ResourceContextProvider>
  );
}
