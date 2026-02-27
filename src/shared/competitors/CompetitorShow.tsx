"use client";
import { Show, RecordField } from "@/components/admin";
import { useShowContext } from "ra-core";
import { ScoreGauge } from "../components/ScoreGauge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function CompetitorShowContent() {
  const { record } = useShowContext();
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <RecordField source="domain" label="Domaine" />
        <RecordField source="name" label="Nom" />
        <RecordField source="overlapScore" label="Score overlap" />
        <RecordField source="lastAnalyzedAt" label="Dernière analyse" />
        <RecordField source="createdAt" label="Créé le" />
      </div>
      {record?.overlapScore != null && (
        <Card>
          <CardHeader><CardTitle>Score d&apos;overlap</CardTitle></CardHeader>
          <CardContent className="flex justify-center">
            <ScoreGauge score={Math.round(record.overlapScore * 100)} label="Overlap" />
          </CardContent>
        </Card>
      )}
      {record?.keywords && record.keywords.length > 0 && (
        <Card>
          <CardHeader><CardTitle>Mots-clés communs</CardTitle></CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {record.keywords.map((kw: string) => <Badge key={kw} variant="secondary">{kw}</Badge>)}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export function CompetitorShow({ id }: { id?: string }) {
  return (
    <Show id={id}>
      <CompetitorShowContent />
    </Show>
  );
}
