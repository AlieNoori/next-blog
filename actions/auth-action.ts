'use server';

import prismadb from '@/libs/prismadb';
import { compare, hash } from 'bcrypt';

export async function CreateUserAction(formData: FormData) {
  try {
    const { name, email, password } = Object.fromEntries(formData);

    const hashedPassword = await hash(password as string, 12);

    const user = await prismadb.user.create({
      data: {
        name: name as string,
        email: email as string,
        hashedPassword,
      },
    });

    if (!user) throw new Error('creating user failed');

    return { success: true };
  } catch (error) {
    console.error('CreateUserAction', error);
  }
}

export async function CheckUserEmail(formData: FormData) {
  try {
    const { email, password } = Object.fromEntries(formData);

    const user = await prismadb.user.findUnique({
      where: { email: email as string },
    });
    if (!user) return { success: false, message: 'user not found' };

    const isPasswordMatchs = await compare(
      password as string,
      user.hashedPassword,
    );
    if (!isPasswordMatchs)
      return { success: false, message: 'password is wrong' };

    if (user && isPasswordMatchs) return { success: true };
  } catch (error) {
    console.error('CheckUserEmail', error);
  }
}
