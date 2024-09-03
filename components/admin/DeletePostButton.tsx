'use client';

import { DeletePostAction } from '@/actions/post-action';
import { Trash } from 'lucide-react';

type DeletePostButtonProps = {
  id: number;
};

function DeletePostButton({ id }: DeletePostButtonProps) {
  return (
    <button
      className='rounded-md bg-gray-100 p-4 text-rose-500 shadow-md hover:bg-gray-200'
      onClick={() => DeletePostAction(id)}
    >
      <Trash className='size-5' />
    </button>
  );
}

export default DeletePostButton;
