'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialLinks = [
  { icon: Github, href: 'https://github.com/lordmichaelle1', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/michael-abiodun-2657a3238/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/Michael52110896', label: 'Twitter' },
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or email directly.');
      console.error('EmailJS error:', error);
    }
  };

  return (
    <section id="contact" className="section bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Let&apos;s Work Together
          </h2>
          <p className="text-secondary mt-4 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Get in touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-secondary">
                  <div className="p-2 rounded-lg bg-accent/10 shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <span className="break-all text-sm sm:text-base">Michaelabiodun2006@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Connect with me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'p-3 rounded-lg transition-all duration-300 btn-press',
                      'bg-surface-solid/50 hover:bg-accent',
                      'text-secondary hover:text-white'
                    )}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-6 md:p-8 space-y-6"
            >
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className={cn(
                    'w-full px-4 py-3 rounded-lg',
                    'bg-surface-solid/50 border border-white/10',
                    'text-primary placeholder:text-secondary/50',
                    'focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent',
                    'transition-colors'
                  )}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="reply_to" className="block text-sm font-medium text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  required
                  className={cn(
                    'w-full px-4 py-3 rounded-lg',
                    'bg-surface-solid/50 border border-white/10',
                    'text-primary placeholder:text-secondary/50',
                    'focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent',
                    'transition-colors'
                  )}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg resize-none',
                    'bg-surface-solid/50 border border-white/10',
                    'text-primary placeholder:text-secondary/50',
                    'focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent',
                    'transition-colors'
                  )}
                  placeholder="Tell me about your project..."
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-cta bg-cta/10 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className={cn(
                  'w-full flex items-center justify-center gap-2',
                  'px-6 py-4 rounded-lg font-semibold',
                  'bg-gradient-to-r from-accent to-accent-light text-white',
                  'hover:glow-accent transition-all duration-300 btn-press',
                  'disabled:opacity-50 disabled:cursor-not-allowed'
                )}
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
