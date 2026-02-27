"use client";

import { use } from "react";
import { ResourceContextProvider } from "ra-core";
import { PromptEdit } from "@/shared/prompts/PromptEdit";

export default function PromptsEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <ResourceContextProvider value="prompts">
      <PromptEdit id={id} />
    </ResourceContextProvider>
  );
}
