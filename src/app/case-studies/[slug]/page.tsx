import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/caseStudies';
import CaseStudyDetailView from '../../../../components/CaseStudyDetail';
import { getSitePreview } from '@/lib/sitePreview';

type Params = { slug: string };
type Props = { params: Promise<Params> };

export default async function CaseStudyDetail({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return notFound();
  const site = cs.demo ? await getSitePreview(cs.demo) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <CaseStudyDetailView cs={cs} site={site ?? undefined} />
        </div>
      </div>
    </div>
  );
}