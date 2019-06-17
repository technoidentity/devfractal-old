import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Box } from './BoxExample'

test('Box Example', () => {
  const component: ReactTestRenderer = renderer.create(<Box />)
  expect(component.toJSON()).toMatchSnapshot()
})
