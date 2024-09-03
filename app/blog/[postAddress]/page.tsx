import Container from '@/components/ui/Container';
import prismadb from '@/libs/prismadb';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
  params: { postAddress: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const postAddress = decodeURI(params.postAddress);

  const post = await prismadb.post.findUnique({
    where: { address: postAddress },
  });

  return {
    title: post?.title,
  };
}

async function SinglePost({ params }: Props) {
  const post = await prismadb.post.findUnique({
    where: { address: decodeURI(params.postAddress) },
  });

  if (!post) notFound();

  return (
    <div>
      <Container>
        <div className='flex flex-col gap-y-10'>
          <div className='relative h-60 w-full overflow-hidden rounded-b-md shadow-lg md:h-96'>
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes='100vw'
              className='object-cover object-top'
              quality={100}
            />
          </div>
          <div className='space-y-4'>
            <h1 className='text-3xl font-bold'>{post.title}</h1>
            <p className='text-justify text-lg'>{post.body}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SinglePost;
