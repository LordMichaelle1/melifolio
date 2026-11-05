import { type AnchorHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { DecodeText } from './DecodeText';

interface CipherLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon?: ReactNode;
  variant?: 'solid' | 'outline';
}

const variants = {
  solid: 'bg-primary text-background border-primary',
  outline: 'text-primary border-line',
};

export function CipherLink({ label, icon, variant = 'outline', className, ...props }: CipherLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        'wipe btn-press label inline-flex items-center justify-center gap-3 border px-5 py-3.5 whitespace-nowrap',
        variants[variant],
        className
      )}
    >
      {icon}
      <DecodeText text={label} trigger="hover" duration={450} />
    </a>
  );
}
