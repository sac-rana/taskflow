type Project = {
  id: number;
  name: string;
  title: string;
  status: string;
  description: string;
  start_date: string;
  end_date: string;
};

type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
};

export type { Project, Task };
