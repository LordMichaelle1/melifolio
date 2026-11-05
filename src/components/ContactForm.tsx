'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Loader2, Send } from 'lucide-react';
import { useContactForm, type FormStatus } from '@/hooks/useContactForm';
import { cn } from '@/lib/utils';
import { DecodeText } from './DecodeText';

const fieldClasses = cn(
  'w-full bg-transparent border-b border-line py-3 text-primary',
  'placeholder:text-secondary focus:outline-none focus:border-accent transition-colors duration-300'
);

const feedback: Partial<Record<FormStatus, { icon: typeof CheckCircle; text: string; className: string }>> = {
  success: { icon: CheckCircle, text: "Sent. I'll reply by email.", className: 'text-primary' },
  error: { icon: AlertCircle, text: "That didn't send. Try again, or email me directly.", className: 'text-accent' },
};

export function ContactForm() {
  const { formRef, status, handleSubmit } = useContactForm();
  const message = feedback[status];
  const isLoading = status === 'loading';

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="from_name" className="label block text-secondary">Name</label>
          <input id="from_name" name="from_name" type="text" required autoComplete="name" className={fieldClasses} />
        </div>
        <div>
          <label htmlFor="reply_to" className="label block text-secondary">Email</label>
          <input id="reply_to" name="reply_to" type="email" required autoComplete="email" className={fieldClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label block text-secondary">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you working on?"
          className={cn(fieldClasses, 'resize-none')}
        />
      </div>

      <AnimatePresence mode="wait">
        {message && (
          <motion.p
            key={status}
            role="status"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={cn('flex items-center gap-2 text-sm', message.className)}
          >
            <message.icon className="w-4 h-4 shrink-0" />
            {message.text}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={isLoading}
        className={cn(
          'wipe btn-press label inline-flex items-center justify-center gap-3 w-full sm:w-auto',
          'border border-primary bg-primary text-background px-8 py-4',
          'disabled:opacity-60 disabled:cursor-not-allowed'
        )}
      >
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        <DecodeText text={isLoading ? 'Sending' : 'Send Message'} trigger="hover" duration={400} />
      </button>
    </form>
  );
}
