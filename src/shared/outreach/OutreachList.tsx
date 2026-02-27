"use client";
import { List, DataTable, DateField, SelectField } from "@/components/admin";

export function OutreachList() {
  return (
    <List>
      <DataTable>
        <DataTable.Col source="recipientName" label="Destinataire" />
        <DataTable.Col source="recipientEmail" label="Email" />
        <DataTable.Col source="subject" label="Sujet" />
        <DataTable.Col source="status" label="Statut">
          <SelectField source="status" choices={[
            { id: "draft", name: "Brouillon" },
            { id: "sent", name: "Envoyé" },
            { id: "replied", name: "Répondu" },
            { id: "bounced", name: "Rebond" },
          ]} />
        </DataTable.Col>
        <DataTable.Col source="createdAt" label="Créé le" field={DateField} />
      </DataTable>
    </List>
  );
}
