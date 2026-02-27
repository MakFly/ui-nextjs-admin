"use client";

import { ResourceContextProvider } from "ra-core";
import { LeadCreate } from "@/shared/leads/LeadCreate";

export default function LeadsCreatePage() {
  return (
    <ResourceContextProvider value="leads">
      <LeadCreate />
    </ResourceContextProvider>
  );
}
