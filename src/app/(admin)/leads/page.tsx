"use client";

import { ResourceContextProvider } from "ra-core";
import { LeadList } from "@/shared/leads/LeadList";

export default function LeadsPage() {
  return (
    <ResourceContextProvider value="leads">
      <LeadList />
    </ResourceContextProvider>
  );
}
