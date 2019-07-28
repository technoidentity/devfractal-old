import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Counter } from './Counter'

test('Counter', () => {
  const component: ReactTestRenderer = renderer.create(<Counter />)
  expect(component.toJSON()).toMatchSnapshot()
})
