import { AdminProvidersClient } from "./admin-providers-client";

export const dynamic = "force-dynamic";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminProvidersClient>{children}</AdminProvidersClient>;
}
