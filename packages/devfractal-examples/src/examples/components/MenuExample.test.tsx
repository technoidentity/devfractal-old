import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { MenuExample } from './MenuExample'

test('Menu Example', () => {
  const component: ReactTestRenderer = renderer.create(<MenuExample />)
  expect(component.toJSON()).toMatchSnapshot()
})
