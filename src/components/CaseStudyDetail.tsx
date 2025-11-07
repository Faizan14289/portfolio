'use client';

import { motion, Variants } from 'framer-motion';
import type { CaseStudy } from '@/data/caseStudies';
import type { SitePreview } from '@/lib/sitePreview';

export default function CaseStudyDetailView({ cs, site }: { cs: CaseStudy; site?: SitePreview }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 120, damping: 18 }
    }
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <motion.h1 variants={item} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
        {cs.title}
      </motion.h1>
      <motion.p variants={item} className="text-gray-700 dark:text-gray-300 mb-6">
        {cs.summary}
      </motion.p>

      {cs.context && (
        <motion.div variants={item} className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Context</h3>
          <p className="text-gray-700 dark:text-gray-300">{cs.context}</p>
        </motion.div>
      )}

      {cs.approach && (
        <motion.div variants={item} className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Approach</h3>
          <p className="text-gray-700 dark:text-gray-300">{cs.approach}</p>
        </motion.div>
      )}

      <motion.div variants={item} className="flex flex-wrap gap-2 mb-6">
        {cs.tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </motion.div>

      {cs.features && cs.features.length > 0 && (
        <motion.div variants={item} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Key Features</h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            {cs.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {cs.metrics && (
        <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {cs.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 shadow border border-white/20 text-center"
            >
              <div className="text-2xl font-bold text-gray-800 dark:text-white">{m.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{m.label}</div>
            </div>
          ))}
        </motion.div>
      )}

      {cs.responsibilities && cs.responsibilities.length > 0 && (
        <motion.div variants={item} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Responsibilities</h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            {cs.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {cs.outcomes && cs.outcomes.length > 0 && (
        <motion.div variants={item} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Outcomes</h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            {cs.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {site && (
        <motion.div variants={item} className="rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 shadow-xl border border-white/20 mb-8">
          <div className="flex items-start gap-4">
            {site.favicon && (
              <img src={site.favicon} alt="Site icon" className="w-8 h-8 rounded" />
            )}
            <div>
              <div className="text-lg font-semibold text-gray-800 dark:text-white">
                {site.title || 'Site Preview'}
              </div>
              {site.description && (
                <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  {site.description}
                </div>
              )}
              {site.headings && site.headings.length > 0 && (
                <ul className="mt-3 text-sm text-gray-700 dark:text-gray-300 list-disc pl-5">
                  {site.headings.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              {site.image && (
                <div className="mt-4">
                  <img src={site.image} alt="Preview" className="w-full max-h-64 object-cover rounded-lg" />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {cs.demo && (
        <motion.a
          variants={item}
          href={cs.demo}
          target="_blank"
          rel="noopener"
          className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          Visit Live Demo →
        </motion.a>
      )}
    </motion.div>
  );
}