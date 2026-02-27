"use client";
import { Show, RecordField } from "@/components/admin";
import { useShowContext } from "ra-core";
import { MarkdownPreview } from "../components/MarkdownPreview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function OutreachShowContent() {
  const { record } = useShowContext();
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <RecordField source="recipientName" label="Destinataire" />
        <RecordField source="recipientEmail" label="Email" />
        <RecordField source="subject" label="Sujet" />
        <RecordField source="status" label="Statut" />
        <RecordField source="createdAt" label="Créé le" />
      </div>
      {record?.body && (
        <Card>
          <CardHeader><CardTitle>Corps du message</CardTitle></CardHeader>
          <CardContent>
            <MarkdownPreview content={record.body} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export function OutreachShow({ id }: { id?: string }) {
  return (
    <Show id={id}>
      <OutreachShowContent />
    </Show>
  );
}
