'use client';

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import { motion, AnimatePresence, circInOut } from "framer-motion";
import { useState, useEffect } from "react";

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const tableVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: circInOut
      }
    }
  };

  const skillItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: circInOut
      }
    }
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: 'HTML', level: 90, description: 'Semantic markup and accessibility' },
        { name: 'CSS', level: 85, description: 'Advanced styling and animations' },
        { name: 'Javascript', level: 90, description: 'ES6+ and modern frameworks' },
        { name: 'TypeScript', level: 85, description: 'Type-safe development' },
        { name: 'React', level: 90, description: 'Component-based architecture' },
        { name: 'Next JS', level: 85, description: 'Full-stack React framework' },
        { name: 'Tailwind', level: 90, description: 'Utility-first CSS framework' },
        { name: 'SCSS', level: 80, description: 'Advanced CSS preprocessing' }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "from-green-500 to-teal-600",
      skills: [
        { name: 'Node.js', level: 85, description: 'Server-side JavaScript runtime' },
        { name: 'Express.js', level: 80, description: 'Fast web framework for Node.js' },
        { name: 'Python', level: 85, description: 'Versatile programming language' },
        { name: 'Java', level: 75, description: 'Object-oriented programming' },
        { name: 'PHP', level: 70, description: 'Server-side scripting' },
        { name: 'C', level: 75, description: 'Systems programming language' },
        { name: 'FastAPI', level: 80, description: 'Modern Python web framework' },
        { name: 'Django', level: 75, description: 'High-level Python framework' }
      ]
    },
    {
      title: "Database & DevOps",
      icon: "🗄️",
      color: "from-orange-500 to-red-600",
      skills: [
        { name: 'MongoDB', level: 85, description: 'NoSQL document database' },
        { name: 'MySQL', level: 80, description: 'Relational database management' },
        { name: 'Git', level: 90, description: 'Version control system' },
        { name: 'Docker', level: 75, description: 'Containerization platform' },
        { name: 'gcp', level: 70, description: 'Google Cloud Platform' },
        { name: 'Vercel', level: 85, description: 'Deployment and hosting' },
        { name: 'Netlify', level: 80, description: 'JAMstack deployment' },
        { name: 'Figma', level: 85, description: 'UI/UX design tool' }
      ]
    }
  ];

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 border-2 border-accent-500/20 border-t-accent-500 rounded-full animate-spin animate-reverse"></div>
        </div>
      </div>
    </div>
  );

  const SkillLevelBar = ({ level, delay = 0 }: { level: number; delay?: number }) => (
    <div className="w-full bg-dark-700/50 rounded-full h-2 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.5, delay, ease: circInOut }}
        viewport={{ once: true }}
      />
    </div>
  );

  return (
    <section id="skills" className="mt-20 relative section-padding border-t border-primary-500/20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900/80">
      {/* Background Decorations */}
      <div className="absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 w-20 md:w-32 h-20 md:h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-16 md:w-24 h-16 md:h-24 bg-accent-500/10 rounded-full blur-2xl"></div>

      {/* Top Border Gradient */}
      <div className="flex justify-center -translate-y-[1px] absolute top-0 left-0 right-0">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-transparent w-full" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="flex justify-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center w-full max-w-md md:max-w-none md:justify-center">
            <span className="w-8 md:w-24 h-[2px] bg-gradient-to-r from-transparent to-primary-500"></span>
            <span className="bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 text-primary-300 p-2 px-4 md:p-3 md:px-8 text-lg md:text-xl font-bold rounded-lg mx-2 md:mx-4 heading-secondary whitespace-nowrap">
              Skills & Technologies
            </span>
            <span className="w-8 md:w-24 h-[2px] bg-gradient-to-l from-transparent to-primary-500"></span>
          </div>
        </motion.div>

        {/* Loading State */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LoadingSpinner />
              <div className="text-center mt-4">
                <p className="text-secondary-300 text-sm md:text-base">Loading skills data...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills Content */}
        <AnimatePresence>
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Category Navigation - Mobile */}
              <div className="block md:hidden mb-8">
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {skillCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(index)}
                      className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeCategory === index
                          ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                          : 'bg-dark-800/50 text-secondary-400 border border-dark-700/50 hover:bg-dark-700/50'
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills Tables */}
              <motion.div 
                className="space-y-8 md:space-y-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    variants={tableVariants}
                    className={`${categoryIndex !== activeCategory ? 'hidden md:block' : 'block'}`}
                  >
                    {/* Category Header */}
                    <div className="mb-6 md:mb-8 flex justify-center">
                      <div className={`inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-10 border border-primary-500/20`}>
                        <span className="text-2xl mr-3">{category.icon}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white heading-secondary">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    {/* Skills Table */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-primary-500/20 overflow-hidden">
                      {/* Table Header - Hidden on Mobile */}
                      <div className="hidden md:grid md:grid-cols-12 bg-gradient-to-r from-primary-500/10 to-accent-500/10 p-4 border-b border-primary-500/20">
                        <div className="col-span-1 text-center">
                          <span className="text-sm font-semibold text-primary-300">Logo</span>
                        </div>
                        <div className="col-span-3">
                          <span className="text-sm font-semibold text-primary-300">Technology</span>
                        </div>
                        <div className="col-span-4">
                          <span className="text-sm font-semibold text-primary-300">Description</span>
                        </div>
                        <div className="col-span-4">
                          <span className="text-sm font-semibold text-primary-300">Proficiency</span>
                        </div>
                      </div>

                      {/* Skills Rows */}
                      <div className="divide-y divide-primary-500/10">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            variants={skillItemVariants}
                            className="p-4 md:p-6 hover:bg-primary-500/5 transition-all duration-300 group"
                          >
                            {/* Mobile Layout */}
                            <div className="block md:hidden">
                              <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-dark-800/50 rounded-lg p-2 border border-primary-500/20 group-hover:border-primary-500/40 transition-all duration-300">
                                  <Image
                                    src={skillsImage(skill.name)?.src || '/next.svg'}
                                    alt={skill.name}
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-contain rounded filter group-hover:brightness-110 transition-all duration-300"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                                      {skill.name}
                                    </h4>
                                    <span className="text-sm font-medium text-accent-400">
                                      {skill.level}%
                                    </span>
                                  </div>
                                  <p className="text-sm text-secondary-400 mb-3 group-hover:text-secondary-300 transition-colors duration-300">
                                    {skill.description}
                                  </p>
                                  <SkillLevelBar level={skill.level} delay={skillIndex * 0.1} />
                                </div>
                              </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden md:grid md:grid-cols-12 items-center">
                              <div className="col-span-1 flex justify-center">
                                <div className="w-10 h-10 bg-dark-800/50 rounded-lg p-2 border border-primary-500/20 group-hover:border-primary-500/40 transition-all duration-300">
                                  <Image
                                    src={skillsImage(skill.name)?.src || '/next.svg'}
                                    alt={skill.name}
                                    width={24}
                                    height={24}
                                    className="w-full h-full object-contain rounded filter group-hover:brightness-110 transition-all duration-300"
                                  />
                                </div>
                              </div>
                              <div className="col-span-3">
                                <h4 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                                  {skill.name}
                                </h4>
                              </div>
                              <div className="col-span-4">
                                <p className="text-sm text-secondary-400 group-hover:text-secondary-300 transition-colors duration-300">
                                  {skill.description}
                                </p>
                              </div>
                              <div className="col-span-4">
                                <div className="flex items-center space-x-3">
                                  <div className="flex-1">
                                    <SkillLevelBar level={skill.level} delay={skillIndex * 0.1} />
                                  </div>
                                  <span className="text-sm font-medium text-accent-400 min-w-[3rem] text-right">
                                    {skill.level}%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Skills Summary */}
              <motion.div 
                className="mt-12 md:mt-16 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-xl rounded-2xl border border-primary-500/20 p-6 md:p-8 max-w-2xl mx-auto">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 heading-secondary">
                    Continuous Learning & Growth
                  </h3>
                  <p className="text-secondary-300 text-sm md:text-base mb-6 leading-relaxed">
                    I'm passionate about staying up-to-date with the latest technologies and best practices. 
                    Always eager to learn new frameworks, tools, and methodologies to deliver exceptional results.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="bg-dark-800/50 rounded-lg px-4 py-2 border border-primary-500/20">
                      <span className="text-primary-400 font-semibold">{skillsData.length}+</span>
                      <span className="text-secondary-400 text-sm ml-2">Technologies</span>
                    </div>
                    <div className="bg-dark-800/50 rounded-lg px-4 py-2 border border-primary-500/20">
                      <span className="text-accent-400 font-semibold">3+</span>
                      <span className="text-secondary-400 text-sm ml-2">Years Experience</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
