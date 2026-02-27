"use client";

import { ResourceContextProvider } from "ra-core";
import { OutreachList } from "@/shared/outreach/OutreachList";

export default function OutreachPage() {
  return (
    <ResourceContextProvider value="outreach">
      <OutreachList />
    </ResourceContextProvider>
  );
}
