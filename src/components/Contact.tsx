'use client';

import { EMAIL, LOCATION, socialLinks } from '@/data/site';
import { ContactForm } from './ContactForm';
import { DecodeText } from './DecodeText';
import { SectionHeading } from './SectionHeading';

const externalLinks = socialLinks.filter((social) => social.label !== 'Email');

export function Contact() {
  return (
    <section id="contact" className="section bg-background">
      <div className="container-custom">
        <SectionHeading index="0x05" label="Contact" title="Get In Touch" />

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <p className="text-lg md:text-2xl leading-snug tracking-tight text-secondary">
              Email me about a project or a role, or use the form.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="block font-mono text-xs sm:text-sm text-primary break-all hover:text-accent transition-colors"
            >
              {EMAIL}
            </a>

            <p className="label text-secondary">{LOCATION}</p>

            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {externalLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-primary hover:text-accent transition-colors"
                  >
                    <DecodeText text={social.label} trigger="hover" duration={350} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
