'use client';

import { useRef, useState, type FormEvent } from 'react';
import { sendContactMessage } from '@/services/contact';

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');

    try {
      await sendContactMessage(formRef.current);
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      setStatus('error');
      console.error('EmailJS error:', error);
    }
  };

  return { formRef, status, handleSubmit };
}
