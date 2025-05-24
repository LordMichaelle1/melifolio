"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });
const Stats = dynamic(() => import('@/components/Stats'), { ssr: false });
const HireMeCTA = dynamic(() => import('@/components/HireMeCTA'), { ssr: false });

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  // Set mounted state to prevent SSR issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMounted) return;

    const handleClickOutside = (event) => {
      const menuButton = document.querySelector('[aria-label="Toggle menu"]');
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container') && 
          !event.target.closest('[aria-label="Toggle menu"]')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen, isMounted]);

  // Close mobile menu on route change
  const handleSectionClick = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  if (!isMounted) return null;

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-foreground">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gradient glow opacity-80">M3li.Re</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-purple-400' 
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span 
                      layoutId="nav-underline"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-400"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.button 
                className="md:hidden text-gray-400 hover:text-gray-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  />
                  <motion.div 
                    className="md:hidden fixed top-20 right-0 bottom-0 left-0 z-40 bg-white dark:bg-gray-900 overflow-y-auto"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="container mx-auto px-6 py-6">
                      <nav className="flex flex-col space-y-2">
                        {navItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleSectionClick(item.id)}
                            className={`px-4 py-3 text-left text-base font-medium rounded-lg transition-colors ${
                              activeSection === item.id
                                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
                                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}

                      </nav>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2 + 1,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-24">
          <motion.div
            className="relative group max-w-4xl w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-300 group-hover:duration-200"></div>
            <div className="relative px-6 py-8 md:px-12 md:py-16 glass rounded-xl">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 text-gradient glow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm <span className="text-foreground">Abiodun Michael</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I'm a <span className="font-medium text-foreground">Full Stack Developer</span> creating beautiful and functional web experiences.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-medium text-white hover:opacity-90 transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--tw-gradient-to)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View My Work</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-6 py-3 border-2 border-border rounded-full font-medium hover:bg-accent/10 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Contact Me</span>
                  <FiMail className="w-5 h-5" />
                </motion.a>
              </motion.div>
              <motion.div 
                className="mt-12 flex justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <a href="https://github.com/LordMichaelle1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FiGithub className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/michael-abiodun-2657a3238" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FiLinkedin className="w-6 h-6" />
                </a>
                <a href="https://x.com/MeliRe898777" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FiTwitter className="w-6 h-6" />
                </a>
                <a href="mailto:michaeabiodun2006@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors">
                  <FiMail className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-24 text-gray-400 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <p>Scroll down to explore</p>
            <div className="mt-2 w-6 h-10 border-2 border-gray-600 rounded-full mx-auto relative">
              <motion.div
                className="w-1 h-2 bg-blue-400 rounded-full mx-auto mt-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient glow">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 mx-auto rounded-full mb-2"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl -z-10 blur"></div>
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-1">
                  <div className="bg-foreground/5 rounded-lg overflow-hidden">
                    <div className="h-8 bg-foreground/10 border-b border-border flex items-center px-4 space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Who am I?</h3>
                      <p className="text-muted-foreground mb-4">
                        My journey into tech started back in high school, when I first stumbled across HTML and CSS. What began as curiosity quickly became a full-on passion.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Today, I'm studying Software Engineering at <span className="text-primary font-medium">FUTA</span>, and I spend most of my time building full-stack applications that are both functional and thoughtfully designed.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        I work primarily with <span className="text-primary font-medium">React, Next.js, and Node.js</span>, and I enjoy creating clean, accessible, and efficient digital experiences from front to back.
                      </p>
                      <p className="text-muted-foreground">
                        Outside of code, I'm also into <span className="text-accent font-medium">video editing</span> — crafting short-form content, promos, and storytelling projects that blend visuals with sound. That creative side helps shape the way I think about user experience and design.
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* Education */}
                  <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gradient">Education</h3>
                    <div className="space-y-2">
                      <div>
                        <h4 className="font-medium text-foreground">B.Sc. Software Engineering (In Progress)</h4>
                        <p className="text-sm text-muted-foreground">Federal University of Technology, Akure • 2023 – 2027</p>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gradient">Experience</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground">Freelance Web Developer</h4>
                        <p className="text-sm text-muted-foreground">Remote • 2022 – Present</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Built and maintained several personal and community web projects using React, Tailwind CSS, and Laravel.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Project Developer</h4>
                        <p className="text-sm text-muted-foreground">Personal Projects • 2021 – Present</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Developed full-stack applications and tools, focusing on clean UI, performance, and real-world problem solving.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
          
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-background/80">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient glow">My Skills</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 mx-auto rounded-full mb-2"></div>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Here are the technologies and tools I work with, organized by category.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Frontend Skills */}
              <motion.div 
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gradient">
                  <FaReact className="mr-2 text-primary" /> Frontend
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'HTML/CSS', level: 90 },
                    { name: 'JavaScript', level: 85 },
                    { name: 'React', level: 70 },
                    { name: 'Next.js', level: 75 },
                    { name: 'Tailwind CSS', level: 80 },
                  ].map((skill, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between mb-1">
                        <span className="text-foreground/90 group-hover:text-foreground transition-colors">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200/60 dark:bg-gray-700/60 rounded-full h-2 border border-gray-300 dark:border-gray-800">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Backend & Database */}
              <motion.div 
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gradient">
                  <FaNodeJs className="mr-2 text-secondary" /> Backend & Database
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'PHP', level: 90 },
                    { name: 'Laravel', level: 85 },
                    { name: 'Python', level: 50 },
                    { name: 'Java', level: 70 },
                    { name: 'MySQL', level: 85 },
                  ].map((skill, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between mb-1">
                        <span className="text-foreground/90 group-hover:text-foreground transition-colors">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200/60 dark:bg-gray-700/60 rounded-full h-2 border border-gray-300 dark:border-gray-800">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Other */}
              <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gradient">
                  <FiGithub className="mr-2 text-accent" /> Tools & Other
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Git', level: 80 },
                    { name: 'After Effects', level: 75 },
                  ].map((skill, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between mb-1">
                        <span className="text-foreground/90 group-hover:text-foreground transition-colors">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200/60 dark:bg-gray-700/60 rounded-full h-2 border border-gray-300 dark:border-gray-800">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient glow">My Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 mx-auto rounded-full mb-2"></div>
              <p className="max-w-2xl mx-auto mt-6 text-gray-400">
                Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Personal Portfolio Website',
                  description: 'A modern, animated portfolio to showcase my skills, built with Next.js and Tailwind CSS.',
                  tags: ['Next.js', 'React', 'Tailwind CSS'],
                  image: '/melifolio.png',
                  github: 'https://github.com/yourusername/melifolio',
                  demo: 'https://melifolio.vercel.app',
                },
                {
                  title: 'Student Portal for Polytechnic',
                  description: 'A full-featured student portal for a polytechnic, including authentication, course management, and results tracking. Built with PHP, Laravel, MySQL, and modern frontend tools. Demo login: Username: ND12345 | Password: password',
                  tags: ['Laravel', 'PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
                  image: '/portal.png',
                  github: '',
                  demo: 'https://portal.bestpotech.edu.ng',
                },
                {
                  title: 'E-commerce Site for Solar Company',
                  description: 'An in-progress ecommerce platform for a solar company, featuring product listings, shopping cart, and secure checkout. Built with React, Next.js, and Tailwind CSS.',
                  tags: ['React', 'laravel', 'Tailwind CSS', 'E-commerce'],
                  image: '/solar.png',
                  github: '',
                  demo: 'https://e-solar-nbzb.vercel.app',
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={project.image || '/project-placeholder.jpg'} 
                      alt={project.title}
                      fill
                      className="object-contain shadow-md transition-transform duration-500 group-hover:scale-105"
                      style={{ objectFit: 'contain' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tags?.map((tag, i) => (
                            <span key={i} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary-foreground tag-neon">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className={`text-muted-foreground mb-4 ${expandedProject === index ? '' : 'line-clamp-2'}`}>{project.description}</p>
                    <button
                      className="text-xs text-primary underline focus:outline-none mb-2"
                      onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    >
                      {expandedProject === index ? 'Show less' : 'Show more'}
                    </button>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags?.map((tag, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded-full bg-foreground/10 text-foreground/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors text-foreground/70 hover:text-foreground"
                            aria-label="View on GitHub"
                          >
                            <FiGithub className="w-5 h-5" />
                          </a>
                        )}
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 transition-colors text-primary-foreground text-sm font-medium flex items-center"
                          >
                            <FiExternalLink className="w-4 h-4 mr-1" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <Stats />
          </div>
        </section>

        {/* Hire Me CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <HireMeCTA />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-background/80">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              <p className="max-w-2xl mx-auto mt-6 text-muted-foreground">
                Have a project in mind or want to chat? Feel free to reach out!
              </p>
            </motion.div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background/80 backdrop-blur-sm border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">© {new Date().getFullYear()} Abiodun Michael. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/LordMichaelle1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub profile"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/michael-abiodun-2657a3238" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-blue-400 transition-colors"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/MeliRe898777" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-blue-400 transition-colors"
                aria-label="Twitter profile"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:michaelabiodun2006@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Send email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
