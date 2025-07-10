'use client';

import { experiences } from "@/utils/data/experience";
import { motion } from "framer-motion";
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
        ease: "easeOut"
      }
    }
  };

  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('student')) return MdSchool;
    if (title.toLowerCase().includes('member')) return BsPersonWorkspace;
    return MdWork;
  };

  return (
    <section id="experience" className="relative section-padding border-t border-primary-500/20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent-500/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-primary-500"></span>
            <span className="bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 text-primary-300 p-3 px-8 text-xl font-bold rounded-lg mx-4 heading-secondary">
              Experience & Education
            </span>
            <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-primary-500"></span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Animation */}
          <motion.div 
            className="flex justify-center items-center order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-lg">
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
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-50"></div>
                <div className="relative bg-dark-800/30 rounded-2xl p-6 border border-primary-500/20">
                  <AnimationLottie animationPath={experience} />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Experience Timeline */}
          <motion.div 
            className="order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 opacity-50"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => {
                  const IconComponent = getIcon(exp.title);
                  
                  return (
                    <motion.div
                      key={exp.id}
                      variants={itemVariants}
                      className="relative"
                    >
                      {/* Timeline Dot */}
                      <motion.div 
                        className="absolute left-4 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-900 z-10"
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      />
                      
                      {/* Experience Card */}
                      <motion.div 
                        className="ml-16 classic-card p-6 group"
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Duration Badge */}
                        <motion.div 
                          className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full text-sm font-medium mb-4"
                          whileHover={{ scale: 1.05 }}
                        >
                          <BsCalendar size={14} />
                          {exp.duration}
                        </motion.div>

                        {/* Content */}
                        <div className="flex items-start gap-4">
                          <motion.div 
                            className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400 group-hover:text-accent-400 transition-colors duration-300"
                            whileHover={{ rotate: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <IconComponent size={24} />
                          </motion.div>

                          <div className="flex-1 min-w-0">
                            <h3 className="heading-secondary text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            
                            <div className="flex items-center gap-2 text-secondary-300 mb-3">
                              <BsBuilding size={16} className="text-primary-400" />
                              <span className="text-base">{exp.company}</span>
                            </div>

                            {/* Skills/Technologies for experience */}
                            <div className="flex flex-wrap gap-2 mt-4">
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
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary-300 text-lg mb-6 text-body">
                Ready to take on new challenges and contribute to innovative projects.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-3"
                >
                  <span>Let&apos;s Work Together</span>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
