import React, { useState, useEffect } from 'react'
import { useTaskStore } from '../store/useTaskStore'
import { Task, TaskStatus } from '../types'

const AddTaskForm: React.FC = () => {
  const addTask = useTaskStore((state) => state.addTask)
  const updateTask = useTaskStore((state) => state.updateTask)
  const editingTask = useTaskStore((state) => state.editingTask)
  const setEditingTask = useTaskStore((state) => state.setEditingTask)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [status, setStatus] = useState<TaskStatus>('Pending')

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || '')
      setDescription(editingTask.description || '')
      setDueDate(editingTask.dueDate?.toISOString().split('T')[0] || '')
      setStatus(editingTask.status || 'Pending')
    } else {
      setTitle('')
      setDescription('')
      setDueDate('')
      setStatus('Pending')
    }
  }, [editingTask])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !description || !dueDate) {
      alert('Please fill in all fields.')
      return
    }
    const taskData: Task = {
      id: editingTask ? editingTask.id : Date.now().toString(),
      title,
      description,
      status,
      dueDate: new Date(dueDate),
    }

    if (editingTask) {
      updateTask(taskData)
    } else {
      addTask(taskData)
    }

    setTitle('')
    setDescription('')
    setDueDate('')
    setStatus('Pending')
    setEditingTask(null)
  }

  const handleCancel = () => {
    console.log('TEST')
    setTitle('')
    setDescription('')
    setDueDate('')
    setStatus('Pending')
    setEditingTask(null)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        {editingTask ? 'Edit Task' : 'Add New Task'}
      </h2>
      <div className="mb-4">
        <label htmlFor="title" className="label">
          <span className="label-text">Title:</span>
        </label>
        <input
          id="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="label">
          <span className="label-text">Description:</span>
        </label>
        <textarea
          id="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="textarea textarea-bordered w-full"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="label">
          <span className="label-text">Status:</span>
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
          className="select select-bordered w-full"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="dueDate" className="label">
          <span className="label-text">Due Date:</span>
        </label>
        <input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="flex space-x-2">
        <button type="submit" className="btn btn-primary">
          {editingTask ? 'Update Task' : 'Add New Task'}
        </button>
        {editingTask && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}

export default AddTaskForm
