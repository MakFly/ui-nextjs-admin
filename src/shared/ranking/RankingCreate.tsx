"use client";
import { Create, SimpleForm, TextInput, NumberInput } from "@/components/admin";

export function RankingCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="keyword" label="Mot-clé" isRequired />
        <TextInput source="url" label="URL" isRequired />
        <NumberInput source="currentPosition" label="Position actuelle" />
      </SimpleForm>
    </Create>
  );
}
