"use client";

import { use } from "react";
import { ResourceContextProvider } from "ra-core";
import { LeadShow } from "@/shared/leads/LeadShow";

export default function LeadsShowPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <ResourceContextProvider value="leads">
      <LeadShow id={id} />
    </ResourceContextProvider>
  );
}
