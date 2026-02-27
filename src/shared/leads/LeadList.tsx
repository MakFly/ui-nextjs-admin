"use client";
import { List, DataTable, DateField, SelectField } from "@/components/admin";

export function LeadList() {
  return (
    <List>
      <DataTable>
        <DataTable.Col source="domain" label="Domaine" />
        <DataTable.Col source="contactName" label="Contact" />
        <DataTable.Col source="contactEmail" label="Email" />
        <DataTable.NumberCol source="score" label="Score" />
        <DataTable.Col source="source" label="Source" />
        <DataTable.Col source="status" label="Statut">
          <SelectField source="status" choices={[
            { id: "new", name: "Nouveau" },
            { id: "contacted", name: "Contacté" },
            { id: "qualified", name: "Qualifié" },
            { id: "converted", name: "Converti" },
            { id: "lost", name: "Perdu" },
          ]} />
        </DataTable.Col>
        <DataTable.Col source="createdAt" label="Créé le" field={DateField} />
      </DataTable>
    </List>
  );
}
