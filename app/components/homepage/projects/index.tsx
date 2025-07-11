'use client';

import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { motion, circInOut } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: circInOut
      }
    }
  };

  return (
    <section id='projects' className="mt-8 relative section-padding">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-500/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="sticky top-10 z-40 mb-20"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute -top-3 left-0 w-20 h-20 bg-primary-500/20 rounded-full blur-2xl"></div>
            <div className="flex items-center justify-start relative">
              <motion.span 
                className="bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 text-primary-300 px-8 py-4 text-xl font-bold rounded-lg z-10 heading-secondary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                FEATURED PROJECTS
              </motion.span>
              <span className="w-full h-[2px] bg-gradient-to-r from-primary-500/50 to-transparent ml-4"></span>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="space-y-8 w-full overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.slice(0, 4).map((project, index) => (
            <motion.div
              id={`sticky-card-${index + 1}`}
              key={index}
              className={`sticky-card w-full mx-auto max-w-full lg:max-w-6xl sticky ${
                index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'
              }`}
              variants={itemVariants}
            >
              <motion.div 
                className="relative w-full overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glowing Background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Card Container */}
                <div className="relative classic-card p-0 overflow-hidden border-primary-500/30 hover:border-primary-400/50">
                  <ProjectCard project={project} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-secondary-300 text-lg mb-8 text-body"
            variants={itemVariants}
          >
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://github.com/Anish-2005"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 group"
            >
              <span>Explore More Projects</span>
              <motion.svg 
                className="w-5 h-5"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
