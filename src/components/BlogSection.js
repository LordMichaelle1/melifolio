"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';

const blogPosts = [
  {
    id: 1,
    title: 'Mastering Next.js 14: New Features and Best Practices',
    excerpt: 'Explore the latest features in Next.js 14 and learn how to leverage them in your projects.',
    date: 'May 15, 2025',
    readTime: '8 min read',
    category: 'Development',
    slug: 'mastering-nextjs-14'
  },
  {
    id: 2,
    title: 'Building Accessible Web Applications',
    excerpt: 'Learn how to create web applications that are accessible to everyone, following WCAG guidelines.',
    date: 'April 28, 2025',
    readTime: '6 min read',
    category: 'Accessibility',
    slug: 'building-accessible-web-apps'
  },
  {
    id: 3,
    title: 'State Management in 2025: Beyond Redux',
    excerpt: 'Exploring modern state management solutions and when to use them in your React applications.',
    date: 'April 10, 2025',
    readTime: '10 min read',
    category: 'Development',
    slug: 'state-management-2025'
  }
];

export default function BlogSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            Thoughts, stories and ideas about web development, design, and more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/30 transition-colors"
            >
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FiCalendar className="mr-1.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-1.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group/readmore"
                >
                  Read more
                  <FiArrowRight className="ml-1.5 group-hover/readmore:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-800/50 hover:border-gray-600 transition-colors"
          >
            View All Articles
            <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
