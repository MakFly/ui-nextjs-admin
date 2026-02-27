"use client";
import { Create, SimpleForm, TextInput, SelectInput } from "@/components/admin";

export function AuditCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="url" label="URL à auditer" isRequired />
        <SelectInput source="type" label="Type d'audit" choices={[
          { id: "technical", name: "Technique" },
          { id: "content", name: "Contenu" },
          { id: "full", name: "Complet" },
        ]} defaultValue="full" />
      </SimpleForm>
    </Create>
  );
}
