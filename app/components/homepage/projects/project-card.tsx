'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { ProjectData } from '@/utils/data/projects-data';

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div 
      className="bg-dark-800/50 border border-primary-500/30 relative rounded-2xl overflow-hidden group w-full max-w-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top Border Gradient */}
      <div className="flex flex-row w-full">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary-500 to-accent-500"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-accent-500 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6 relative bg-dark-900/80 w-full">
        <div className="flex flex-row space-x-2 absolute top-1/2 -translate-y-1/2 left-4 sm:left-6">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <h3 className="text-center ml-12 text-primary-400 text-lg lg:text-xl font-bold heading-secondary break-words">
          {project.name}
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 w-full overflow-hidden">
        {/* Left Side - Project Image */}
        <div className="relative w-full">
          <motion.div 
            className="relative overflow-hidden rounded-xl w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-xl"
              quality={95}
            />
            
            {/* Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent flex items-end justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-4">
                {project.code && (
                  <Link 
                    href={project.code} 
                    target="_blank"
                    className="btn-secondary p-3 rounded-full"
                  >
                    <FiGithub size={20} />
                  </Link>
                )}
                {project.demo && (
                  <Link 
                    href={project.demo} 
                    target="_blank"
                    className="btn-primary p-3 rounded-full"
                  >
                    <FiExternalLink size={20} />
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Project Details */}
        <div className="space-y-6">
          {/* Role Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 px-4 py-2 rounded-full text-sm font-medium">
            <FiCode size={16} />
            {project.role}
          </div>

          {/* Description */}
          <p className="text-secondary-300 text-base leading-relaxed text-body">
            {project.description}
          </p>

          {/* Technologies */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-code">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tech, index) => (
                <motion.span
                  key={index}
                  className="bg-dark-700/50 border border-primary-500/20 text-secondary-300 px-3 py-1 rounded-full text-sm font-medium hover:border-primary-400/40 hover:text-primary-300 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            {project.code && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={project.code} 
                  target="_blank"
                  className="btn-secondary flex items-center gap-2"
                >
                  <FiGithub size={18} />
                  <span>Source Code</span>
                </Link>
              </motion.div>
            )}
            {project.demo && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={project.demo} 
                  target="_blank"
                  className="btn-primary flex items-center gap-2"
                >
                  <FiExternalLink size={18} />
                  <span>Live Demo</span>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Code Section */}
      <div className="border-t border-primary-500/20 bg-dark-900/50 px-6 lg:px-8 py-6">
        <div className="font-mono text-xs md:text-sm text-code">
          <motion.div 
            className="space-y-1"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <span className="text-accent-400">const</span>{' '}
              <span className="text-white">project</span>{' '}
              <span className="text-accent-400">=</span>{' '}
              <span className="text-secondary-400">{'{'}</span>
            </div>
            
            <div className="ml-4">
              <span className="text-white">name:</span>{' '}
              <span className="text-green-400">&apos;{project.name}&apos;</span>
              <span className="text-secondary-400">,</span>
            </div>
            
            <div className="ml-4">
              <span className="text-white">role:</span>{' '}
              <span className="text-orange-400">&apos;{project.role}&apos;</span>
              <span className="text-secondary-400">,</span>
            </div>
            
            <div className="ml-4">
              <span className="text-white">status:</span>{' '}
              <span className="text-blue-400">&apos;completed&apos;</span>
              <span className="text-secondary-400">,</span>
            </div>
            
            <div className="text-secondary-400">{'};'}</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
