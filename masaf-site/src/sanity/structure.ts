import type { StructureResolver } from "sanity/structure";

/**
 * Studio structure: surfaces singletons as dedicated items (not lists)
 * and groups regular documents below.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("Home Page")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("About Page")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.listItem()
        .title("MASAF Spaces Page")
        .child(
          S.document().schemaType("masafSpacesPage").documentId("masafSpacesPage"),
        ),
      S.listItem()
        .title("Programs Page")
        .child(S.document().schemaType("programsPage").documentId("programsPage")),
      S.divider(),
      S.documentTypeListItem("program").title("Programs"),
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("event").title("Events"),
      S.documentTypeListItem("resource").title("Resources"),
      S.documentTypeListItem("partner").title("Partners"),
      S.divider(),
      S.documentTypeListItem("inquiry").title("Inquiries"),
    ]);
