import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("post").title("News Posts"),
      S.documentTypeListItem("event").title("Events"),
      S.documentTypeListItem("opportunities").title("Opportunities"),
      S.documentTypeListItem("successStories").title("Success Stories"),
      S.documentTypeListItem("resource").title("Resources"),
    ]);

