'use client';

import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { motion } from "framer-motion";
import ContactForm from './contact-form';

interface ContactInfo {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  text: string;
  label: string;
  href?: string;
}

interface SocialLink {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  label: string;
  color: string;
}

const ContactSection = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: MdAlternateEmail,
      text: personalData.email,
      label: "Email Address",
      href: `mailto:${personalData.email}`
    },
    {
      icon: IoMdCall,
      text: personalData.phone,
      label: "Phone Number",
      href: `tel:${personalData.phone}`
    },
    {
      icon: CiLocationOn,
      text: personalData.address,
      label: "Location"
    }
  ];

  const socialLinks: SocialLink[] = [
    { icon: IoLogoGithub, href: personalData.github, label: "GitHub", color: "hover:text-gray-400" },
    { icon: BiLogoLinkedin, href: personalData.linkedIn, label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FaXTwitter, href: personalData.twitter, label: "X (Twitter)", color: "hover:text-blue-300" },
    { icon: FaStackOverflow, href: personalData.stackOverflow, label: "Stack Overflow", color: "hover:text-orange-400" },
    { icon: FaInstagram, href: "https://www.instagram.com/anish_seth.ai/", label: "Instagram", color: "hover:text-pink-400" },
    { icon: FaFacebook, href: personalData.facebook, label: "Facebook", color: "hover:text-blue-500" }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="relative section-padding border-t border-primary-500/20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-accent-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl"></div>

      {/* Top Border Gradient */}
      <div className="flex justify-center -translate-y-[1px] absolute top-0 left-0 right-0">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-transparent w-full" />
        </div>
      </div>

      {/* Side Label for Desktop */}
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-4 z-10">
        <motion.span 
          className="bg-accent-600/20 backdrop-blur-sm border border-accent-500/30 text-accent-300 rotate-90 p-3 px-6 text-sm font-semibold rounded-lg"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          GET IN TOUCH
        </motion.span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-accent-500/50 to-transparent mt-4"></span>
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
            <span className="w-8 md:w-24 h-[2px] bg-gradient-to-r from-transparent to-accent-500"></span>
            <span className="bg-accent-600/20 backdrop-blur-sm border border-accent-500/30 text-accent-300 p-2 px-4 md:p-3 md:px-8 text-lg md:text-xl font-bold rounded-lg mx-2 md:mx-4 heading-secondary whitespace-nowrap">
              Contact & Connect
            </span>
            <span className="w-8 md:w-24 h-[2px] bg-gradient-to-l from-transparent to-accent-500"></span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Side - Contact Form */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
            <ContactForm />
            
            {/* Call to Action - Moved to Left Side for Desktop */}
            <motion.div 
              className="hidden lg:block relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gradient-to-br from-accent-500/10 via-primary-500/5 to-accent-500/10 backdrop-blur-xl rounded-2xl border border-accent-500/30 p-6 md:p-8 text-center relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-500/5 to-transparent opacity-50"></div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-500/20 to-primary-500/20 border border-accent-500/30 flex items-center justify-center"
                  >
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  
                  <h4 className="heading-secondary text-lg md:text-xl font-bold text-white mb-3">
                    Ready to Start a Project?
                  </h4>
                  <p className="text-secondary-300 text-sm md:text-base leading-relaxed mb-4">
                    Let's discuss your ideas and create something amazing together. 
                    I'm always excited to work on new challenges and innovative solutions.
                  </p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <Link 
                      href="mailto:anishseth2055@gmail.com"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300"
                    >
                      <span>Let's Talk</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Contact Information */}
          <motion.div 
            className="order-1 lg:order-2 space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Contact Information - Improved */}
            <motion.div 
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-accent-500/20 p-6 md:p-8"
              variants={itemVariants}
            >
              <h3 className="heading-secondary text-xl md:text-2xl font-bold text-white mb-6 text-center">
                Get In Touch
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent-500/5 transition-all duration-300 group border border-transparent hover:border-accent-500/20"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-accent-500/20 to-primary-500/10 border border-accent-500/30 flex items-center justify-center text-accent-400 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                        whileHover={{ rotate: 10 }}
                      >
                        <IconComponent size={20} className="md:w-6 md:h-6" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm text-secondary-400 uppercase tracking-wider mb-1 font-medium">
                          {info.label}
                        </p>
                        <p className="text-white font-medium group-hover:text-accent-300 transition-colors duration-300 text-sm md:text-base break-words">
                          {info.text}
                        </p>
                      </div>
                      {info.href && (
                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center">
                            <svg className="w-3 h-3 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );

                  return info.href ? (
                    <Link key={index} href={info.href} className="block">
                      {content}
                    </Link>
                  ) : (
                    content
                  );
                })}
              </div>
            </motion.div>

            {/* Social Links - Redesigned */}
            <motion.div 
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-accent-500/20 p-6 md:p-8 overflow-hidden relative"
              variants={itemVariants}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-500/10 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-500/10 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className="heading-secondary text-xl md:text-2xl font-bold text-white mb-2 text-center">
                  Connect With Me
                </h3>
                <p className="text-secondary-400 text-sm md:text-base text-center mb-6 md:mb-8">
                  Let's stay connected across platforms
                </p>
                
                {/* Social Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block"
                          aria-label={social.label}
                        >
                          <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-sm border border-accent-500/20 rounded-xl p-4 md:p-6 hover:border-accent-400/40 transition-all duration-300 relative overflow-hidden group-hover:shadow-lg group-hover:shadow-accent-500/20">
                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Icon container */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-accent-500/20 to-primary-500/10 border border-accent-500/30 flex items-center justify-center text-accent-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-3">
                                <IconComponent size={24} className="md:w-7 md:h-7" />
                              </div>
                              
                              {/* Label */}
                              <span className="text-xs md:text-sm font-medium text-secondary-400 group-hover:text-accent-300 transition-colors duration-300">
                                {social.label}
                              </span>
                              
                              {/* Hover indicator */}
                              <div className="mt-2 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-primary-500 group-hover:w-full transition-all duration-300"></div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Additional contact encouragement */}
                <motion.div 
                  className="mt-6 md:mt-8 p-4 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-lg border border-accent-500/20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="text-secondary-300 text-xs md:text-sm text-center leading-relaxed">
                    <span className="text-accent-400 font-medium">Follow me</span> for updates on my latest projects, tech insights, and professional journey.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Call to Action - Mobile Version (Right Side) */}
            <motion.div 
              className="block lg:hidden relative overflow-hidden"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-gradient-to-br from-accent-500/10 via-primary-500/5 to-accent-500/10 backdrop-blur-xl rounded-2xl border border-accent-500/30 p-6 md:p-8 text-center relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-500/5 to-transparent opacity-50"></div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-500/20 to-primary-500/20 border border-accent-500/30 flex items-center justify-center"
                  >
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  
                  <h4 className="heading-secondary text-lg md:text-xl font-bold text-white mb-3">
                    Ready to Start a Project?
                  </h4>
                  <p className="text-secondary-300 text-sm md:text-base leading-relaxed mb-4">
                    Let's discuss your ideas and create something amazing together. 
                    I'm always excited to work on new challenges and innovative solutions.
                  </p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <Link 
                      href="mailto:anishseth2055@gmail.com"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300"
                    >
                      <span>Let's Talk</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
