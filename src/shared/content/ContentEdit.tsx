"use client";
import { Edit, SimpleForm, TextInput, SelectInput } from "@/components/admin";

export function ContentEdit({ id }: { id?: string }) {
  return (
    <Edit id={id}>
      <SimpleForm>
        <TextInput source="keyword" label="Mot-clé" />
        <TextInput source="title" label="Titre" />
        <SelectInput source="contentType" label="Type de contenu" choices={[
          { id: "blog_post", name: "Article de blog" },
          { id: "landing_page", name: "Page d'atterrissage" },
          { id: "product_description", name: "Description produit" },
          { id: "meta_description", name: "Meta description" },
        ]} />
        <SelectInput source="tone" label="Ton" choices={[
          { id: "professional", name: "Professionnel" },
          { id: "casual", name: "Décontracté" },
          { id: "persuasive", name: "Persuasif" },
          { id: "informative", name: "Informatif" },
        ]} />
        <TextInput source="content" label="Contenu" multiline />
      </SimpleForm>
    </Edit>
  );
}
