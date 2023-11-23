import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex items-center flex-col flex-grow'>
      <section className='px-6 pt-20 pb-20 max-w-5xl flex flex-col items-center text-center'>
        <h1 className='text-5xl sm:text-7xl flex mb-8'>
          Managing your work is now easier then ever
        </h1>
        <p className='text-lg mx-5 sm:mx-10'>
          Manage you personal life or professional work with this Project
          Management Tool.
          <br /> Monitor your progress and performance with ease.
        </p>
        <div className='flex flex-col sm:flex-row mt-12'>
          <Link
            href='/signup'
            className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 sm:mb-0 sm:mr-4'
          >
            Get Started
          </Link>
          <Link
            href='/features'
            className='bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded'
          >
            Learn More
          </Link>
        </div>
      </section>
      {/* <section className='bg-blue-500 w-full'>
        <p>Helllo whatsapp</p>
      </section> */}
    </main>
  );
}
