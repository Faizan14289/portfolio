'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, category: 'Frontend', color: 'from-yellow-400 to-orange-500' },
    { name: 'TypeScript', level: 85, category: 'Frontend', color: 'from-blue-400 to-blue-600' },
    { name: 'React', level: 88, category: 'Frontend', color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', level: 82, category: 'Frontend', color: 'from-gray-700 to-gray-900' },
    { name: 'Node.js', level: 80, category: 'Backend', color: 'from-green-400 to-green-600' },
    { name: 'Java', level: 75, category: 'Backend', color: 'from-red-500 to-red-700' },
    { name: 'MongoDB', level: 78, category: 'Database', color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', level: 75, category: 'Database', color: 'from-blue-600 to-blue-800' },
    { name: 'Git', level: 85, category: 'Tools', color: 'from-orange-500 to-red-600' },
    { name: 'Docker', level: 72, category: 'Tools', color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', level: 68, category: 'Cloud', color: 'from-orange-400 to-orange-600' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend', color: 'from-cyan-400 to-teal-500' },
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Cloud'];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              Technical Skills
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              A comprehensive overview of my technical expertise across different technologies and domains
            </motion.p>
          </div>

          {/* Skills by Category */}
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                      whileHover={{ 
                        scale: 1.02,
                        y: -2,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {skill.name}
                        </h3>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.1 + index * 0.05,
                            ease: [0, 0, 0.58, 1]
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-full"
                          animate={{ 
                            x: ['-100%', '200%'],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: [0, 0, 1, 1]
                          }}
                        />
                      </div>
                    </motion.div>
                  ))
                }
              </div>
            </motion.div>
          ))}

          {/* Skill Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
              Skill Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Frontend', count: skills.filter(s => s.category === 'Frontend').length, icon: '🎨' },
                { label: 'Backend', count: skills.filter(s => s.category === 'Backend').length, icon: '⚙️' },
                { label: 'Database', count: skills.filter(s => s.category === 'Database').length, icon: '🗄️' },
                { label: 'Tools', count: skills.filter(s => s.category === 'Tools').length, icon: '🛠️' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                    {stat.count}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}