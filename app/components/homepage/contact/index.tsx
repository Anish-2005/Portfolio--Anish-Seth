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
              Contact & Connect
            </span>
            <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-accent-500"></span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Contact Form */}
          <ContactForm />

          {/* Right Side - Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Contact Information */}
            <motion.div 
              className="classic-card p-6 border-accent-500/20"
              variants={itemVariants}
            >
              <h3 className="heading-secondary text-xl font-bold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent-500/5 transition-all duration-300 group"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center text-accent-400 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-300"
                        whileHover={{ rotate: 10 }}
                      >
                        <IconComponent size={24} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-secondary-400 uppercase tracking-wider mb-1">
                          {info.label}
                        </p>
                        <p className="text-white font-medium group-hover:text-accent-300 transition-colors duration-300">
                          {info.text}
                        </p>
                      </div>
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

            {/* Social Links */}
            <motion.div 
              className="classic-card p-6 border-primary-500/20"
              variants={itemVariants}
            >
              <h3 className="heading-secondary text-xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                        aria-label={social.label}
                      >
                        <motion.div 
                          className="w-full aspect-square rounded-xl bg-gradient-to-br from-dark-700/50 to-dark-800/50 border border-accent-500/20 hover:border-accent-400/40 flex items-center justify-center text-secondary-300 hover:text-white transition-all duration-300 relative overflow-hidden"
                          whileHover={{ 
                            boxShadow: "0 10px 30px rgba(212, 132, 92, 0.3)" 
                          }}
                        >
                          {/* Background glow on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <IconComponent 
                            size={28} 
                            className={`relative z-10 transition-colors duration-300 ${social.color}`} 
                          />
                        </motion.div>
                        
                        <p className="text-xs text-secondary-400 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {social.label}
                        </p>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              className="text-center space-y-4"
              variants={itemVariants}
            >
              <motion.div 
                className="classic-card p-6 border-primary-500/20 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="heading-secondary text-lg font-semibold text-primary-300 mb-3">
                  Ready to Start a Project?
                </h4>
                <p className="text-secondary-300 text-sm leading-relaxed">
                  Let&apos;s discuss your ideas and create something amazing together. 
                  I&apos;m always excited to work on new challenges and innovative solutions.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
