"use client";
import { Admin } from "@/components/admin";
import { Resource } from "ra-core";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { i18nProvider } from "./i18nProvider";
import { Dashboard } from "./dashboard/Dashboard";
import { RankingList } from "./ranking/RankingList";
import { RankingCreate } from "./ranking/RankingCreate";
import { RankingShow } from "./ranking/RankingShow";
import { ContentList } from "./content/ContentList";
import { ContentCreate } from "./content/ContentCreate";
import { ContentShow } from "./content/ContentShow";
import { ContentEdit } from "./content/ContentEdit";
import { CompetitorList } from "./competitors/CompetitorList";
import { CompetitorCreate } from "./competitors/CompetitorCreate";
import { CompetitorShow } from "./competitors/CompetitorShow";
import { OutreachList } from "./outreach/OutreachList";
import { OutreachCreate } from "./outreach/OutreachCreate";
import { OutreachShow } from "./outreach/OutreachShow";
import { LeadList } from "./leads/LeadList";
import { LeadCreate } from "./leads/LeadCreate";
import { LeadShow } from "./leads/LeadShow";
import { AuditList } from "./audits/AuditList";
import { AuditCreate } from "./audits/AuditCreate";
import { AuditShow } from "./audits/AuditShow";
import { GscDashboard } from "./gsc/GscDashboard";
import { MarketDashboard } from "./market/MarketDashboard";
import { PromptList } from "./prompts/PromptList";
import { PromptCreate } from "./prompts/PromptCreate";
import { PromptShow } from "./prompts/PromptShow";
import { PromptEdit } from "./prompts/PromptEdit";
import { SettingsPage } from "./settings/SettingsPage";
import {
  TrendingUp,
  FileText,
  Users,
  Send,
  UserCheck,
  ClipboardCheck,
  BarChart3,
  Globe,
  MessageSquare,
  Settings,
} from "lucide-react";

export default function AdminApp() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      dashboard={Dashboard}
    >
      <Resource
        name="rankings"
        icon={TrendingUp}
        list={RankingList}
        create={RankingCreate}
        show={RankingShow}
      />
      <Resource
        name="content"
        icon={FileText}
        list={ContentList}
        create={ContentCreate}
        show={ContentShow}
        edit={ContentEdit}
      />
      <Resource
        name="competitors"
        icon={Users}
        list={CompetitorList}
        create={CompetitorCreate}
        show={CompetitorShow}
      />
      <Resource
        name="outreach"
        icon={Send}
        list={OutreachList}
        create={OutreachCreate}
        show={OutreachShow}
      />
      <Resource
        name="leads"
        icon={UserCheck}
        list={LeadList}
        create={LeadCreate}
        show={LeadShow}
      />
      <Resource
        name="audits"
        icon={ClipboardCheck}
        list={AuditList}
        create={AuditCreate}
        show={AuditShow}
      />
      <Resource name="gsc" icon={BarChart3} list={GscDashboard} />
      <Resource name="market" icon={Globe} list={MarketDashboard} />
      <Resource
        name="prompts"
        icon={MessageSquare}
        list={PromptList}
        create={PromptCreate}
        show={PromptShow}
        edit={PromptEdit}
      />
      <Resource name="settings" icon={Settings} list={SettingsPage} />
    </Admin>
  );
}
