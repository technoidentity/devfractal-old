import { boolean, readonly, string, type, TypeOf } from 'io-ts'
import { rest as httpAPI } from './rest'

// tslint:disable typedef

const axiosMock = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  patch: jest.fn(),
  delete: jest.fn(),
}

jest.mock('axios', () => {
  return {
    create: () => axiosMock,
  }
})

describe('rest', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  const Task = readonly(type({ id: string, title: string, done: boolean }))
  const taskAPI = httpAPI(Task, 'id', {
    resource: 'tasks',
    baseURL: 'https://test',
  })

  const Todo = readonly(type({ id: string, title: string, done: boolean }))
  const todoAPI = httpAPI(Todo, 'id', {
    resource: 'todos',
    baseURL: 'https://test2',
  })

  test('get', async () => {
    axiosMock.get.mockResolvedValue({
      data: { id: '1', title: 'todo', done: false },
    })

    const actual: TypeOf<typeof Task> = await taskAPI.get({
      path: '1',
      query: 'foo=123',
    })

    expect(actual).toEqual({ id: '1', title: 'todo', done: false })
  })

  test('get with incorrect value', async () => {
    axiosMock.get.mockResolvedValue({
      data: { id: '1', description: 'todo', done: 'false' },
    })

    try {
      await todoAPI.get({ resource: 'tasks', path: '1', query: 'foo=123' })
    } catch (e) {
      expect(e.message).toMatchInlineSnapshot(`
                                                                "Invalid value undefined supplied to : Readonly<{ id: string, title: string, done: boolean }>/title: string
                                                                Invalid value \\"false\\" supplied to : Readonly<{ id: string, title: string, done: boolean }>/done: boolean"
                                                `)
    }
  })

  test('post', async () => {
    axiosMock.post.mockResolvedValue({
      data: { id: '1', title: 'todo', done: false },
    })

    const actual = await todoAPI.create({ title: 'todo', done: false })

    expect(actual).toEqual({ id: '1', title: 'todo', done: false })
  })

  test('post with incorrect value', async () => {
    axiosMock.post.mockResolvedValue({
      data: { id: '1', description: 'todo', done: 'false' },
    })

    try {
      await todoAPI.create({ title: 'todo', done: false })
    } catch (e) {
      expect(e.message).toMatchInlineSnapshot(`
        "Invalid value undefined supplied to : Readonly<{ id: string, title: string, done: boolean }>/title: string
        Invalid value \\"false\\" supplied to : Readonly<{ id: string, title: string, done: boolean }>/done: boolean"
      `)
    }
  })

  test('put', async () => {
    axiosMock.put.mockResolvedValue({
      data: { id: '1', title: 'todo', done: true },
    })
    const actual = await todoAPI.replace('1', {
      id: '1',
      title: 'todo',
      done: true,
    })

    expect(actual).toEqual({ id: '1', title: 'todo', done: true })
  })

  test('put with incorrect value', async () => {
    axiosMock.put.mockResolvedValue({
      data: { id: '1', description: 'todo', done: 'true' },
    })
    try {
      await todoAPI.replace('1', { id: '1', title: 'todo', done: true })
    } catch (e) {
      expect(e.message).toMatchInlineSnapshot(`
                        "Invalid value undefined supplied to : Readonly<{ id: string, title: string, done: boolean }>/title: string
                        Invalid value \\"true\\" supplied to : Readonly<{ id: string, title: string, done: boolean }>/done: boolean"
                  `)
    }
  })

  test('patch', async () => {
    axiosMock.patch.mockResolvedValue({
      data: { id: '1', title: 'todo', done: true },
    })
    const actual = await todoAPI.update('1', { id: '1', title: 'todo' })
    expect(actual).toEqual({ id: '1', title: 'todo', done: true })
  })

  test('patch with incorrect value', async () => {
    axiosMock.patch.mockResolvedValue({
      data: { id: '1', description: 'todo', done: 'true' },
    })
    try {
      await todoAPI.update('1', { done: 'true' })
    } catch (e) {
      expect(e.message).toMatchInlineSnapshot(
        `"Invalid value \\"true\\" supplied to : Partial<{ id: string, title: string, done: boolean }>/done: boolean"`,
      )
    }
  })

  test('delete', async () => {
    axiosMock.delete.mockResolvedValue(undefined)
    // tslint:disable-next-line: no-void-expression
    const actual: void = await taskAPI.del('1')
    expect(actual).toBeUndefined()
  })
})
