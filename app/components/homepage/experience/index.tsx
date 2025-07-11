'use client';

import { experiences } from "@/utils/data/experience";
import { motion, circInOut } from "framer-motion";
import { BsPersonWorkspace, BsCalendar, BsBuilding } from "react-icons/bs";
import { MdWork, MdSchool } from "react-icons/md";
import AnimationLottie from "../../helper/animation-lottie";
import experience from '@/public/lottie/code.json';

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: circInOut
      }
    }
  };

  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('student')) return MdSchool;
    if (title.toLowerCase().includes('member')) return BsPersonWorkspace;
    return MdWork;
  };

  return (
    <section id="experience" className="relative section-padding border-t border-primary-500/20 overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900/80">
      {/* Background Decorations */}
      <div className="absolute top-10 md:top-20 right-10 md:right-20 w-20 md:w-40 h-20 md:h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-16 md:w-32 h-16 md:h-32 bg-accent-500/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto relative z-10 px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="flex justify-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center w-full max-w-md md:max-w-none">
            <span className="w-8 md:w-24 h-[2px] bg-gradient-to-r from-transparent to-primary-500"></span>
            <span className="bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 text-primary-300 p-2 px-4 md:p-3 md:px-8 text-lg md:text-xl font-bold rounded-lg mx-2 md:mx-4 heading-secondary whitespace-nowrap">
              Experience & Education
            </span>
            <span className="w-8 md:w-24 h-[2px] bg-gradient-to-l from-transparent to-primary-500"></span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Side - Animation */}
          <motion.div 
            className="flex justify-center items-center order-2 lg:order-1 mb-8 lg:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative"
              >
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-50"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-3 sm:p-4 md:p-6 border border-primary-500/20 shadow-xl">
                  <AnimationLottie animationPath={experience} />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Experience Timeline */}
          <motion.div 
            className="order-1 lg:order-2 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Mobile Timeline */}
            <div className="block md:hidden space-y-6">
              {experiences.map((exp, index) => {
                const IconComponent = getIcon(exp.title);
                return (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative w-full"
                  >
                    {/* Mobile Experience Card */}
                    <motion.div 
                      className="w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-primary-500/20 p-4 overflow-hidden"
                    >
                      {/* Header with Icon and Duration */}
                      <div className="flex items-start justify-between mb-3">
                        <motion.div 
                          className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400"
                        >
                          <IconComponent size={20} />
                        </motion.div>
                        <motion.div 
                          className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-300 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          <BsCalendar size={12} />
                          {exp.duration}
                        </motion.div>
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white break-words">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-secondary-300">
                          <BsBuilding size={14} className="text-primary-400 flex-shrink-0" />
                          <span className="text-sm break-words">{exp.company}</span>
                        </div>
                        
                        {/* Skills for mobile */}
                        <div className="flex flex-wrap gap-1 mt-3">
                          {exp.title.toLowerCase().includes('student') && (
                            <>
                              <span className="bg-dark-700/50 border border-primary-500/20 text-secondary-300 px-2 py-1 rounded text-xs">
                                Computer Science
                              </span>
                              <span className="bg-dark-700/50 border border-primary-500/20 text-secondary-300 px-2 py-1 rounded text-xs">
                                Software Engineering
                              </span>
                            </>
                          )}
                          {exp.title.toLowerCase().includes('member') && (
                            <>
                              <span className="bg-dark-700/50 border border-primary-500/20 text-secondary-300 px-2 py-1 rounded text-xs">
                                Technical Team
                              </span>
                              <span className="bg-dark-700/50 border border-primary-500/20 text-secondary-300 px-2 py-1 rounded text-xs">
                                Graphics Design
                              </span>
                              <span className="bg-dark-700/50 border border-primary-500/20 text-secondary-300 px-2 py-1 rounded text-xs">
                                Promotion
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:block relative overflow-x-hidden w-full px-4">
              {/* Timeline Line */}
              <div className="absolute left-4 lg:left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 opacity-60 rounded-full"></div>
              <div className="space-y-16">
                {experiences.map((exp, index) => {
                  const IconComponent = getIcon(exp.title);
                  return (
                    <motion.div
                      key={exp.id}
                      variants={itemVariants}
                      className="relative flex flex-col lg:flex-row items-start w-full"
                    >
                      {/* Timeline Dot */}
                      <motion.div 
                        className="absolute left-3 lg:left-9 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 via-accent-400 to-primary-400 border-4 border-dark-900 z-10 shadow-lg"
                      />
                      {/* Desktop Experience Card */}
                      <motion.div 
                        className="ml-12 lg:ml-24 mt-2 w-full max-w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-primary-500/20 p-6 group overflow-hidden"
                      >
                        {/* Duration Badge */}
                        <motion.div 
                          className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full text-sm font-medium mb-4"
                        >
                          <BsCalendar size={14} />
                          {exp.duration}
                        </motion.div>
                        {/* Content */}
                        <div className="flex flex-col lg:flex-row items-start gap-4">
                          <motion.div 
                            className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400 transition-colors duration-300"
                          >
                            <IconComponent size={24} />
                          </motion.div>
                          <div className="flex-1 min-w-0 max-w-full">
                            <h3 className="heading-secondary text-xl font-bold text-white mb-2 transition-colors duration-300 break-words">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 text-secondary-300 mb-3">
                              <BsBuilding size={16} className="text-primary-400 flex-shrink-0" />
                              <span className="text-base break-words">{exp.company}</span>
                            </div>
                            {/* Skills/Technologies for desktop */}
                            <div className="flex flex-wrap gap-2 mt-2 max-w-full">
                              {exp.title.toLowerCase().includes('student') && (
                                <>
                                  <span className="bg-dark-700/50 border border-primary-500/20 text-secondary-300 px-2 py-1 rounded text-xs break-words">
                                    Computer Science
                                  </span>
                                  <span className="bg-dark-700/50 border border-primary-500/20 text-secondary-300 px-2 py-1 rounded text-xs break-words">
                                    Software Engineering
                                  </span>
                                </>
                              )}
                              {exp.title.toLowerCase().includes('member') && (
                                <>
                                  <span className="bg-dark-700/50 border border-primary-500/20 text-secondary-300 px-2 py-1 rounded text-xs break-words">
                                    Technical Team
                                  </span>
                                  <span className="bg-dark-700/50 border border-primary-500/20 text-secondary-300 px-2 py-1 rounded text-xs break-words">
                                    Graphics Design
                                  </span>
                                  <span className="bg-dark-700/50 border border-primary-500/20 text-secondary-300 px-2 py-1 rounded text-xs break-words">
                                    Promotion
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div 
              className="mt-8 md:mt-12 text-center px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary-300 text-base md:text-lg mb-4 md:mb-6 text-body max-w-md mx-auto">
                Ready to take on new challenges and contribute to innovative projects.
              </p>
              
              <div>
                <a 
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-2 md:gap-3 text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
                >
                  <span>Let&apos;s Work Together</span>
                  <svg 
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
