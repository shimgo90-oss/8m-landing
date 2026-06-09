import { notFound } from "next/navigation";
import { PAGES, ContentView } from "../_content";

export function generateStaticParams() {
  return PAGES.map((p) => ({ slug: p.slug }));
}

export default async function MenuPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = PAGES.find((p) => p.slug === slug);
  if (!page) notFound();
  return <ContentView page={page} />;
}
