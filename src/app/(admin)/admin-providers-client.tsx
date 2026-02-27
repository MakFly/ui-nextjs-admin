"use client";

import dynamic from "next/dynamic";

const AdminProviders = dynamic(
  () => import("./admin-providers").then((m) => ({ default: m.AdminProviders })),
  { ssr: false }
);

export function AdminProvidersClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminProviders>{children}</AdminProviders>;
}
