'use client';

import Button from '@/components/button';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [loginError, setLoginError] = useState('');
  const router = useRouter();
  const handleLogin = async (formData: FormData) => {
    try {
      const res = await fetch('/api/users/login/', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.get('email'),
          password: formData.get('password'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        if (res.status >= 400 && res.status < 500)
          throw new Error('User with this email/password does not exist.');
        throw new Error(res.statusText);
      }
      router.push('/');
    } catch (error) {
      setLoginError((error as Error).message);
    }
  };

  return (
    <main className='my-12 flex justify-center'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold mb-8'>Login</h1>
        <form action={handleLogin} className='flex flex-col items-center'>
          <input
            name='email'
            type='email'
            placeholder='Email'
            className='border border-gray-400 rounded-lg px-4 py-2 mb-4 w-80'
          />
          <input
            name='password'
            type='password'
            placeholder='Password'
            className='border border-gray-400 rounded-lg px-4 py-2 mb-4 w-80'
          />
          <Button wide type='submit'>
            Login
          </Button>
        </form>
        <p className='text-red-800 text-sm w-full p-2'>{loginError}</p>
        <p className='flex flex-row-reverse w-full mt-3'>
          <Link href='/signup'>
            Create Account<span aria-hidden='true'>&rarr;</span>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
