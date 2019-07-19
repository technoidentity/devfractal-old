import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Content } from './ContentExample'

test('Content Example', () => {
  const component: ReactTestRenderer = renderer.create(<Content />)
  expect(component.toJSON()).toMatchSnapshot()
})
