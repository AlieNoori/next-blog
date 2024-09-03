import RegisterForm from '@/components/auth/RegisterForm';
import Container from '@/components/ui/Container';
import { authOptions } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ثبت نام',
};

async function Register() {
  const session = await getServerSession(authOptions);

  if (session?.user.userId) redirect('/');

  return (
    <div className='mt-20'>
      <Container>
        <RegisterForm />
        <div className='mt-8'>
          <Link href='/login' className='hover:text-blue-600'>
            <p className='text-center'>
              ثبت نام کرده‌اید؟ برای ورود کلیک کنید.
            </p>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Register;
