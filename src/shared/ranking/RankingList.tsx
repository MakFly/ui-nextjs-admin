"use client";
import { List, DataTable, DateField } from "@/components/admin";

export function RankingList() {
  return (
    <List>
      <DataTable>
        <DataTable.Col source="keyword" label="Mot-clé" />
        <DataTable.Col source="url" label="URL" />
        <DataTable.NumberCol source="currentPosition" label="Position actuelle" />
        <DataTable.NumberCol source="predictedPosition" label="Position prédite" />
        <DataTable.NumberCol source="confidence" label="Confiance (%)" />
        <DataTable.Col source="createdAt" label="Créé le" field={DateField} />
      </DataTable>
    </List>
  );
}

