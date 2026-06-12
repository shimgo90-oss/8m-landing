import { notFound } from "next/navigation";
import { LandingExperience } from "../../landing/page";
import { VARIANTS, VARIANT_MAP } from "../../landing/_variants";

export function generateStaticParams() {
  return VARIANTS.map((v) => ({ variant: v.slug }));
}

export default async function LandingVariantPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;
  const v = VARIANT_MAP[variant];
  if (!v) notFound();
  return <LandingExperience sections={v.sections} />;
}
