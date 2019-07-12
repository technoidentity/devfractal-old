import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Nesting } from './NestingExample'

test('Nesting Example of columns', () => {
  const component: ReactTestRenderer = renderer.create(<Nesting />)
  expect(component.toJSON()).toMatchSnapshot()
})
