'use client';

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

export default function Resume() {
  const [resumeContent, setResumeContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadResume = () => {
    setLoading(true);
    setError(null);
    fetch('/resume.md')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then(text => {
        setResumeContent(text);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading resume:', err);
        setError('Failed to load CV markdown.');
        setLoading(false);
      });
  };

  useEffect(() => {
    loadResume();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100
      }
    }
  };

  // Continue rendering the page even while loading; show spinner in CV section

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h1 
            className="text-6xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' as const }}
          >
            Faizan Ali
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sr. Full Stack Software Engineer (5+ years) • PHP/Laravel, TypeScript, Node (Mid)
          </motion.p>
          <div className="flex justify-center gap-6 mb-8">
            <motion.a 
              href="https://github.com/faizan14289" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/faizan-ali-b0b167150" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </motion.a>
            <motion.a 
              href="mailto:faizali2152@gmail.com"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Email
            </motion.a>
          </div>
          
          {/* CV Actions */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.a
              href="/Faizan- Full Stack Engineer.pdf"
              download
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume (PDF)
            </motion.a>
            <motion.button
              type="button"
              onClick={() => window.print()}
              className="px-6 py-3 rounded-full bg-white text-blue-600 font-semibold shadow-md hover:shadow-lg border border-blue-200 transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Print Resume
            </motion.button>
          </div>

          {/* Animated Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {['Software Engineer', 'Problem Solver', 'Innovator', 'Team Player'].map((tag, index) => (
              <motion.span
                key={tag}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Professional Summary */}
        <motion.div variants={itemVariants} className="mb-16">
          <motion.div 
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/30"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: 'spring' as const, stiffness: 300 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <div className="space-y-6 text-gray-900 dark:text-gray-100 text-lg leading-relaxed">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                I am a <strong className="text-blue-600 dark:text-blue-400">Sr. Full Stack Software Engineer</strong> with <strong className="text-blue-600 dark:text-blue-400">5 years</strong> of professional experience, specializing in <strong className="text-blue-600 dark:text-blue-400">PHP/Laravel</strong>, scalable microservices, and modern frontend stacks.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                I’ve worked across enterprise SaaS and e‑commerce, introducing SOPs, unit testing, caching (Redis/Memcached), and deployment automation with Docker to improve reliability and performance.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                My goal is to leverage my <strong className="text-pink-600 dark:text-pink-400">technical expertise</strong> and 
                <strong className="text-pink-600 dark:text-pink-400">soft skills</strong> to contribute meaningfully to challenging 
                projects and make a positive impact in the tech industry. I believe in continuous learning and staying 
                updated with the latest technological trends.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎓', title: 'Education', desc: 'BS Computer Science • UET Lahore' },
              { icon: '💻', title: 'Experience', desc: '5+ Years Full Stack (PHP/Laravel)' },
              { icon: '⚙️', title: 'Backend Focus', desc: 'APIs, Microservices, Caching, Docker' }
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {highlight.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {highlight.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular',
              'Java', 'Spring Boot', 'Laravel', 'PHP', 'SQL', 'MySQL',
              'Docker', 'Redis', 'Microservices', 'REST APIs'
            ].map((skill) => (
              <motion.div
                key={skill}
                className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
            Professional Experience
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800">Senior Full Stack Developer</h3>
              <p className="text-blue-600 font-medium">StaffViz • Jan 2021 - Sep 2024</p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Designed solid API framework along Laravel, Laravel Octane based microservices
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Introduced SOPs for coding, unit testing, performance testing and load balancing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Implemented caching mechanisms (MEMCACHE) for static APIs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Worked on Angular, Vue, PHP Laravel, MySQL Database
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
            Education & Certifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">BS Computer Science</h3>
                <p className="text-gray-600">University of Engineering and Technology Lahore • 2016-2020</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Mastery in Full Stack Development</h3>
                <p className="text-gray-600">Certification</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CV Preview (Markdown) */}
        <motion.div variants={itemVariants} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
            CV Preview (Markdown)
          </h2>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: [0,0,1,1] }}
                className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
              />
            </div>
          ) : error ? (
            <div className="flex items-center justify-between bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700">{error}</p>
              <motion.button
                type="button"
                onClick={loadResume}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Retry
              </motion.button>
            </div>
          ) : resumeContent ? (
            <div className="prose prose-sm md:prose lg:prose-lg max-w-none text-gray-900 dark:text-gray-100">
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {resumeContent}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="text-gray-600">No CV content found. Please ensure <code className="bg-gray-100 px-1 rounded">public/resume.md</code> exists.</p>
          )}
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="text-center text-gray-500 mt-12">
          <p className="text-sm">
            © 2024 Faizan Ali. Built with Next.js and Tailwind CSS
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}