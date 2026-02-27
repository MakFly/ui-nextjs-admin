"use client";
import { List, DataTable, DateField } from "@/components/admin";

export function PromptList() {
  return (
    <List>
      <DataTable>
        <DataTable.Col source="name" label="Nom" />
        <DataTable.Col source="category" label="Catégorie" />
        <DataTable.Col source="createdAt" label="Créé le" field={DateField} />
        <DataTable.Col source="updatedAt" label="Modifié le" field={DateField} />
      </DataTable>
    </List>
  );
}
