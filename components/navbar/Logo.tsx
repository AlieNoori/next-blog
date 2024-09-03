import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/libs/utils';
import LogoPng from '@/public/blog.png';

type LogoProps = {
  className?: string;
};

function Logo({ className }: LogoProps) {
  return (
    <div className={cn('relative size-10', className)}>
      <Link href='/'>
        <Image src={LogoPng} alt='blog-logo' fill sizes='100vw' />
      </Link>
    </div>
  );
}

export default Logo;
