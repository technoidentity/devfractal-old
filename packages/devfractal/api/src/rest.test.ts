import { boolean, number, string } from 'io-ts'
import { req } from 'technoidentity-utils'
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

  const Todo = req({ id: number, title: string, done: boolean })
  const todoAPI = httpAPI(Todo, 'id', {
    resource: 'todos',
    baseURL: 'https://test2',
  })

  const data = { id: 1, title: 'todo', done: false }

  test('get', async () => {
    axiosMock.get.mockResolvedValue({ data })

    const actual = await todoAPI.get(1, { query: 'foo=123' })

    expect(actual).toEqual(data)
  })

  test('get with incorrect value', async () => {
    axiosMock.get.mockResolvedValue({
      data: { id: 1, description: 'todo', done: 'false' },
    })

    try {
      await todoAPI.get(1, { query: 'foo=123' })
    } catch (e) {
      expect(e.message).toMatchInlineSnapshot(`
        "Invalid value undefined supplied to : Readonly<{ id: number, title: string, done: boolean }>/title: string
        Invalid value \\"false\\" supplied to : Readonly<{ id: number, title: string, done: boolean }>/done: boolean"
      `)
    }
  })

  test('post', async () => {
    axiosMock.post.mockResolvedValue({ data })

    const actual = await todoAPI.create({ title: 'todo', done: false })

    expect(actual).toEqual(data)
  })

  test('post with incorrect value', async () => {
    axiosMock.post.mockResolvedValue({
      data: { id: 1, description: 'todo', done: 'false' },
    })

    try {
      await todoAPI.create({ title: 'todo', done: false })
    } catch (e) {
      expect(e.message).toMatchInlineSnapshot(`
                "Invalid value undefined supplied to : Readonly<{ id: number, title: string, done: boolean }>/title: string
                Invalid value \\"false\\" supplied to : Readonly<{ id: number, title: string, done: boolean }>/done: boolean"
            `)
    }
  })

  test('put', async () => {
    axiosMock.put.mockResolvedValue({ data })
    const actual = await todoAPI.replace(1, {
      id: 1,
      title: 'todo',
      done: true,
    })

    expect(actual).toEqual(data)
  })

  test('put with incorrect value', async () => {
    axiosMock.put.mockResolvedValue({
      data: { id: '1', description: 'todo', done: 'true' },
    })
    try {
      await todoAPI.replace(1, { id: 1, title: 'todo', done: true })
    } catch (e) {
      expect(e.message).toMatchInlineSnapshot(`
                "Invalid value \\"1\\" supplied to : Readonly<{ id: number, title: string, done: boolean }>/id: number
                Invalid value undefined supplied to : Readonly<{ id: number, title: string, done: boolean }>/title: string
                Invalid value \\"true\\" supplied to : Readonly<{ id: number, title: string, done: boolean }>/done: boolean"
            `)
    }
  })

  test('patch', async () => {
    axiosMock.patch.mockResolvedValue({ data })
    const actual = await todoAPI.update(1, { id: 1, title: 'todo' })
    expect(actual).toEqual(data)
  })

  test('patch with incorrect value', async () => {
    axiosMock.patch.mockResolvedValue({
      data: { id: '1', description: 'todo', done: 'true' },
    })
    try {
      await todoAPI.update(1, { done: 'true' } as any)
    } catch (e) {
      expect(e.message).toMatchInlineSnapshot(`
        "Invalid value \\"1\\" supplied to : Partial<{ id: number, title: string, done: boolean }>/id: number
        Invalid value \\"true\\" supplied to : Partial<{ id: number, title: string, done: boolean }>/done: boolean"
      `)
    }
  })

  test('delete', async () => {
    axiosMock.delete.mockResolvedValue(undefined)
    // tslint:disable-next-line: no-void-expression
    const actual: void = await todoAPI.del(1)
    expect(actual).toBeUndefined()
  })
})
