'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        // Use spring to satisfy Framer Motion's Transition typing
        type: 'spring' as const,
        stiffness: 120,
        damping: 18
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              Faizan Ali
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Sr. Full Stack Software Engineer (5+ years)
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Studied BS Computer Science at the University of Engineering and Technology (UET) Lahore. 
              5 years of full‑stack experience with PHP/Laravel, TypeScript, and mid‑level Node.js.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link href="/about">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Me
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Skills Preview */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Core Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Next.js', 'TypeScript', 'Node.js (Mid)', 'PHP', 'Laravel', 'MySQL', 'Redis'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "5+", label: "Years Full Stack" },
              { number: "15+", label: "Projects Built" },
              { number: "2.89", label: "Current GPA" }
            ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
            ))}
          </motion.div>

          {/* Recent Projects Preview */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "E-Commerce Platform", tech: "React, Node.js" },
                { title: "Task Management App", tech: "Next.js, MongoDB" },
                { title: "Weather Dashboard", tech: "TypeScript, API" }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.tech}</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${80 + index * 10}%` }}
                      transition={{ delay: 1.6 + index * 0.1, duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="mt-8"
            >
              <Link href="/projects">
                <motion.button
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Projects →
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
