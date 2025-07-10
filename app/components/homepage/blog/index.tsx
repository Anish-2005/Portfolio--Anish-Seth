'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import BlogCard from './blog-card';

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


interface BlogProps {
  blogs?: Blog[];
}

const Blog: React.FC<BlogProps> = ({ blogs }) => {
  // Ensure blogs is always an array
  const safeBlogs = Array.isArray(blogs) ? blogs : [];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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
    <section id="blogs" className="relative section-padding border-t border-primary-500/20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-accent-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl"></div>

      {/* Top Border Gradient */}
      <div className="flex justify-center -translate-y-[1px] absolute top-0 left-0 right-0">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-transparent w-full" />
        </div>
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
              Latest Articles
            </span>
            <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-accent-500"></span>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {safeBlogs.slice(0, 6).map((blog, index) => (
            blog?.cover_image && (
              <motion.div key={blog.id} variants={itemVariants}>
                <BlogCard blog={blog} index={index} />
              </motion.div>
            )
          ))}
        </motion.div>

        {/* View More Button */}
        {safeBlogs.length > 6 && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-400 hover:to-primary-400 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Explore All Articles</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <FaArrowRight size={16} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        )}

        {/* Blog Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center classic-card p-4 border-accent-500/20">
            <div className="text-2xl font-bold text-accent-400 mb-2 heading-primary">
              {safeBlogs.length}+
            </div>
            <div className="text-secondary-400 text-sm">Articles Published</div>
          </div>
          <div className="text-center classic-card p-4 border-primary-500/20">
            <div className="text-2xl font-bold text-primary-400 mb-2 heading-primary">
              {safeBlogs.reduce((acc, blog) => acc + blog.public_reactions_count, 0)}+
            </div>
            <div className="text-secondary-400 text-sm">Total Reactions</div>
          </div>
          <div className="text-center classic-card p-4 border-accent-500/20">
            <div className="text-2xl font-bold text-accent-400 mb-2 heading-primary">
              {safeBlogs.length > 0 ? Math.round(safeBlogs.reduce((acc, blog) => acc + blog.reading_time_minutes, 0) / safeBlogs.length) : 0}
            </div>
            <div className="text-secondary-400 text-sm">Avg. Read Time</div>
          </div>
          <div className="text-center classic-card p-4 border-primary-500/20">
            <div className="text-2xl font-bold text-primary-400 mb-2 heading-primary">
              {safeBlogs.reduce((acc, blog) => acc + blog.comments_count, 0)}+
            </div>
            <div className="text-secondary-400 text-sm">Comments</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
