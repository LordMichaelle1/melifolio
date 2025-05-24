"use client";

import { motion } from 'framer-motion';
import { FiAward, FiCode, FiUsers, FiTag } from 'react-icons/fi';

const stats = [
  { id: 1, name: 'Years Experience', value: '4+', icon: <FiAward className="w-6 h-6" /> },
  { id: 2, name: 'Projects Completed', value: '37+', icon: <FiCode className="w-6 h-6" /> },
  { id: 3, name: 'Happy Clients', value: '30+', icon: <FiUsers className="w-6 h-6" /> },
  { id: 4, name: 'Bugs Squashed', value: '∞', icon: <FiTag className="w-6 h-6" /> },
];

export default function Stats() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-400">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400">{stat.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
