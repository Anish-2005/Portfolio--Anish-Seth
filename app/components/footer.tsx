'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { personalData } from '@/utils/data/personal-data';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebook, FaTwitterSquare, FaInstagram, FaHeart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: personalData.github, icon: BsGithub, label: "GitHub" },
    { href: personalData.linkedIn, icon: BsLinkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/anish_seth.ai/", icon: FaInstagram, label: "Instagram" },
    { href: personalData.facebook, icon: FaFacebook, label: "Facebook" },
    { href: personalData.twitter, icon: FaTwitterSquare, label: "Twitter" },
  ];

  const quickLinks = [
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#experience", label: "Experience" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <footer className="relative border-t bg-dark-900/80 backdrop-blur-sm border-primary-500/20 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
        <div className="absolute bottom-0 right-20 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="heading-primary text-2xl lg:text-3xl font-bold text-primary-400 mb-4">
                {personalData.name}
              </h3>
              <p className="text-secondary-300 text-base leading-relaxed max-w-md text-body">
                Passionate Web Developer & UI/UX Designer creating elegant digital solutions. 
                Let&apos;s build something amazing together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-3 text-secondary-300 hover:text-primary-400 transition-colors duration-300 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <MdEmail size={20} className="text-primary-400 group-hover:text-accent-400 transition-colors duration-300" />
                <span className="text-sm">{personalData.email}</span>
              </motion.a>
              
              <div className="flex items-center gap-3 text-secondary-300">
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                </div>
                <span className="text-sm">{personalData.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="heading-secondary text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      href={link.href}
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-sm relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="heading-secondary text-lg font-bold text-white mb-6">Connect</h4>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-lg bg-dark-800/50 border border-primary-500/20 text-primary-400 hover:text-accent-400 hover:border-primary-400/40 hover:bg-primary-500/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Resume Download */}
            <motion.div 
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm py-2 px-4"
              >
                Download Resume
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-primary-500/20 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-400 text-sm text-center md:text-left">
              © {currentYear} {personalData.name}. All rights reserved.
            </p>
            
            <motion.p 
              className="text-secondary-400 text-sm flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              Built with{' '}
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#f97316', '#d4845c', '#f97316']
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <FaHeart className="text-accent-400" />
              </motion.span>
              {' '}using Next.js & TypeScript
            </motion.p>

            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/Anish-2005/Portfolio--Anish-Seth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-300 text-sm flex items-center gap-2"
              >
                <BsGithub size={16} />
                Star on GitHub
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
