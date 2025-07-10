'use client';

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const SCROLL_THRESHOLD = 50;

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 10px 25px rgba(212, 132, 92, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-400 hover:to-primary-400 text-white shadow-lg transition-all duration-300 ease-out group"
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaArrowUp 
              size={16} 
              className="group-hover:scale-110 transition-transform duration-300" 
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
