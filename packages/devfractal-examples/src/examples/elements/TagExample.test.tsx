import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Tag } from './TagExample'

test('Tags Example', () => {
  const component: ReactTestRenderer = renderer.create(<Tag />)
  expect(component.toJSON()).toMatchSnapshot()
})
