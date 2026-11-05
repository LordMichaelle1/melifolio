'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, Mail } from 'lucide-react';
import { specialties } from '@/data/site';
import { useCipherField } from '@/hooks/useCipherField';
import { CipherLink } from './CipherLink';
import { DecodeCycle } from './DecodeCycle';
import { DecodeText } from './DecodeText';

const nameClasses = 'block text-[min(22vw,38svh)] font-semibold uppercase leading-[0.84] tracking-[-0.05em]';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useCipherField(canvasRef);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const firstLineX = useTransform(scrollYProgress, [0, 1], ['0%', '-14%']);
  const secondLineX = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const detailsOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pt-28 pb-10">
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full font-mono" />

      <div className="container-custom relative w-full pointer-events-none">
        <p className="label text-accent mb-6">Software Engineer</p>

        <h1 className="text-primary mb-10 md:mb-14">
          <motion.span style={{ x: firstLineX }} className={nameClasses}>
            <DecodeText text="Abiodun" duration={1100} />
          </motion.span>
          <motion.span style={{ x: secondLineX }} className={nameClasses}>
            <DecodeText text="Michael" duration={1100} delay={200} />
          </motion.span>
        </h1>

        <motion.div
          style={{ opacity: detailsOpacity }}
          className="grid gap-8 lg:grid-cols-12 lg:items-end pointer-events-auto"
        >
          <p className="lg:col-span-5 text-lg md:text-xl text-primary leading-snug tracking-tight">
            I build production web apps and backends. I also write benchmark tasks that test AI coding models.
          </p>

          <div className="lg:col-span-3">
            <p className="label text-secondary mb-2">I specialize in</p>
            <DecodeCycle words={specialties} className="font-mono text-sm md:text-base text-primary" />
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <CipherLink href="#contact" label="Get In Touch" variant="solid" icon={<Mail className="w-4 h-4" />} />
            <CipherLink href="#projects" label="View Projects" icon={<ArrowDownRight className="w-4 h-4" />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
