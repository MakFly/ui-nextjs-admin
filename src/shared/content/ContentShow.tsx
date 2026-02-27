"use client";
import { Show, RecordField } from "@/components/admin";
import { useShowContext } from "ra-core";
import { MarkdownPreview } from "../components/MarkdownPreview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ContentShowContent() {
  const { record } = useShowContext();
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <RecordField source="keyword" label="Mot-clé" />
        <RecordField source="title" label="Titre" />
        <RecordField source="contentType" label="Type" />
        <RecordField source="tone" label="Ton" />
        <RecordField source="status" label="Statut" />
        <RecordField source="createdAt" label="Créé le" />
      </div>
      {record?.content && (
        <Card>
          <CardHeader><CardTitle>Contenu généré</CardTitle></CardHeader>
          <CardContent>
            <MarkdownPreview content={record.content} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export function ContentShow({ id }: { id?: string }) {
  return (
    <Show id={id}>
      <ContentShowContent />
    </Show>
  );
}
