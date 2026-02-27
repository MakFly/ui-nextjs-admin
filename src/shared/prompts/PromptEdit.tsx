"use client";
import { Edit, SimpleForm, TextInput, SelectInput } from "@/components/admin";

export function PromptEdit({ id }: { id?: string }) {
  return (
    <Edit id={id}>
      <SimpleForm>
        <TextInput source="name" label="Nom" />
        <SelectInput source="category" label="Catégorie" choices={[
          { id: "ranking", name: "Ranking" },
          { id: "content", name: "Contenu" },
          { id: "competitor", name: "Concurrents" },
          { id: "outreach", name: "Outreach" },
          { id: "lead", name: "Leads" },
        ]} />
        <TextInput source="template" label="Template" multiline />
      </SimpleForm>
    </Edit>
  );
}
