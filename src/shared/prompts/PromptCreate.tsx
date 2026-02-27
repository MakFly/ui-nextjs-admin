"use client";
import { Create, SimpleForm, TextInput, SelectInput } from "@/components/admin";

export function PromptCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Nom" isRequired />
        <SelectInput source="category" label="Catégorie" choices={[
          { id: "ranking", name: "Ranking" },
          { id: "content", name: "Contenu" },
          { id: "competitor", name: "Concurrents" },
          { id: "outreach", name: "Outreach" },
          { id: "lead", name: "Leads" },
        ]} isRequired />
        <TextInput source="template" label="Template" multiline isRequired />
      </SimpleForm>
    </Create>
  );
}
