import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { SimpleTodo } from './SimpleTodo'

test('Simple Todo', () => {
  const component: ReactTestRenderer = renderer.create(<SimpleTodo />)
  expect(component.toJSON()).toMatchSnapshot()
})
