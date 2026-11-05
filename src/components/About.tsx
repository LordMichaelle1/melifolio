'use client';

import { motion } from 'framer-motion';
import { focusAreas } from '@/data/site';
import { Redact } from './Redact';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="section bg-background">
      <div className="container-custom">
        <SectionHeading index="0x01" label="About Me" title="What I Work On" />

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6 text-lg md:text-2xl leading-snug text-secondary">
            <p>
              I&apos;m a full-stack engineer, and most of my work is software already in production. The largest
              piece is a platform for a polytechnic: <Redact>one Next.js app</Redact> runs the public site, student
              portal, staff admin and API, with <Redact delay={0.15}>live Paystack payments</Redact> reconciled by
              webhook.
            </p>
            <p>
              On the backend, I own the <Redact>Django REST Framework</Redact> API for a student housing and
              marketplace platform, and I&apos;ve built Laravel and Node.js APIs for freelance clients. At Zent
              Technologies I owned the community marketplace and marketing dashboard that vendors run their
              stores on.
            </p>
            <p>
              I also work in <Redact>AI code evaluation</Redact> with Turing, AfterQuery, Snorkel, Mercor and
              Revelo. I write Terminal Bench 2 tasks and Rust fuzzing tasks, review function calling evaluations,
              and build synthetic Python repositories.
            </p>
          </div>

          <ul className="lg:col-span-5 border-t border-line self-start">
            {focusAreas.map((area, index) => (
              <motion.li
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="wipe border-b border-line p-5 flex items-start gap-4 cursor-default"
              >
                <area.icon className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                <div>
                  <h3 className="text-primary font-medium mb-1">{area.title}</h3>
                  <p className="text-secondary text-sm">{area.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
