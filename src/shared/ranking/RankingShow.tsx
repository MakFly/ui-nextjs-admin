"use client";
import { Show, RecordField } from "@/components/admin";
import { useShowContext } from "ra-core";
import { ScoreGauge } from "../components/ScoreGauge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function RankingShowContent() {
  const { record } = useShowContext();
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <RecordField source="keyword" label="Mot-clé" />
        <RecordField source="url" label="URL" />
        <RecordField source="currentPosition" label="Position actuelle" />
        <RecordField source="predictedPosition" label="Position prédite" />
        <RecordField source="createdAt" label="Créé le" />
      </div>
      {record?.confidence != null && (
        <Card>
          <CardHeader><CardTitle>Confiance</CardTitle></CardHeader>
          <CardContent className="flex justify-center">
            <ScoreGauge score={record.confidence} label="Confiance" />
          </CardContent>
        </Card>
      )}
      {record?.factors && (
        <Card>
          <CardHeader><CardTitle>Facteurs</CardTitle></CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg overflow-auto">
              {JSON.stringify(record.factors, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export function RankingShow({ id }: { id?: string }) {
  return (
    <Show id={id}>
      <RankingShowContent />
    </Show>
  );
}
