'use client';

import { useState } from 'react';
import Button from '@/components/button';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {};

  return (
    <main className='my-12 flex justify-center'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold mb-8'>Login</h1>
        <form className='flex flex-col items-center'>
          <input
            type='email'
            placeholder='Email'
            className='border border-gray-400 rounded-lg px-4 py-2 mb-4 w-80'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            className='border border-gray-400 rounded-lg px-4 py-2 mb-4 w-80'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} wide>
            Login
          </Button>
        </form>
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
