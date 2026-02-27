"use client";
import { List, DataTable, DateField, SelectField } from "@/components/admin";

export function ContentList() {
  return (
    <List>
      <DataTable>
        <DataTable.Col source="keyword" label="Mot-clé" />
        <DataTable.Col source="title" label="Titre" />
        <DataTable.Col source="contentType" label="Type" />
        <DataTable.Col source="status" label="Statut">
          <SelectField source="status" choices={[
            { id: "pending", name: "En attente" },
            { id: "generating", name: "En cours" },
            { id: "completed", name: "Terminé" },
            { id: "error", name: "Erreur" },
          ]} />
        </DataTable.Col>
        <DataTable.Col source="createdAt" label="Créé le" field={DateField} />
      </DataTable>
    </List>
  );
}
