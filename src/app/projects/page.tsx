'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "StaffViz (SAAS) - Work Dynamics with Intelligent Solution",
      description: "A powerful, feature-rich software designed to streamline workforce management from recruitment to performance tracking. Key features include Recruitment & Hiring, Shift & Break Management, and Project & Task Management with real-time monitoring, Dashboards & Reporting, and robust productivity tracking tools.",
      technologies: ["TypeScript", "Angular", "Vue", "PHP Laravel", "Docker", "Redis", "Memcached", "MySQL", "Spring Boot", "JAVA"],
      category: "Full Stack",
      github: "#",
      demo: "https://www.staffviz.com/",
      image: "👥"
    },
    {
      id: 2,
      title: "MyTailorStore - Custom E-Commerce Fashion Platform",
      description: "A leading e-commerce platform specializing in bespoke fashion, offering custom-made garments for both men and women. Customers can design their own clothes with over 2,000 high-quality fabrics, featuring suits, shirts, jackets, blazers, overcoats, and trousers with expert craftsmanship.",
      technologies: ["PHP Laravel", "MySQL", "React", "Bootstrap", "CSS3", "HTML5"],
      category: "E-Commerce",
      github: "#",
      demo: "https://www.mytailorstore.com/",
      image: "👔"
    },
    {
      id: 3,
      title: "StreamlineMyREI - Real Estate Solutions Platform",
      description: "A comprehensive real estate solutions platform delivering top-notch services to the US real estate market through effective marketing, virtual operations, lead generation, and automation systems for real estate professionals.",
      technologies: ["Angular", "Vue", "PHP Laravel", "MySQL", "Docker", "Redis"],
      category: "Real Estate",
      github: "#",
      demo: "https://streamlinerei.com/",
      image: "🏠"
    },
    {
      id: 4,
      title: "Real-Time Chat System with Socket.io",
      description: "Implemented real-time communication features using Socket.io for instant messaging capabilities within the StaffViz platform, enabling seamless team collaboration and communication.",
      technologies: ["Socket.io", "TypeScript", "Angular", "Node.js", "Redis"],
      category: "Real-time",
      github: "#",
      demo: "#",
      image: "💬"
    },
    {
      id: 5,
      title: "Automated Database Sharding System",
      description: "Implemented MySQL sharding to split data across multiple databases for improved performance and scalability. This technique reduces server load, allowing faster queries and easier scaling for large applications with multi-company account setup.",
      technologies: ["MySQL", "PHP Laravel", "Docker", "Redis", "Memcached"],
      category: "Database",
      github: "#",
      demo: "#",
      image: "🗄️"
    },
    {
      id: 6,
      title: "Microservices Architecture with Laravel Octane",
      description: "Designed and developed scalable microservices architecture using Laravel Octane for high-performance API frameworks, implementing caching mechanisms, load balancing, and automated deployment with Docker for enterprise applications.",
      technologies: ["Laravel Octane", "Docker", "Redis", "Memcached", "MySQL", "Spring Boot"],
      category: "Microservices",
      github: "#",
      demo: "#",
      image: "⚙️"
    },
    {
      id: 7,
      title: "DevOps & Deployment Automation",
      description: "Containerized services and automated deployments with Docker Compose across environments. Implemented health checks, resource limits, and standardized images for reliable releases.",
      technologies: ["Docker", "Docker Compose", "CI/CD", "Linux", "Shell"],
      category: "Other",
      github: "#",
      demo: "#",
      image: "🛠️"
    },
    {
      id: 8,
      title: "Testing & Quality Assurance",
      description: "Introduced SOPs for coding and unit testing, wrote module-level tests, and improved QA collaboration with documented test cases and business flows.",
      technologies: ["Unit Tests", "SOPs", "QA", "TypeScript", "PHP"],
      category: "Other",
      github: "#",
      demo: "#",
      image: "🧪"
    },
    {
      id: 9,
      title: "Performance & Caching Optimization",
      description: "Implemented Redis and Memcached caching for static APIs, reduced database load, and improved response times under heavy traffic.",
      technologies: ["Redis", "Memcached", "MySQL", "Laravel", "Octane"],
      category: "Other",
      github: "#",
      demo: "#",
      image: "🚀"
    }
  ];

  const categories = ["All", "Full Stack", "E-Commerce", "Real Estate", "Real-time", "Database", "Microservices", "Other"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              My Projects
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              A collection of my work showcasing various technologies and problem-solving approaches
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 h-full"
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Project Image/Icon */}
                  <motion.div
                    className="text-6xl mb-4 text-center"
                    animate={{ 
                      rotate: hoveredProject === project.id ? [0, -10, 10, 0] : 0,
                      scale: hoveredProject === project.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.image}
                  </motion.div>

                  {/* Project Category */}
                  <motion.div
                    className="inline-block bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {project.category}
                  </motion.div>

                  {/* Project Title */}
                  <motion.h3
                    className="text-xl font-bold text-gray-800 dark:text-white mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Project Description */}
                  <motion.p
                    className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="bg-gradient-to-r from-indigo-100 to-cyan-100 dark:from-indigo-900 dark:to-cyan-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-md text-xs font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.6 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    <motion.a
                      href={project.github}
                      className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-2 px-4 rounded-lg text-sm font-medium text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center mt-16"
          >
            <motion.div
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Let's Work Together
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Have an interesting project in mind? I'd love to hear about it and discuss how we can bring it to life.
              </p>
              <motion.a
                href="/contact"
                className="inline-block bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}