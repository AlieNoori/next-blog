'use client';

import { CheckUserEmail } from '@/actions/auth-action';
import SubmitButton from '../ui/SubmitButton';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

function LoginForm() {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  return (
    <form
      action={async formData => {
        const email = formData.get('email');
        const password = formData.get('password');
        setEmailError('');
        setPasswordError('');

        const res = await CheckUserEmail(formData);

        if (!res?.success && res?.message === 'user not found')
          setEmailError('کاربر با این ایمیل وجود ندارد');

        if (!res?.success && res?.message === 'password is wrong') {
          setPasswordError('رمز عبوراشتباه است');
        }

        if (res?.success) {
          signIn('credentials', {
            email,
            password,
            callbackUrl: '/',
          });
        }
      }}
      className='mx-auto flex w-96 flex-col gap-y-5'
    >
      <h2 className='text-3xl font-bold'>ورود</h2>
      <div className='flex flex-col gap-y-2'>
        <input
          type='email'
          placeholder='ایمیل'
          className={`rounded-md border p-2 shadow-sm ${emailError ? 'border-red-700 shadow-red-400' : ''}`}
          name='email'
        />
        <p className='text-red-500'>{emailError}</p>
      </div>
      <div className='flex flex-col gap-y-2'>
        <input
          type='password'
          placeholder='رمز عبور'
          className={`rounded-md border p-2 shadow-sm ${passwordError ? 'border-red-700' : ''}`}
          name='password'
        />
        <p className='text-red-500'>{passwordError}</p>
      </div>
      <SubmitButton />
    </form>
  );
}

export default LoginForm;
