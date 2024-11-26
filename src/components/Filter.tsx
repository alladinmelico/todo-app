import React, { useState } from 'react'
import { TaskStatus } from '../types'

interface FilterProps {
  onFilterChange: (status: TaskStatus | 'All') => void
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [status, setStatus] = useState<'All' | TaskStatus>('All')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as TaskStatus | 'All'
    setStatus(newStatus)
    onFilterChange(newStatus)
  }

  return (
    <div className="mr-4">
      <label className="label">
        <span className="label-text">Filter by Status:</span>
      </label>
      <select
        value={status}
        onChange={handleChange}
        className="select select-bordered w-full"
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  )
}

export default Filter
