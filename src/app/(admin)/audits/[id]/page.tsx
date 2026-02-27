"use client";

import { use } from "react";
import { ResourceContextProvider } from "ra-core";
import { AuditShow } from "@/shared/audits/AuditShow";

export default function AuditsShowPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <ResourceContextProvider value="audits">
      <AuditShow id={id} />
    </ResourceContextProvider>
  );
}
