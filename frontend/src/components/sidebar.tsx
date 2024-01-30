import { Project } from '@/utils/types';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='bg-gray-800 h-screen basis-1/6 shrink-0 grow-0 text-white'>
      <div className='p-4'>
        <h1 className='text-2xl font-bold mb-4'>Taskflow</h1>
        <ul>
          <li className='py-2 px-1 hover:bg-gray-700 transition-all'>
            <Link href='/dashboard/home' className='block'>
              Home
            </Link>
          </li>
          <li className='py-2 px-1 hover:bg-gray-700 transition-all'>
            <Link href='/dashboard/feed' className='block'>
              Feed
            </Link>
          </li>
          <li className='py-2 px-1 hover:bg-gray-700 transition-all'>
            <Link href='/dashboard/calendar' className='block'>
              Calendar
            </Link>
          </li>
          <li className='py-2 px-1 hover:bg-gray-700 transition-all'>
            <Link href='/dashboard/projects' className='block'>
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Sidebar;
