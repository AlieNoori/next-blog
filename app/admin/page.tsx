import AdminPostList from '@/components/admin/AdminPostList';
import NewPostForm from '@/components/admin/NewPostForm';
import Container from '@/components/ui/Container';
import { authOptions } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ادمین',
};

async function Admin() {
  const session = await getServerSession(authOptions);

  if (!session || session?.user.userRole !== 'ADMIN')
    return (
      <div className='items-cneter flex h-96 flex-col justify-center'>
        دسترسی غیر مجاز
      </div>
    );

  return (
    <div>
      <Container className='mt-8 flex flex-col gap-x-10 md:flex-row'>
        <div className='w-full p-2'>
          <NewPostForm />
        </div>
        <div className='my-5 block border-b shadow-md md:hidden'></div>
        <div className='w-full p-2 md:h-96 md:overflow-y-auto'>
          <AdminPostList />
        </div>
      </Container>
    </div>
  );
}

export default Admin;
