'use client';

import { motion, Variants } from 'framer-motion';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsPage() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 120, damping: 18 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-20">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
          <motion.div variants={item} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Testimonials
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              What clients and teammates say about working with me.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {testimonials.map((t) => (
              <motion.blockquote
                key={t.id}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20"
              >
                <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-800 dark:text-white">{t.name}</span> · {t.role}, {t.company}
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Work With Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}