"use client";

import { ResourceContextProvider } from "ra-core";
import { GscDashboard } from "@/shared/gsc/GscDashboard";

export default function GscPage() {
  return (
    <ResourceContextProvider value="gsc">
      <GscDashboard />
    </ResourceContextProvider>
  );
}
