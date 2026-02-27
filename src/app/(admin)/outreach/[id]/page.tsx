"use client";

import { use } from "react";
import { ResourceContextProvider } from "ra-core";
import { OutreachShow } from "@/shared/outreach/OutreachShow";

export default function OutreachShowPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <ResourceContextProvider value="outreach">
      <OutreachShow id={id} />
    </ResourceContextProvider>
  );
}
