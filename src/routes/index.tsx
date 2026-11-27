import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Toptree — Plantas Adultas" },
      { name: "description", content: "Toptree — Plantas Adultas." },
      { property: "og:title", content: "Toptree — Plantas Adultas" },
      { property: "og:description", content: "Toptree — Plantas Adultas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-screen w-screen overflow-hidden" style={{ margin: 0, padding: 0 }}>
      <iframe
        src="https://bonicripto.github.io/blank-page-bloom-studio/"
        title="Toptree — Plantas Adultas"
        className="block h-full w-full border-0"
        style={{ width: "100vw", height: "100vh", border: 0 }}
      />
    </main>
  );
}
