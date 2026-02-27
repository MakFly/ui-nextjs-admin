"use client";
import { Show, RecordField } from "@/components/admin";
import { useShowContext } from "ra-core";
import { ScoreGauge } from "../components/ScoreGauge";
import { SeverityBadge } from "../components/SeverityBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function AuditShowContent() {
  const { record } = useShowContext();
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <RecordField source="url" label="URL" />
        <RecordField source="type" label="Type" />
        <RecordField source="status" label="Statut" />
        <RecordField source="createdAt" label="Créé le" />
      </div>
      {record?.score != null && (
        <Card>
          <CardHeader><CardTitle>Score</CardTitle></CardHeader>
          <CardContent className="flex justify-center">
            <ScoreGauge score={record.score} label="Score SEO" />
          </CardContent>
        </Card>
      )}
      {record?.issues && record.issues.length > 0 && (
        <Card>
          <CardHeader><CardTitle>Problèmes ({record.issues.length})</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {record.issues.map((issue: { message: string; category: string; severity: "info" | "warning" | "critical"; element?: string }, idx: number) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <SeverityBadge severity={issue.severity} />
                  <div>
                    <p className="text-sm font-medium">{issue.message}</p>
                    <p className="text-xs text-muted-foreground">{issue.category}</p>
                    {issue.element && <code className="text-xs bg-muted px-1 rounded mt-1 inline-block">{issue.element}</code>}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export function AuditShow({ id }: { id?: string }) {
  return (
    <Show id={id}>
      <AuditShowContent />
    </Show>
  );
}
