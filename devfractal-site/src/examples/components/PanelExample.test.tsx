import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { PanelExample } from './PanelExample'

test('Panel Example', () => {
  const component: ReactTestRenderer = renderer.create(<PanelExample />)
  expect(component.toJSON()).toMatchSnapshot()
})
