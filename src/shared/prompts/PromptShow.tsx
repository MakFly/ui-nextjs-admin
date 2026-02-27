"use client";
import { Show, RecordField } from "@/components/admin";
import { useShowContext } from "ra-core";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function PromptShowContent() {
  const { record } = useShowContext();
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <RecordField source="name" label="Nom" />
        <RecordField source="category" label="Catégorie" />
        <RecordField source="createdAt" label="Créé le" />
        <RecordField source="updatedAt" label="Modifié le" />
      </div>
      {record?.template && (
        <Card>
          <CardHeader><CardTitle>Template</CardTitle></CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded-lg overflow-auto whitespace-pre-wrap">{record.template}</pre>
          </CardContent>
        </Card>
      )}
      {record?.variables && record.variables.length > 0 && (
        <Card>
          <CardHeader><CardTitle>Variables</CardTitle></CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {record.variables.map((v: string) => <Badge key={v} variant="secondary">{v}</Badge>)}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export function PromptShow({ id }: { id?: string }) {
  return (
    <Show id={id}>
      <PromptShowContent />
    </Show>
  );
}
