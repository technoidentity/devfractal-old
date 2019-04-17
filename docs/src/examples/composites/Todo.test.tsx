import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Todo } from './Todo'

test('Todo Example', () => {
  const component: ReactTestRenderer = renderer.create(<Todo />)
  expect(component.toJSON()).toMatchSnapshot()
})
