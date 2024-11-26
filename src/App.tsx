import React, { useState, useMemo } from 'react'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'
import Filter from './components/Filter'
import SearchBar from './components/SearchBar'
import ThemeToggle from './components/ThemeToggle'
import { TaskStatus } from './types'
import { useTaskStore } from './store/useTaskStore'

const App: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks)

  const [filterStatus, setFilterStatus] = useState<TaskStatus | 'All'>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesStatus =
        filterStatus === 'All' || task.status === filterStatus
      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      return matchesStatus && matchesSearch
    })
  }, [tasks, filterStatus, searchQuery])

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">To-Do Application</h1>
        <ThemeToggle />
      </div>
      <AddTaskForm />
      <div className="flex mb-6 space-x-4">
        <Filter onFilterChange={(status) => setFilterStatus(status)} />
        <SearchBar onSearch={(query) => setSearchQuery(query)} />
      </div>
      <TaskList tasks={filteredTasks} />
    </div>
  )
}

export default App
