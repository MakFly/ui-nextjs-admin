"use client";
import { Create, SimpleForm, TextInput } from "@/components/admin";

export function CompetitorCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="domain" label="Domaine" isRequired />
        <TextInput source="name" label="Nom" />
        <TextInput source="keywords" label="Mots-clés (séparés par des virgules)" />
      </SimpleForm>
    </Create>
  );
}
