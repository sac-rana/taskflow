'use client';

import { useState } from 'react';
import Button from '@/components/button';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

const SignupPage = () => {
  const handleSignup = async (formData: FormData) => {
    try {
      const res = await fetch('/api/users/registration/', {
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
        throw new Error(res.statusText);
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='flex-grow flex flex-col'>
        <Header />
        <main className='my-12 flex justify-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl font-bold mb-8'>Sign Up</h1>
            <form action={handleSignup} className='flex flex-col items-center'>
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
                Sign Up
              </Button>
            </form>
            <p className='flex flex-row-reverse w-full mt-3'>
              <Link href='/login'>
                Already have Account?<span aria-hidden='true'>&rarr;</span>
              </Link>
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;
