import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Color } from './ColorHelpersExample'

test('Color Helpers Example', () => {
  const component: ReactTestRenderer = renderer.create(<Color />)
  expect(component.toJSON()).toMatchSnapshot()
})
