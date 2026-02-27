"use client";

import { ResourceContextProvider } from "ra-core";
import { ContentList } from "@/shared/content/ContentList";

export default function ContentPage() {
  return (
    <ResourceContextProvider value="content">
      <ContentList />
    </ResourceContextProvider>
  );
}
