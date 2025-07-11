'use client';

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { motion, circInOut } from "framer-motion";
import { useState } from "react";

const AboutSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
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

  const stats = [
    { number: "3+", label: "Projects Completed" },
    { number: "2+", label: "Years Learning" },
    { number: "5+", label: "Technologies" },
    { number: "∞", label: "Passion for Code" }
  ];

  return (
    <section id="about" className="section-padding relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent-500/5 rounded-full blur-xl"></div>

      {/* Section Label */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-4">
        <motion.span
          className="bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 text-primary-300 rotate-90 p-3 px-6 text-sm font-bold rounded-lg tracking-wider shadow-lg"
          initial={{ opacity: 0, x: 60, scale: 0.8, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ type: 'spring', stiffness: 120, damping: 12, duration: 0.7 }}
        >
          ABOUT ME
        </motion.span>
        <motion.span
          className="h-36 w-[2px] bg-gradient-to-b from-primary-500 to-transparent mt-4"
          initial={{ scaleY: 0, opacity: 0, filter: 'blur(8px)' }}
          whileInView={{ scaleY: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ type: 'spring', stiffness: 100, damping: 14, duration: 0.8, delay: 0.2 }}
          style={{ transformOrigin: 'top' }}
        ></motion.span>
      </div>

      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Content */}
          <motion.div className="order-2 lg:order-1" variants={itemVariants}>
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <motion.p 
                className="text-primary-400 font-bold text-lg mb-3 uppercase tracking-wider text-code"
                variants={itemVariants}
              >
                Who I Am?
              </motion.p>
              <motion.h2 
                className="heading-secondary text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 break-words"
                variants={itemVariants}
              >
                Passionate{' '}
                <span className="text-primary-400">Developer</span>{' '}
                & <span className="text-accent-400">Designer</span>
              </motion.h2>
            </motion.div>

            <motion.div 
              className="text-secondary-300 text-lg leading-relaxed space-y-4 text-body"
              variants={itemVariants}
            >
              <p>
                {personalData.description}
              </p>
              <p>
                I believe in writing clean, efficient code and creating intuitive user experiences. 
                My journey in tech is driven by curiosity and a desire to solve real-world problems 
                through innovative digital solutions.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-full min-w-0 max-w-full overflow-x-hidden"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group min-w-0 max-w-full"
                >
                  <div className="classic-card p-6 md:p-8 border-primary-500/20 flex flex-col justify-center items-center h-28 min-h-[7rem] w-full min-w-0 max-w-full">
                    <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-2 heading-primary break-words min-w-0">
                      {stat.number}
                    </div>
                    <div className="text-secondary-400 text-sm font-medium break-words min-w-0">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="flex justify-center order-1 lg:order-2"
            variants={itemVariants}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative">
                <motion.div
                  className="relative overflow-hidden rounded-2xl classic-card p-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Image
                    src={personalData.profile}
                    width={400}
                    height={400}
                    alt="Anish Seth - Web Developer"
                    className={`rounded-xl transition-all duration-700 ${
                      imageLoaded 
                        ? 'grayscale-0 scale-100' 
                        : 'grayscale scale-105'
                    } group-hover:grayscale-0 group-hover:scale-105`}
                    onLoad={() => setImageLoaded(true)}
                    quality={95}
                    priority
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <div className="text-white font-semibold text-lg text-center">
                      <div className="heading-secondary">{personalData.name}</div>
                      <div className="text-primary-400 text-sm">{personalData.designation}</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements removed as requested */}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
