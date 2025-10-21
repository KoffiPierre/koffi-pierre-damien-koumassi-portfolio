import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  centered = false,
  className 
}: SectionTitleProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg text-neutral-600 max-w-2xl',
          centered && 'mx-auto' // ✅ AJOUT pour centrer
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        'mt-4 h-1 w-20 bg-gradient-to-r from-primary-600 to-accent-cyan rounded-full',
        centered && 'mx-auto'
      )} />
    </div>
  );
}