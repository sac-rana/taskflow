'use client';
import Button from '@/components/button';
import { useProjects } from '@/utils/hooks';
import Link from 'next/link';
import { useState } from 'react';

export default function Projects() {
  const [showCreateProject, setShowCreateProject] = useState(false);
  const projects = useProjects();
  return showCreateProject ? (
    <CreateProject onCancel={() => setShowCreateProject(false)} />
  ) : (
    projects && (
      <div className='flex-grow p-5'>
        <div className='text-right mb-4'>
          <Button onClick={() => setShowCreateProject(true)}>
            + New Project
          </Button>
        </div>
        <div>
          {projects.length > 0 ? (
            <table className='table-fixed border-collapse w-full'>
              <thead>
                <tr>
                  <th className='w-1/12'>ID</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(project => (
                  <tr key={project.id} className='hover:bg-gray-200'>
                    <td>{project.id}</td>
                    <td>
                      <Link href={`/dashboard/projects/${project.id}`}>
                        {project.title}
                      </Link>
                    </td>
                    <td>{project.status}</td>
                    <td>{project.start_date}</td>
                    <td>{project.end_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className='text-center pt-20'>
              No projects yet! Create a new project with the button on top.
            </div>
          )}
        </div>
      </div>
    )
  );
}

const CreateProject = ({ onCancel }: { onCancel: () => void }) => {
  const submitForm = async (formData: FormData) => {
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    const res = await fetch('/api/projects/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: formData.get('title'),
        description: formData.get('description'),
        start_date: formData.get('start_date'),
        end_date: formData.get('end_date') || null,
      }),
    });
    if (res.ok) {
      onCancel();
    } else {
      const data = await res.text();
      console.log(res.statusText);
      console.log(data);
    }
  };
  return (
    <div className='flex-grow p-5'>
      <div className='text-right'>
        <Button onClick={onCancel}>X</Button>
      </div>
      <form action={submitForm}>
        <div className='mb-3'>
          <label className='p-2' htmlFor='title'>
            Title
          </label>
          <input name='title' id='title' />
        </div>
        <div className='mb-3'>
          <label className='p-2' htmlFor='startDate'>
            Start date
          </label>
          <input type='date' name='start_date' id='startDate' />
        </div>
        <div className='mb-3'>
          <label className='p-2' htmlFor='endDate'>
            End date
          </label>
          <input type='date' name='end_date' id='endDate' />
        </div>
        <div className='mb-3'>
          <label className='p-2' htmlFor='description'>
            Description
          </label>
          <textarea
            rows={6}
            cols={100}
            name='description'
            id='description'
          ></textarea>
        </div>
        <Button className='mt-4'>Add Project</Button>
      </form>
    </div>
  );
};
