"use client";

import { ResourceContextProvider } from "ra-core";
import { SettingsPage } from "@/shared/settings/SettingsPage";

export default function SettingsPageRoute() {
  return (
    <ResourceContextProvider value="settings">
      <SettingsPage />
    </ResourceContextProvider>
  );
}
