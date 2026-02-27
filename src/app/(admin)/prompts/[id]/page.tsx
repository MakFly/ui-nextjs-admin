"use client";

import { use } from "react";
import { ResourceContextProvider } from "ra-core";
import { PromptShow } from "@/shared/prompts/PromptShow";

export default function PromptsShowPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <ResourceContextProvider value="prompts">
      <PromptShow id={id} />
    </ResourceContextProvider>
  );
}
