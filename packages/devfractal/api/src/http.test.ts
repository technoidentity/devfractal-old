import { boolean, readonly, string, type, TypeOf } from 'technoidentity-spec'
import { buildUrl, http as httpAPI } from './http'

// tslint:disable-next-line:typedef
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

beforeEach(() => {
  jest.resetAllMocks()
})

test('buildUrl with resource', () => {
  expect(buildUrl({ resource: 'tasks' })).toEqual('/tasks')
})

test('buildUrl with resource and path', () => {
  expect(buildUrl({ resource: 'tasks', path: '1' })).toEqual('/tasks/1')
  expect(buildUrl({ resource: 'tasks', path: ['1', 'edit'] })).toEqual(
    '/tasks/1/edit',
  )
})

test('buildUrl with resource, path and query', () => {
  expect(buildUrl({ resource: 'tasks', path: '1', query: 'foo=123' })).toEqual(
    '/tasks/1?foo=123',
  )
  expect(
    buildUrl({ resource: 'tasks', path: '1', query: { foo: 123 } }),
  ).toEqual('/tasks/1?foo=123')
})

test('buildUrl with empty', () => {
  expect(buildUrl({})).toEqual('')
  expect(buildUrl({ path: '' })).toEqual('')
  expect(buildUrl({ resource: '' })).toEqual('')
  expect(buildUrl({ query: {} })).toEqual('')
})

test('get', async () => {
  axiosMock.get.mockResolvedValue({
    data: { id: '1', title: 'todo', done: false },
  })
  const http: ReturnType<typeof httpAPI> = httpAPI({ baseURL: 'https://test' })
  // tslint:disable-next-line:typedef
  const taskType = readonly(type({ id: string, title: string, done: boolean }))
  const actual: TypeOf<typeof taskType> = await http.get(
    { resource: 'tasks', path: '1', query: 'foo=123' },
    taskType,
  )
  expect(actual).toEqual({ id: '1', title: 'todo', done: false })
})

test('get with incorrect value', async () => {
  axiosMock.get.mockResolvedValue({
    data: { id: '1', description: 'todo', done: 'false' },
  })
  const http: ReturnType<typeof httpAPI> = httpAPI({ baseURL: 'https://test' })
  try {
    await http.get(
      { resource: 'tasks', path: '1', query: 'foo=123' },
      readonly(type({ id: string, title: string, done: boolean })),
    )
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
  const http: ReturnType<typeof httpAPI> = httpAPI({ baseURL: 'https://test' })
  // tslint:disable-next-line:typedef
  const taskType = readonly(type({ id: string, title: string, done: boolean }))
  const actual: TypeOf<typeof taskType> = await http.post(
    { resource: 'tasks' },
    { title: 'todo', done: false },
    taskType,
  )
  expect(actual).toEqual({ id: '1', title: 'todo', done: false })
})

test('post with incorrect value', async () => {
  axiosMock.post.mockResolvedValue({
    data: { id: '1', description: 'todo', done: 'false' },
  })
  const http: ReturnType<typeof httpAPI> = httpAPI({ baseURL: 'https://test' })
  try {
    await http.post(
      { resource: 'tasks' },
      { title: 'todo', done: false },
      readonly(type({ id: string, title: string, done: boolean })),
    )
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
  const http: ReturnType<typeof httpAPI> = httpAPI({ baseURL: 'https://test' })
  // tslint:disable-next-line:typedef
  const taskType = readonly(type({ id: string, title: string, done: boolean }))
  const actual: TypeOf<typeof taskType> = await http.put(
    { resource: 'tasks', path: '1' },
    { title: 'todo', done: true },
    taskType,
  )
  expect(actual).toEqual({ id: '1', title: 'todo', done: true })
})

test('put with incorrect value', async () => {
  axiosMock.put.mockResolvedValue({
    data: { id: '1', description: 'todo', done: 'true' },
  })
  const http: ReturnType<typeof httpAPI> = httpAPI({ baseURL: 'https://test' })
  try {
    await http.put(
      { resource: 'tasks', path: '1' },
      { title: 'todo', done: true },
      readonly(type({ id: string, title: string, done: boolean })),
    )
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
  const http: ReturnType<typeof httpAPI> = httpAPI({ baseURL: 'https://test' })
  // tslint:disable-next-line:typedef
  const taskType = readonly(type({ id: string, title: string, done: boolean }))
  const actual: TypeOf<typeof taskType> = await http.patch(
    { resource: 'tasks', path: '1' },
    { title: 'todo' },
    taskType,
  )
  expect(actual).toEqual({ id: '1', title: 'todo', done: true })
})

test('patch with incorrect value', async () => {
  axiosMock.patch.mockResolvedValue({
    data: { id: '1', description: 'todo', done: 'true' },
  })
  const http: ReturnType<typeof httpAPI> = httpAPI({ baseURL: 'https://test' })
  try {
    await http.patch(
      { resource: 'tasks', path: '1' },
      { done: 'true' },
      readonly(type({ id: string, title: string, done: boolean })),
    )
  } catch (e) {
    expect(e.message).toMatchInlineSnapshot(
      `"Invalid value \\"true\\" supplied to : Partial<{ id: string, title: string, done: boolean }>/done: boolean"`,
    )
  }
})

test('delete', async () => {
  axiosMock.delete.mockResolvedValue(undefined)
  const http: ReturnType<typeof httpAPI> = httpAPI({ baseURL: 'https://test' })
  // tslint:disable-next-line:no-void-expression
  const actual: void = await http.del({ resource: 'tasks', path: '1' })
  expect(actual).toBeUndefined()
})
