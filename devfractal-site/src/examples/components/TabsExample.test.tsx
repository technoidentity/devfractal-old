import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { TabsExample } from './TabsExample'

test('Tabs Example', () => {
  const component: ReactTestRenderer = renderer.create(<TabsExample />)
  expect(component.toJSON()).toMatchSnapshot()
})
