import { cn } from '@/libs/utils';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  isFullHeight?: boolean;
};

function Container({ children, className, isFullHeight }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto max-w-7xl px-5 md:px-3', className, {
        'h-full': isFullHeight,
      })}
    >
      {children}
    </div>
  );
}

export default Container;
