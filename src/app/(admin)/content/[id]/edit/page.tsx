"use client";

import { use } from "react";
import { ResourceContextProvider } from "ra-core";
import { ContentEdit } from "@/shared/content/ContentEdit";

export default function ContentEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <ResourceContextProvider value="content">
      <ContentEdit id={id} />
    </ResourceContextProvider>
  );
}
