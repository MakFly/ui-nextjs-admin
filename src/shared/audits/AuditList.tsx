"use client";
import { List, DataTable, DateField, SelectField } from "@/components/admin";

export function AuditList() {
  return (
    <List>
      <DataTable>
        <DataTable.Col source="url" label="URL" />
        <DataTable.Col source="type" label="Type">
          <SelectField source="type" choices={[
            { id: "technical", name: "Technique" },
            { id: "content", name: "Contenu" },
            { id: "full", name: "Complet" },
          ]} />
        </DataTable.Col>
        <DataTable.Col source="status" label="Statut">
          <SelectField source="status" choices={[
            { id: "pending", name: "En attente" },
            { id: "running", name: "En cours" },
            { id: "completed", name: "Terminé" },
            { id: "error", name: "Erreur" },
          ]} />
        </DataTable.Col>
        <DataTable.NumberCol source="score" label="Score" />
        <DataTable.Col source="createdAt" label="Créé le" field={DateField} />
      </DataTable>
    </List>
  );
}
