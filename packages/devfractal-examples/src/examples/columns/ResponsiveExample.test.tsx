import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Responsive } from './ResponsiveExample'

test('Responsive Example of columns', () => {
  const component: ReactTestRenderer = renderer.create(<Responsive />)
  expect(component.toJSON()).toMatchSnapshot()
})
