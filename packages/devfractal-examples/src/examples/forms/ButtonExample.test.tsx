import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Button } from './ButtonExample'

test('Button Example', () => {
  const component: ReactTestRenderer = renderer.create(<Button />)
  expect(component.toJSON()).toMatchSnapshot()
})
