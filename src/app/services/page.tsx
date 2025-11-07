'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/data/services';

export default function ServicesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Partner on backend APIs, e‑commerce, performance, DevOps, and real estate automation.</p>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <motion.article key={svc.slug} variants={item} whileHover={{ y: -5, scale: 1.02 }} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{svc.icon}</span>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{svc.title}</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{svc.summary}</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                  {svc.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {svc.tech && (
                  <div className="flex flex-wrap gap-2">
                    {svc.tech.map((t) => (
                      <span key={t} className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </motion.div>

          <motion.div variants={item} className="text-center mt-12">
            <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
              Let’s Work Together
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}