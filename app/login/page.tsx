import LoginForm from '@/components/auth/LoginForm';
import Container from '@/components/ui/Container';
import { authOptions } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ورود',
};

async function Login() {
  const session = await getServerSession(authOptions);

  if (session?.user.userId) redirect('/');

  return (
    <div className='mt-20'>
      <Container>
        <LoginForm />
        <div className='mt-8'>
          <Link href='/register' className='hover:text-blue-600'>
            <p className='text-center'>برای عضویت کلیک کنید</p>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Login;
