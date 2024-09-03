import Container from '@/components/ui/Container';
import prismadb from '@/libs/prismadb';
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'بلاگ ها',
};

const getNFirstWords = (input: string, numWords: number): string =>
  input.split(' ').slice(0, numWords).join(' ');

async function Blog() {
  const posts = await prismadb.post.findMany({
    orderBy: {
      id: 'asc',
    },
  });
  return (
    <div>
      <Container className='sm:pt-8'>
        <div className='grid grid-cols-1 gap-8 divide-y sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {posts.map(post => (
            <Link
              key={post.id}
              href={`/blog/${post.address}`}
              className='sm: flex flex-row-reverse justify-between gap-y-1 rounded-md pt-8 sm:flex-col sm:border sm:pt-0 sm:shadow-lg sm:transition sm:duration-500 sm:ease-out sm:hover:scale-105 sm:hover:shadow-2xl'
            >
              <div className='w048 relative h-44 overflow-hidden rounded-sm sm:w-full sm:rounded-b-none sm:rounded-t-md'>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex flex-col justify-between p-2'>
                <div className='space-y-3'>
                  <h2 className='font-bold'>{post.title}</h2>
                  <p className='text-gray-600'>
                    {getNFirstWords(post.body, 10)}...
                  </p>
                </div>
                <div className='flex items-center justify-center gap-x-2 rounded-full bg-gray-200 px-3 py-2 sm:hidden'>
                  <p className='text-xs'>ادامه مطلب</p>
                  <MoveLeft className='size-4' />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Blog;
