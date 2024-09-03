'use client';

import { CreateUserAction } from '@/actions/auth-action';
import SubmitButton from '../ui/SubmitButton';
import { signIn } from 'next-auth/react';

type RegisterFormProps = {};

function RegisterForm(props: RegisterFormProps) {
  return (
    <form
      action={async formData => {
        const email = formData.get('email');
        const password = formData.get('password');

        const res = await CreateUserAction(formData);

        if (res?.success) {
          await signIn('credentials', {
            callbackUrl: '/',
            email,
            password,
          });
        }
      }}
      className='mx-auto flex w-96 flex-col gap-y-5'
    >
      <h2 className='text-3xl font-bold'>ثبت نام</h2>
      <input
        type='text'
        placeholder='نام'
        className='rounded-md border p-2 shadow-sm'
        name='name'
      />
      <input
        type='email'
        placeholder='ایمیل'
        className='rounded-md border p-2 shadow-sm'
        name='email'
      />
      <input
        type='password'
        placeholder='رمز عبور'
        className='rounded-md border p-2 shadow-sm'
        name='password'
      />
      <SubmitButton />
    </form>
  );
}

export default RegisterForm;
