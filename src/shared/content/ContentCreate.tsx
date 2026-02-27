"use client";
import { Create, SimpleForm, TextInput, SelectInput } from "@/components/admin";

export function ContentCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="keyword" label="Mot-clé" isRequired />
        <SelectInput source="contentType" label="Type de contenu" choices={[
          { id: "blog_post", name: "Article de blog" },
          { id: "landing_page", name: "Page d'atterrissage" },
          { id: "product_description", name: "Description produit" },
          { id: "meta_description", name: "Meta description" },
        ]} isRequired />
        <SelectInput source="tone" label="Ton" choices={[
          { id: "professional", name: "Professionnel" },
          { id: "casual", name: "Décontracté" },
          { id: "persuasive", name: "Persuasif" },
          { id: "informative", name: "Informatif" },
        ]} />
      </SimpleForm>
    </Create>
  );
}
