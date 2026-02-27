"use client";
import { Create, SimpleForm, TextInput } from "@/components/admin";

export function OutreachCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="recipientEmail" label="Email du destinataire" isRequired />
        <TextInput source="recipientName" label="Nom du destinataire" />
        <TextInput source="subject" label="Sujet" isRequired />
        <TextInput source="context" label="Contexte (pour la génération)" multiline />
      </SimpleForm>
    </Create>
  );
}
