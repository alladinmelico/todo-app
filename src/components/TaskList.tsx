import React from 'react'
import TaskItem from './TaskItem'
import { FixedSizeList as List } from 'react-window'
import { Task } from '../types'

interface TaskListProps {
  tasks: Task[]
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>
  }

  const Row = ({
    index,
    style,
  }: {
    index: number
    style: React.CSSProperties
  }) => (
    <div style={style}>
      <TaskItem task={tasks[index]} />
    </div>
  )

  return (
    <List height={600} itemCount={tasks.length} itemSize={200} width="100%">
      {Row}
    </List>
  )
}

export default TaskList
