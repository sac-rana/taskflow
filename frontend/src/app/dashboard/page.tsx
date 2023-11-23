'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [projects, setProjects] = useState<any[]>([
    { id: 1, title: 'Learn Javascript', totalTasks: 10, completedTasks: 5 },
    { id: 2, title: 'Learn React', totalTasks: 15, completedTasks: 7 },
    { id: 3, title: 'Learn Next.js', totalTasks: 5, completedTasks: 2 },
  ]);

  // useEffect(() => {
  //   // Fetch projects from API
  //   fetch('/api/projects')
  //     .then<{ name: string }[]>(response => response.json())
  //     .then(data => setProjects(data))
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <main className='bg-gray-100 p-4'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
      {projects.map(project => (
        <div
          key={project.id}
          className='bg-white rounded-lg shadow-md p-4 mb-4 lg:w-1/2'
        >
          <Link href={`/projects/${project.id}`}>
            <h2 className='mb-2 text-xl'>{project.title}</h2>
          </Link>
          <p className='text-gray-500'>
            {project.completedTasks} / {project.totalTasks} tasks completed
          </p>
        </div>
      ))}
    </main>
  );
};

export default Dashboard;
