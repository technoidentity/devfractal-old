import { fireEvent, render, waitForElement } from '@testing-library/react'
import React from 'react'
import { Get } from './Get'

test('get success', async () => {
  // tslint:disable-next-line:typedef
  const asyncFn = jest.fn().mockResolvedValue('tasks')
  const { getByText, container } = render(
    <Get asyncFn={asyncFn} deps={undefined}>
      {data => <div>{data}</div>}
    </Get>,
  )

  expect(container.firstChild).toMatchInlineSnapshot(`
                                        <h1
                                          class="is-text is-size-1 is-info"
                                        >
                                          Loading....
                                        </h1>
                    `)
  await waitForElement(() => getByText('tasks'))
  expect(container.firstChild).toMatchInlineSnapshot(`
                                            <div>
                                              tasks
                                            </div>
                      `)
})

test('get failure', async () => {
  // tslint:disable-next-line:typedef
  const asyncFn = jest.fn().mockRejectedValue(new Error('error tasks'))
  const { getByText, container } = render(
    <Get asyncFn={asyncFn} deps={undefined}>
      {data => <div>{data}</div>}
    </Get>,
  )

  expect(container.firstChild).toMatchInlineSnapshot(`
                                        <h1
                                          class="is-text is-size-1 is-info"
                                        >
                                          Loading....
                                        </h1>
                    `)
  await waitForElement(() => getByText('error tasks'))
  expect(container.firstChild).toMatchInlineSnapshot(`
                                            <h1
                                              class="is-text is-size-1 is-danger"
                                            >
                                              error tasks
                                            </h1>
                      `)
})

test('get success with refresh', async () => {
  // tslint:disable-next-line:typedef
  const asyncFn = jest
    .fn()
    .mockResolvedValueOnce('tasks')
    .mockResolvedValueOnce('tasks refresh')
  const { getByText, container } = render(
    <Get asyncFn={asyncFn} deps={undefined}>
      {(data, fetchAgain) => (
        <div>
          <span>{data}</span>
          <button onClick={fetchAgain}>refresh</button>
        </div>
      )}
    </Get>,
  )

  expect(container.firstChild).toMatchInlineSnapshot(`
                                        <h1
                                          class="is-text is-size-1 is-info"
                                        >
                                          Loading....
                                        </h1>
                    `)
  await waitForElement(() => getByText('tasks'))
  expect(container.firstChild).toMatchInlineSnapshot(`
                                <div>
                                  <span>
                                    tasks
                                  </span>
                                  <button>
                                    refresh
                                  </button>
                                </div>
                `)

  fireEvent.click(getByText('refresh'))

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div>
      <span>
        tasks
      </span>
      <button>
        refresh
      </button>
    </div>
  `)

  await waitForElement(() => getByText('tasks refresh'))
  expect(container.firstChild).toMatchInlineSnapshot(`
                        <div>
                          <span>
                            tasks refresh
                          </span>
                          <button>
                            refresh
                          </button>
                        </div>
            `)
})

test('get success with deps', async () => {
  // tslint:disable-next-line:typedef
  const asyncFn = jest
    .fn()
    .mockResolvedValueOnce('tasks')
    .mockResolvedValueOnce('tasks deps')
  const { getByText, container, rerender } = render(
    <Get asyncFn={asyncFn} deps={undefined}>
      {data => <div>{data}</div>}
    </Get>,
  )

  expect(container.firstChild).toMatchInlineSnapshot(`
                                        <h1
                                          class="is-text is-size-1 is-info"
                                        >
                                          Loading....
                                        </h1>
                    `)
  await waitForElement(() => getByText('tasks'))
  expect(container.firstChild).toMatchInlineSnapshot(`
            <div>
              tasks
            </div>
      `)

  rerender(
    <Get asyncFn={asyncFn} deps={[1]}>
      {data => <div>{data}</div>}
    </Get>,
  )

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div>
      tasks
    </div>
  `)

  await waitForElement(() => getByText('tasks deps'))
  expect(container.firstChild).toMatchInlineSnapshot(`
        <div>
          tasks deps
        </div>
    `)
})
