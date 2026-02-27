"use client";

import { ResourceContextProvider } from "ra-core";
import { PromptList } from "@/shared/prompts/PromptList";

export default function PromptsPage() {
  return (
    <ResourceContextProvider value="prompts">
      <PromptList />
    </ResourceContextProvider>
  );
}
