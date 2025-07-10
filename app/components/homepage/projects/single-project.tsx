'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import placeholder from '/public/png/placeholder.png';

interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  code: string;
  demo: string;
  image?: {
    src: string;
    alt?: string;
  };
  features?: string[];
}

interface SingleProjectProps {
  project: Project;
  index?: number;
}

const SingleProject: React.FC<SingleProjectProps> = ({ project, index = 0 }) => {
  const { name, description, tags, code, demo, image, features } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group w-full h-fit flex flex-col items-center justify-center relative cursor-pointer overflow-hidden"
    >
      <div className="classic-card p-6 border-accent-500/20 hover:border-accent-400/40 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-xl"></div>
        </div>

        <div className="relative flex flex-col items-center justify-between w-full h-full space-y-6">
          {/* Project Title */}
          <motion.h3 
            className="heading-secondary text-xl font-bold text-white text-center group-hover:text-accent-300 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {name}
          </motion.h3>

          {/* Project Image */}
          <div className="relative w-full max-w-xs overflow-hidden rounded-lg">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src={image ? image.src : placeholder}
                alt={image?.alt || name}
                width={320}
                height={240}
                className="w-full h-48 object-cover rounded-lg transition-all duration-500 group-hover:opacity-80"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </motion.div>
          </div>

          {/* Project Description - Slides in on hover */}
          <motion.div 
            className="absolute inset-x-0 top-0 h-full bg-dark-800/95 backdrop-blur-sm border border-accent-500/30 rounded-xl p-6 flex flex-col justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-10"
          >
            <div className="space-y-4">
              <h4 className="heading-secondary text-lg font-semibold text-accent-300 mb-3">
                {name}
              </h4>
              <p className="text-secondary-300 text-sm leading-relaxed">
                {description}
              </p>
              
              {/* Features */}
              {features && features.length > 0 && (
                <div className="space-y-2">
                  <h5 className="text-white font-medium text-sm">Key Features:</h5>
                  <ul className="space-y-1">
                    {features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-secondary-400 flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent-400 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center w-full">
            {tags.slice(0, 4).map((tag, id) => (
              <motion.span 
                key={id}
                className="bg-dark-700/50 border border-accent-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium"
                whileHover={{ scale: 1.05, borderColor: "rgba(212, 132, 92, 0.4)" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 w-full pt-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/30 text-accent-300 hover:from-accent-500/40 hover:to-primary-500/40 hover:border-accent-400/50 hover:text-white transition-all duration-300"
                aria-label="View Demo"
              >
                <FaExternalLinkAlt size={16} className="group-hover/btn:scale-110 transition-transform duration-300" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 text-primary-300 hover:from-primary-500/40 hover:to-accent-500/40 hover:border-primary-400/50 hover:text-white transition-all duration-300"
                aria-label="View Code"
              >
                <FaGithub size={16} className="group-hover/btn:scale-110 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
