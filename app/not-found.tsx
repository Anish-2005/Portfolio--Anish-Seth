'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-accent-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-8 z-10"
      >
        {/* 404 Number */}
        <motion.h1 
          className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text heading-primary"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          404
        </motion.h1>

        {/* Main Message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white heading-secondary">
            Oops! Page Not Found
          </h2>
          <p className="text-secondary-300 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for seems to have wandered off into the digital void. 
            Let&apos;s get you back on track!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-400 hover:to-primary-400 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Return Home</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                →
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 bg-dark-700/50 border border-accent-500/30 text-accent-300 hover:bg-accent-500/10 hover:border-accent-400/50 font-medium py-3 px-8 rounded-full transition-all duration-300"
            >
              ← Go Back
            </button>
          </motion.div>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-8"
        >
          <p className="text-secondary-400 text-sm mb-4">Or explore these sections:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { href: "/#about", label: "About" },
              { href: "/#projects", label: "Projects" },
              { href: "/#skills", label: "Skills" },
              { href: "/#contact", label: "Contact" },
              { href: "/blog", label: "Blog" }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary-400 hover:text-accent-300 text-sm transition-colors duration-300 underline decoration-accent-500/30 hover:decoration-accent-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-16 h-16 border border-accent-500/20 rounded-full bg-accent-500/5"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 3, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 right-1/4 w-12 h-12 border border-primary-500/20 rounded-full bg-primary-500/5"
      />
    </div>
  );
};

export default NotFoundPage;
