import { create } from 'zustand'
import { Task } from '../types'

interface TaskState {
  tasks: Task[]
  editingTask: Task | null
  addTask: (task: Task) => void
  updateTask: (updatedTask: Task) => void
  deleteTask: (id: string) => void
  setEditingTask: (task: Task | null) => void
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  editingTask: null,
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  updateTask: (updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      ),
      editingTask: null,
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  setEditingTask: (task) => set({ editingTask: task }),
}))
