import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { SimpleAddTodo } from './AddTodo'

test('AddTodo', () => {
  const component: ReactTestRenderer = renderer.create(<SimpleAddTodo />)
  expect(component.toJSON()).toMatchSnapshot()
})
