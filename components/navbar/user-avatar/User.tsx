'use client';

import { signOut } from 'next-auth/react';
import { MouseEventHandler } from 'react';

type UserProps = {
  name: string;
};

function User({ name }: UserProps) {
  return (
    <div className='flex items-center justify-between gap-x-2'>
      <div className='flex size-10 items-center justify-center rounded-full border'>
        <span className='text-2xl font-bold'>{name.at(0)}</span>
      </div>
      <button
        className='rounded-md bg-black px-3 py-2 text-white hover:bg-gray-800'
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        خروج
      </button>
    </div>
  );
}

export default User;
