import { StoreApi } from 'zustand'

type StateCreator<T> = (
  set: StoreApi<T>['setState'],
  get: StoreApi<T>['getState'],
  api: StoreApi<T>
) => T

export const createMockStore = <T>(createState: StateCreator<T>) => {
  const store = createState(jest.fn(), jest.fn(), {
    getState: jest.fn(),
    setState: jest.fn(),
    subscribe: jest.fn(),
    destroy: jest.fn(),
  } as unknown as StoreApi<T>)

  return {
    store,
    ...jest.requireMock('zustand').default,
  }
}
