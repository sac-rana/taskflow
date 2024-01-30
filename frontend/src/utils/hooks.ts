import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { Project, Task } from './types';

const useProjects = () => {
  const { data } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await fetch('/api/projects/');
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      return data as Project[];
    },
  });
  return data;
};

const useProject = (projectId: string) => {
  const { data } = useQuery({
    queryKey: ['project', projectId],
    queryFn: async () => {
      const res = await fetch(`/api/projects/${projectId}`);
      const data = await res.json();
      return data as Project;
    },
  });
  return data;
};

const useTasks = (projectId: string) => {
  const { data } = useQuery({
    queryKey: ['project', projectId, 'tasks'],
    queryFn: async () => {
      const res = await fetch(`/api/projects/${projectId}/tasks`);
      const data = await res.json();
      return data as Task[];
    },
  });
  return data;
};
export { useProject, useProjects, useTasks };
