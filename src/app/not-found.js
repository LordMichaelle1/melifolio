'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="text-9xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6"
        >
          404
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Oops! Page Not Found
        </h1>
        
        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
          The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <FiArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
