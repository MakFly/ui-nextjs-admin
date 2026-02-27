"use client";

import { use } from "react";
import { ResourceContextProvider } from "ra-core";
import { ContentShow } from "@/shared/content/ContentShow";

export default function ContentShowPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <ResourceContextProvider value="content">
      <ContentShow id={id} />
    </ResourceContextProvider>
  );
}
