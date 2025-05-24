"use client";

import { motion } from 'framer-motion';
import { FiMail, FiArrowRight } from 'react-icons/fi';

export default function HireMeCTA() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 md:p-12">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient glow">Let's Work Together</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work. If you're looking for a developer who can bring your ideas to life, let's chat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="btn-primary px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiMail className="w-5 h-5" />
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-gray-800 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <FiArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
    </div>
  );
}
