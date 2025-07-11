'use client';

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { motion, circInOut } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const HeroSection = () => {
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

  const socialLinks = [
    { href: personalData.github, icon: BsGithub, label: "GitHub" },
    { href: personalData.linkedIn, icon: BsLinkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/anish_seth.ai/", icon: FaInstagram, label: "Instagram" },
    { href: personalData.facebook, icon: FaFacebook, label: "Facebook" },
    { href: personalData.twitter, icon: FaTwitterSquare, label: "Twitter" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 lg:py-32 section-padding overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div 
        className="container mx-auto grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-16 gap-y-12 max-w-full px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div 
          className="order-2 lg:order-1 flex flex-col items-start justify-center w-full min-w-0"
          variants={itemVariants}
        >
          <motion.div 
            className="mb-6 w-full"
            variants={itemVariants}
          >
            <p className="text-primary-400 font-medium text-lg mb-2 text-code">
              Hello, I&apos;m
            </p>
            <h1 className="heading-primary text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white mb-4 break-words">
              <span className="text-primary-400">{personalData.name.split(' ')[0]}</span>{' '}
              <span className="text-accent-400">{personalData.name.split(' ')[1]}</span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl text-secondary-300 font-medium">
              <span className="text-white">I&apos;m a Professional </span>
              <span className="text-primary-400 heading-secondary">{personalData.designation}</span>
            </div>
          </motion.div>

          <motion.p 
            className="text-secondary-300 text-lg leading-relaxed mb-8 max-w-2xl text-body"
            variants={itemVariants}
          >
            {personalData.description}
          </motion.p>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-6 mb-12"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className="text-primary-400 hover:text-accent-400 transition-all duration-300 p-2 rounded-lg hover:bg-primary-500/10"
                  aria-label={social.label}
                >
                  <social.icon size={32} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="#contact" 
                className="btn-primary flex items-center gap-2 group"
              >
                <span>Contact Me</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <RiContactsFill size={18} />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={personalData.resume}
                target="_blank"
                className="btn-secondary flex items-center gap-2 group"
              >
                <span>Download Resume</span>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MdDownload size={18} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content - Code Terminal */}
        <motion.div 
          className="order-1 lg:order-2"
          variants={itemVariants}
        >
          <div className="classic-card bg-dark-800/50 border-primary-500/30 p-0 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between p-4 bg-dark-900/80 border-b border-primary-500/20">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-secondary-400 text-sm font-mono">developer-profile.ts</span>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm lg:text-base">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
              >
                <div className="text-primary-400">
                  <span className="text-accent-400">const</span>{' '}
                  <span className="text-white">developer</span>{' '}
                  <span className="text-accent-400">=</span>{' '}
                  <span className="text-secondary-400">{'{'}</span>
                </div>
                
                <div className="ml-4 mt-2">
                  <div className="mb-2">
                    <span className="text-white">name:</span>{' '}
                    <span className="text-green-400">&apos;{personalData.name}&apos;</span>
                    <span className="text-secondary-400">,</span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-white">role:</span>{' '}
                    <span className="text-green-400">&apos;{personalData.designation}&apos;</span>
                    <span className="text-secondary-400">,</span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-white">skills:</span>{' '}
                    <span className="text-secondary-400">[</span>
                    <div className="ml-4 mt-1">
                      {['React', 'Next.js', 'TypeScript', 'UI/UX', 'Node.js'].map((skill, index) => (
                        <div key={index} className="text-green-400">
                          &apos;{skill}&apos;{index < 4 ? ',' : ''}
                        </div>
                      ))}
                    </div>
                    <span className="text-secondary-400">],</span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-white">passionate:</span>{' '}
                    <span className="text-blue-400">true</span>
                    <span className="text-secondary-400">,</span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-white">learning:</span>{' '}
                    <span className="text-blue-400">true</span>
                    <span className="text-secondary-400">,</span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-white">available:</span>{' '}
                    <span className="text-blue-400">true</span>
                  </div>
                </div>
                
                <div className="text-secondary-400 mt-2">{'};'}</div>
                
                <div className="mt-4 text-primary-400">
                  <span className="text-accent-400">export default</span>{' '}
                  <span className="text-white">developer</span>
                  <span className="text-secondary-400">;</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
