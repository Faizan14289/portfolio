'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudiesPage() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 120, damping: 18 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-20">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          <motion.div variants={item} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Case Studies</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Deep dives into selected projects with context, approach, and results.</p>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map(cs => (
              <motion.article key={cs.slug} variants={item} whileHover={{ y: -5, scale: 1.02 }} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{cs.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{cs.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tech.map(t => (
                    <span key={t} className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                {cs.metrics && (
                  <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {cs.metrics.map(m => (
                      <div key={m.label} className="rounded-lg bg-gray-100 dark:bg-gray-700 px-3 py-2"><span className="font-semibold">{m.value}</span> {m.label}</div>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <Link href={`/case-studies/${cs.slug}`} className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Read Case Study →</Link>
                  {cs.demo && (
                    <a href={cs.demo} target="_blank" rel="noopener" className="text-gray-700 dark:text-gray-300 hover:underline">View Demo</a>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}