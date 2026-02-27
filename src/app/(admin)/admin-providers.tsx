"use client";

import { useMemo } from "react";
import { CoreAdminContext, localStorageStore } from "ra-core";
import { dataProvider } from "@/shared/dataProvider";
import { authProvider } from "@/shared/authProvider";
import { i18nProvider } from "@/shared/i18nProvider";
import { Layout } from "@/components/admin/layout";
import { ThemeProvider } from "@/components/admin/theme-provider";
import { ResourceRegistrar } from "@/components/admin/resource-registrar";
import {
  TrendingUp,
  FileText,
  Users,
  Mail,
  UserCheck,
  Search,
  BarChart3,
  Globe,
  MessageSquare,
  Settings,
} from "lucide-react";

const SIDEBAR_RESOURCES = [
  { name: "rankings", icon: TrendingUp },
  { name: "content", icon: FileText },
  { name: "competitors", icon: Users },
  { name: "outreach", icon: Mail },
  { name: "leads", icon: UserCheck },
  { name: "audits", icon: Search },
  { name: "gsc", icon: BarChart3 },
  { name: "market", icon: Globe },
  { name: "prompts", icon: MessageSquare },
  { name: "settings", icon: Settings },
] as const;

export function AdminProviders({ children }: { children: React.ReactNode }) {
  const store = useMemo(() => localStorageStore(), []);
  return (
    <CoreAdminContext
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      store={store}
    >
      <ResourceRegistrar resources={SIDEBAR_RESOURCES} />
      <ThemeProvider>
        <Layout>
          {children}
        </Layout>
      </ThemeProvider>
    </CoreAdminContext>
  );
}
