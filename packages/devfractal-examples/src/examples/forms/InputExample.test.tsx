import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Input } from './InputExample'

test('Input Example', () => {
  const component: ReactTestRenderer = renderer.create(<Input />)
  expect(component.toJSON()).toMatchSnapshot()
})
