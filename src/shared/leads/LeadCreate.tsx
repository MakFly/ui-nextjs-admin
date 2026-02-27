"use client";
import { Create, SimpleForm, TextInput } from "@/components/admin";

export function LeadCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="domain" label="Domaine" isRequired />
        <TextInput source="contactEmail" label="Email du contact" />
        <TextInput source="contactName" label="Nom du contact" />
        <TextInput source="source" label="Source" />
      </SimpleForm>
    </Create>
  );
}
