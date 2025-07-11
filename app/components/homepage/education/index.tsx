'use client';

import { educations } from "@/utils/data/educations";
import { motion, circInOut } from "framer-motion";
import { MdSchool, MdLocationOn, MdDateRange, MdGrade } from "react-icons/md";
import { FaGraduationCap, FaBook, FaCertificate } from "react-icons/fa";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from '../../../../public/lottie/study.json';

const Education = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: circInOut
      }
    }
  };

  const getEducationIcon = (title: string) => {
    if (title.toLowerCase().includes('btech') || title.toLowerCase().includes('bachelor')) return FaGraduationCap;
    if (title.toLowerCase().includes('secondary') || title.toLowerCase().includes('higher')) return FaBook;
    return FaCertificate;
  };

  const getEducationLevel = (title: string) => {
    if (title.toLowerCase().includes('btech')) return 'Undergraduate';
    if (title.toLowerCase().includes('higher secondary')) return 'Higher Secondary';
    if (title.toLowerCase().includes('secondary')) return 'Secondary';
    return 'Education';
  };

  return (
    <section id="education" className="relative section-padding border-t border-primary-500/20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-accent-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl"></div>

      {/* Top Border Gradient */}
      <div className="flex justify-center -translate-y-[1px] absolute top-0 left-0 right-0">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-transparent w-full" />
        </div>
      </div>

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
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-accent-500"></span>
            <span className="bg-accent-600/20 backdrop-blur-sm border border-accent-500/30 text-accent-300 p-3 px-8 text-xl font-bold rounded-lg mx-4 heading-secondary">
              Educational Journey
            </span>
            <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-accent-500"></span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Animation */}
          <motion.div 
            className="flex justify-center items-center order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -2, 2, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative"
              >
                <div className="absolute -inset-6 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-dark-800/40 rounded-3xl p-8 border border-accent-500/20 backdrop-blur-sm">
                  <AnimationLottie animationPath={lottieFile} width="100%" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Education Cards */}
          <motion.div 
            className="order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-6">
              {educations.map((edu, index) => {
                const IconComponent = getEducationIcon(edu.title);
                const level = getEducationLevel(edu.title);
                
                return (
                  <motion.div
                    key={edu.id}
                    variants={itemVariants}
                    className="relative"
                  >
                    <motion.div 
                      className="classic-card p-6 group border-accent-500/20 hover:border-accent-400/40"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background Glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <motion.div 
                            className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center text-accent-400 group-hover:text-primary-400 transition-colors duration-300"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <IconComponent size={28} />
                          </motion.div>

                          <div className="flex-1 min-w-0">
                            {/* Education Level Badge */}
                            <motion.div 
                              className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full text-xs font-medium mb-3"
                              whileHover={{ scale: 1.05 }}
                            >
                              <FaCertificate size={12} />
                              {level}
                            </motion.div>

                            <h3 className="heading-secondary text-xl font-bold text-white mb-2 group-hover:text-accent-300 transition-colors duration-300">
                              {edu.title}
                            </h3>
                            
                            <div className="flex items-center gap-2 text-secondary-300 mb-2">
                              <MdSchool size={16} className="text-accent-400" />
                              <span className="text-base">{edu.institution}</span>
                            </div>

                            <div className="flex items-center gap-2 text-secondary-400">
                              <MdDateRange size={16} className="text-primary-400" />
                              <span className="text-sm">{edu.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* Additional Info */}
                        <div className="border-t border-accent-500/20 pt-4 mt-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2 text-secondary-300">
                              <MdLocationOn size={14} className="text-accent-400" />
                              <span>Kolkata, India</span>
                            </div>
                            {edu.title.includes('BTech') && (
                              <div className="flex items-center gap-2 text-secondary-300">
                                <MdGrade size={14} className="text-primary-400" />
                                <span>In Progress</span>
                              </div>
                            )}
                          </div>

                          {/* Subject Tags */}
                          <div className="flex flex-wrap gap-2 mt-4">
                            {edu.title.includes('BTech') && (
                              <>
                                <span className="bg-dark-700/50 border border-accent-500/20 text-secondary-300 px-2 py-1 rounded text-xs">
                                  Computer Science
                                </span>
                                <span className="bg-dark-700/50 border border-accent-500/20 text-secondary-300 px-2 py-1 rounded text-xs">
                                  Software Engineering
                                </span>
                                <span className="bg-dark-700/50 border border-accent-500/20 text-secondary-300 px-2 py-1 rounded text-xs">
                                  Data Structures
                                </span>
                              </>
                            )}
                            {edu.title.includes('Secondary') && (
                              <>
                                <span className="bg-dark-700/50 border border-accent-500/20 text-secondary-300 px-2 py-1 rounded text-xs">
                                  Science
                                </span>
                                <span className="bg-dark-700/50 border border-accent-500/20 text-secondary-300 px-2 py-1 rounded text-xs">
                                  Mathematics
                                </span>
                                <span className="bg-dark-700/50 border border-accent-500/20 text-secondary-300 px-2 py-1 rounded text-xs">
                                  Physics
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

            {/* Academic Stats */}
            <motion.div 
              className="mt-12 grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center classic-card p-4 border-accent-500/20">
                <div className="text-2xl font-bold text-accent-400 mb-2 heading-primary">2+</div>
                <div className="text-secondary-400 text-sm">Years in CS</div>
              </div>
              <div className="text-center classic-card p-4 border-primary-500/20">
                <div className="text-2xl font-bold text-primary-400 mb-2 heading-primary">13+</div>
                <div className="text-secondary-400 text-sm">Years Education</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
