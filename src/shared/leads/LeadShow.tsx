"use client";
import { Show, RecordField } from "@/components/admin";
import { useShowContext } from "ra-core";
import { ScoreGauge } from "../components/ScoreGauge";
import { LeadCategoryPill } from "../components/LeadCategoryPill";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function getCategory(score: number): "hot" | "warm" | "cold" {
  if (score >= 70) return "hot";
  if (score >= 40) return "warm";
  return "cold";
}

function LeadShowContent() {
  const { record } = useShowContext();
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <RecordField source="domain" label="Domaine" />
        <RecordField source="contactName" label="Contact" />
        <RecordField source="contactEmail" label="Email" />
        <RecordField source="source" label="Source" />
        <RecordField source="status" label="Statut" />
        <RecordField source="createdAt" label="Créé le" />
      </div>
      {record?.score != null && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Score</CardTitle>
              <LeadCategoryPill category={getCategory(record.score)} />
            </div>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ScoreGauge score={record.score} label="Lead Score" />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export function LeadShow({ id }: { id?: string }) {
  return (
    <Show id={id}>
      <LeadShowContent />
    </Show>
  );
}
