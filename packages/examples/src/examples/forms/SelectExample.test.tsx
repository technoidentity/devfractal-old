import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Select } from './SelectExample'

test('Select Example', () => {
  const component: ReactTestRenderer = renderer.create(<Select />)
  expect(component.toJSON()).toMatchSnapshot()
})
