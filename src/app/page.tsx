import { Hero } from '@/components/Hero';
import { TechMarquee } from '@/components/TechMarquee';
import { About } from '@/components/About';
import { Stats } from '@/components/Stats';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Timeline } from '@/components/Timeline';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </>
  );
}
