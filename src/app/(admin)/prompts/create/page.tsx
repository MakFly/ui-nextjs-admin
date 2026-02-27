"use client";

import { ResourceContextProvider } from "ra-core";
import { PromptCreate } from "@/shared/prompts/PromptCreate";

export default function PromptsCreatePage() {
  return (
    <ResourceContextProvider value="prompts">
      <PromptCreate />
    </ResourceContextProvider>
  );
}
