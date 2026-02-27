"use client";

import { use } from "react";
import { ResourceContextProvider } from "ra-core";
import { CompetitorShow } from "@/shared/competitors/CompetitorShow";

export default function CompetitorsShowPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <ResourceContextProvider value="competitors">
      <CompetitorShow id={id} />
    </ResourceContextProvider>
  );
}
