'use client';

import { useRef } from 'react';
import SubmitButton from '../ui/SubmitButton';
import { CreatePostAction } from '@/actions/post-action';

function NewPostForm() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      action={async formData => {
        formRef.current?.reset();

        await CreatePostAction(formData);
      }}
      className='space-y-6'
      ref={formRef}
    >
      <div className='flex flex-col gap-y-1'>
        <label>عنوان</label>
        <input
          type='text'
          className='rounded-md border p-2 shadow-sm'
          placeholder='عنوان پست '
          name='title'
        />
      </div>
      <div className='flex flex-col gap-y-1'>
        <label>توضیحات</label>
        <textarea
          className='rounded-md border p-2 shadow-sm'
          rows={5}
          placeholder='شرح پست'
          name='body'
        />
      </div>
      <div className='flex flex-col gap-y-1'>
        <label>تصویر‌</label>
        <input
          type='text'
          className='rounded-md border p-2 shadow-sm'
          placeholder='آدرس تصویر'
          name='image'
        />
      </div>
      <SubmitButton />
    </form>
  );
}

export default NewPostForm;
