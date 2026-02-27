"use client";

import { ResourceContextProvider } from "ra-core";
import { AuditCreate } from "@/shared/audits/AuditCreate";

export default function AuditsCreatePage() {
  return (
    <ResourceContextProvider value="audits">
      <AuditCreate />
    </ResourceContextProvider>
  );
}
