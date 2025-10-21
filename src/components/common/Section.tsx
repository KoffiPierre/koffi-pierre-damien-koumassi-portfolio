import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export default function Section({ 
  children, 
  className,
  containerSize = 'xl',
  id
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn('py-16 md:py-24 lg:py-32', className)}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}