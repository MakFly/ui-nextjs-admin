"use client";
import { List, DataTable, DateField } from "@/components/admin";

export function CompetitorList() {
  return (
    <List>
      <DataTable>
        <DataTable.Col source="domain" label="Domaine" />
        <DataTable.Col source="name" label="Nom" />
        <DataTable.NumberCol source="overlapScore" label="Score overlap" />
        <DataTable.Col source="lastAnalyzedAt" label="Dernière analyse" field={DateField} />
        <DataTable.Col source="createdAt" label="Créé le" field={DateField} />
      </DataTable>
    </List>
  );
}
