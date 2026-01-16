'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Typewriter } from './Typewriter';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh-gradient">
      <div className="absolute inset-0 bg-background/80" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom relative z-10 text-center py-20"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
        >
          Software Engineer
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 sm:mb-6 leading-tight"
        >
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cta">
            Abiodun Michael
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-4 px-4"
        >
          I build exceptional digital experiences with clean code,
          modern technologies, and a passion for performance.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl font-medium mb-8 sm:mb-10"
        >
          <span className="text-secondary">I specialize in </span>
          <Typewriter
            words={['React & Next.js', 'Full Stack Development', 'Mobile Apps', 'Cloud Solutions', 'API Design']}
            className="text-cta"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className={cn(
              'flex items-center gap-2 px-8 py-4 rounded-xl font-semibold',
              'bg-gradient-to-r from-accent to-accent-light text-white',
              'transition-all duration-300 btn-press hover:glow-accent',
              'hover:shadow-lg hover:shadow-accent/25'
            )}
          >
            <Mail className="w-5 h-5" />
            <span>Get In Touch</span>
          </button>

          <button
            onClick={scrollToProjects}
            className={cn(
              'flex items-center gap-2 px-8 py-4 rounded-xl font-semibold',
              'glass-card hover:bg-surface-solid/80',
              'text-primary transition-all duration-300 btn-press'
            )}
          >
            <Github className="w-5 h-5" />
            <span>View Projects</span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => {
            const element = document.querySelector('#about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="p-2 text-secondary hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}
