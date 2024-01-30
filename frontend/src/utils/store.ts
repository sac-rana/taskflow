import { create } from 'zustand';
import { Project } from './types';

interface ProjectState {
  currentProject: Project | null;
  setCurrentProject: (project: Project) => void;
}

const useProjectStore = create<ProjectState>()(set => ({
  currentProject: null,
  setCurrentProject: project => set(state => ({ currentProject: project })),
}));
