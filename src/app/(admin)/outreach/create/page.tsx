"use client";

import { ResourceContextProvider } from "ra-core";
import { OutreachCreate } from "@/shared/outreach/OutreachCreate";

export default function OutreachCreatePage() {
  return (
    <ResourceContextProvider value="outreach">
      <OutreachCreate />
    </ResourceContextProvider>
  );
}
