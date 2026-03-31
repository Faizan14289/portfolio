import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyDetailView from "@/components/CaseStudyDetail";
import { getSitePreview } from "@/lib/sitePreview";

type Params = { slug: string };
type Props = { params: Promise<Params> };

export default async function CaseStudyDetail({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return notFound();
  const site = cs.demo ? await getSitePreview(cs.demo) : null;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
      <CaseStudyDetailView cs={cs} site={site ?? undefined} />
    </div>
  );
}
