'use client';

import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Blog {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  url: string;
  published_at: string;
  public_reactions_count: number;
  comments_count: number;
  reading_time_minutes: number;
  tags?: string[];
}

interface BlogCardProps {
  blog: Blog;
  index?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, index = 0 }) => {
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
      className="group"
    >
      <div className="classic-card overflow-hidden border-accent-500/20 hover:border-accent-400/40 transition-all duration-500 h-full">
        {/* Background Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative h-full flex flex-col">
          {/* Image Section */}
          <div className="h-44 lg:h-52 w-full cursor-pointer overflow-hidden rounded-t-xl relative">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full"
            >
              <Image
                src={blog?.cover_image}
                height={1080}
                width={1920}
                alt={blog.title}
                className="h-full w-full object-cover"
              />
            </motion.div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-5 flex flex-col flex-1">
            {/* Meta Information */}
            <div className="flex justify-between items-center text-accent-400 text-sm mb-3">
              <motion.p 
                className="text-secondary-400"
                whileHover={{ color: "#d4845c" }}
              >
                {timeConverter(blog.published_at)}
              </motion.p>
              <div className="flex items-center gap-3">
                <motion.div 
                  className="flex items-center gap-1 text-primary-400"
                  whileHover={{ scale: 1.1 }}
                >
                  <BsHeartFill size={12} />
                  <span className="text-xs">{blog.public_reactions_count}</span>
                </motion.div>
                {blog.comments_count > 0 && (
                  <motion.div 
                    className="flex items-center gap-1 text-accent-400"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaCommentAlt size={12} />
                    <span className="text-xs">{blog.comments_count}</span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Title */}
            <Link href={blog.url} target="_blank" rel="noopener noreferrer">
              <motion.h3 
                className="heading-secondary text-lg sm:text-xl font-semibold text-white hover:text-accent-300 cursor-pointer mb-3 line-clamp-2 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {blog.title}
              </motion.h3>
            </Link>

            {/* Reading Time */}
            <motion.div 
              className="flex items-center gap-2 mb-3"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-primary-500/20 text-primary-300 px-2 py-1 rounded-full text-xs font-medium">
                {`${blog.reading_time_minutes} min read`}
              </span>
            </motion.div>

            {/* Description */}
            <p className="text-sm lg:text-base text-secondary-300 leading-relaxed line-clamp-3 flex-1 mb-4">
              {blog.description}
            </p>

            {/* Tags (if available) */}
            {blog.tags && Array.isArray(blog.tags) && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.slice(0, 3).map((tag, idx) => (
                  <span 
                    key={idx}
                    className="bg-dark-700/50 border border-accent-500/20 text-secondary-400 px-2 py-1 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Read More Button */}
            <Link href={blog.url} target="_blank" rel="noopener noreferrer">
              <motion.button 
                className="w-full bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/30 text-accent-300 hover:from-accent-500/30 hover:to-primary-500/30 hover:border-accent-400/50 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Read Article
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="group-hover/btn:translate-x-1 transition-transform duration-300"
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
