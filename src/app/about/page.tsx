'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        type: 'spring' as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "PHP", "Laravel", "HTML/CSS", "Tailwind CSS",
    "MySQL", "PostgreSQL", "Git", "Docker", "Redis"
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring' as const }}
            >
              About Me
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Sr. Full Stack Software Engineer with 5 years of experience, specializing in PHP/Laravel, microservices, and modern frontend stacks.
            </motion.p>
          </motion.div>

          {/* Summary Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.div 
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring' as const, stiffness: 300 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Summary</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  I studied BS Computer Science at the University of Engineering and Technology (UET) Lahore. My professional journey spans 5 years across enterprise SaaS and e‑commerce, focusing on scalable APIs, microservices, and performance optimization.
                </p>
                <p className="leading-relaxed">
                  I emphasize quality through SOPs, unit testing, and robust deployments (Docker, Redis/Memcached). I believe in continuous learning and building reliable, maintainable systems.
                </p>
                <p className="leading-relaxed">
                  My goal is to leverage my technical expertise and soft skills to contribute meaningfully to challenging 
                  projects and make a positive impact in the tech industry.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-lg text-center font-medium shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -1, 1, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "5+", label: "Years of Programming" },
                { number: "15+", label: "Projects Completed" },
                { number: "2.89", label: "Current GPA" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}