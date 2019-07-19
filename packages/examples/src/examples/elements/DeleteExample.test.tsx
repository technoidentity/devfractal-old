import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Delete } from './DeleteExample'

test('Delete Example', () => {
  const component: ReactTestRenderer = renderer.create(<Delete />)
  expect(component.toJSON()).toMatchSnapshot()
})
