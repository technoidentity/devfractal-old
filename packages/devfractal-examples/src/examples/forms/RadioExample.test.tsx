import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Radio } from './RadioExample'

test('Radio Example', () => {
  const component: ReactTestRenderer = renderer.create(<Radio />)
  expect(component.toJSON()).toMatchSnapshot()
})
