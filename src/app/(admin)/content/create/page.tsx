"use client";

import { ResourceContextProvider } from "ra-core";
import { ContentCreate } from "@/shared/content/ContentCreate";

export default function ContentCreatePage() {
  return (
    <ResourceContextProvider value="content">
      <ContentCreate />
    </ResourceContextProvider>
  );
}
