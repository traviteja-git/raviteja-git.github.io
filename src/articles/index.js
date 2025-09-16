// Auto-managed index of local markdown articles.
// Each entry: { slug, title, date, description, importPath }
// Add new .md file in this folder and append metadata here.

export const localArticles = [
  {
    slug: "Airflow",
    title: "Apache Airflow Architecture Simplified",
    date: "2025-09-16",
    description: "Example of an in-repo article rendered via markdown.",
    importPath: () => import("./airflow-architecture.md")
  }
];
