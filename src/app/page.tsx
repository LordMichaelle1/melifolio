import { Hero } from '@/components/Hero';
import { DeclassifiedSheet } from '@/components/DeclassifiedSheet';
import { About } from '@/components/About';
import { Stats } from '@/components/Stats';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Timeline } from '@/components/Timeline';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <div className="relative">
        <Hero />
        <DeclassifiedSheet>
          <About />
          <Stats />
          <Projects />
          <Timeline />
          <Skills />
        </DeclassifiedSheet>
      </div>
      <Contact />
    </>
  );
}
