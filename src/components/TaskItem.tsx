import React from 'react'
import { Task } from '../types'
import { useTaskStore } from '../store/useTaskStore'
import { format } from 'date-fns'

interface TaskItemProps {
  task: Task
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const deleteTask = useTaskStore((state) => state.deleteTask)
  const setEditingTask = useTaskStore((state) => state.setEditingTask)

  const isOverdue = task.dueDate < new Date() && task.status !== 'Completed'

  return (
    <div
      className={`card shadow-md mb-4 m-4 ${
        isOverdue ? 'bg-red-100' : 'bg-base-100'
      }`}
    >
      <div className="card-body">
        <div className="flex justify-between">
          <h3 className="card-title">{task.title}</h3>
          <div className="badge">{task.status}</div>
        </div>
        <p>{task.description}</p>
        <p className="text-sm text-gray-600">
          Due Date: {format(task.dueDate, 'yyyy-MM-dd')}
          {isOverdue && <span className="text-red-600"> (Overdue)</span>}
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => setEditingTask(task)}
            className="btn btn-outline btn-primary mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="btn btn-outline btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(TaskItem)
