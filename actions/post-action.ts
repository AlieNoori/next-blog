'use server';

import prismadb from '@/libs/prismadb';
import { revalidatePath } from 'next/cache';

export async function CreatePostAction(formData: FormData) {
  try {
    const { title, body, image } = Object.fromEntries(formData.entries());
    const address = String(title).split(' ').join('-');
    const post = await prismadb.post.create({
      data: {
        title: title as string,
        body: body as string,
        image: image as string,
        address,
      },
    });

    if (!post) return { success: false };

    revalidatePath('/admin');

    return { success: true };
  } catch (error) {
    console.error('CreatePostAction', error);
  }
}

export async function DeletePostAction(id: number) {
  try {
    const deletedPost = await prismadb.post.delete({
      where: { id },
    });

    if (!deletedPost) throw new Error('Faild to deleting the post');
    revalidatePath('/admin');
  } catch (error) {
    console.error('DeletePostAction', error);
  }
}
