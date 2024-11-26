import '@testing-library/jest-dom'
import { useTaskStore } from './store/useTaskStore'

jest.mock('./store/useTaskStore', () => {
  const actual = jest.requireActual('./store/useTaskStore')
  return {
    __esModule: true,
    ...actual,
    useTaskStore: jest.fn(),
  }
})

const mockDeleteTask = jest.fn()
const mockSetEditingTask = jest.fn()
const mockAddTask = jest.fn()
const mockUpdateTask = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()

  ;(useTaskStore as unknown as jest.Mock).mockReturnValue({
    tasks: [],
    editingTask: null,
    addTask: mockAddTask,
    updateTask: mockUpdateTask,
    deleteTask: mockDeleteTask,
    setEditingTask: mockSetEditingTask,
    setState: jest.fn((state) => Object.assign({}, state)),
  })
})
