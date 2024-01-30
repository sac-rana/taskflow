'use client';
import Button from '@/components/button';
import { useProject, useTasks } from '@/utils/hooks';
import { Dialog } from '@headlessui/react';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

export default function Project({ params }: { params: { id: string } }) {
  const project = useProject(params.id);
  const tasks = useTasks(params.id);
  let [isOpen, setIsOpen] = useState(false);
  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const title = formData.get('title'),
        description = formData.get('description');
      const res = await fetch(`/api/projects/${params.id}/tasks/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      if (!res.ok && res.status >= 500) {
        if () throw new Error('Server Error');
        if (res.status >= 400) console.log(await res.json());
      }
    },
  });
  const createTask = async (formData: FormData) => {
    const title = formData.get('title'),
      description = formData.get('description');
    const res = await fetch(`/api/projects/${params.id}/tasks/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    if (!res.ok) console.error(await res.text());
  };
  return (
    project && (
      <div className='p-4'>
        <div className='flex justify-between'>
          <div className='basis-7/12'>
            <h1 className='text-xl mb-3'>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <div className='flex items-end'>
            <Button onClick={() => setIsOpen(true)}>+ New Task</Button>
          </div>
        </div>
        {tasks ? (
          <div>
            <table>
              <tbody>
                {tasks.map(task => (
                  <tr>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className='text-center'>No tasks yet</div>
        )}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className='relative z-50'
        >
          <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
          <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
            <Dialog.Panel>
              <Dialog.Title>Create New Task</Dialog.Title>
              <CreateTaskForm
                onSubmit={async formData => {
                  await createTask(formData);
                  setIsOpen(false);
                }}
              />
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    )
  );
}

const CreateTaskForm = ({
  onSubmit,
}: {
  onSubmit: (formData: FormData) => void;
}) => {
  return (
    <form
      action={onSubmit}
      className='max-w-md mx-auto p-20 bg-white rounded-md shadow-md'
    >
      <label className='block mb-2 text-sm font-bold text-gray-600'>
        Title:
        <input
          className='w-full px-3 py-2 mt-1 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
          type='text'
          required
          name='title'
        />
      </label>

      <label className='block mb-2 text-sm font-bold text-gray-600'>
        Description:
        <textarea
          className='w-full px-3 py-2 mt-1 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
          required
          rows={4}
          name='description'
        ></textarea>
      </label>

      <label className='block mb-2 text-sm font-bold text-gray-600'>
        Date:
        <input
          className='w-full px-3 py-2 mt-1 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
          type='date'
        />
      </label>

      <button
        className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
        type='submit'
      >
        Create Task
      </button>
    </form>
  );
};
