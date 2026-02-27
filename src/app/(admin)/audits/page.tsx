"use client";

import { ResourceContextProvider } from "ra-core";
import { AuditList } from "@/shared/audits/AuditList";

export default function AuditsPage() {
  return (
    <ResourceContextProvider value="audits">
      <AuditList />
    </ResourceContextProvider>
  );
}
