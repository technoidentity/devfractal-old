import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { CardExample } from './CardExample'

test('Card Example', () => {
  const component: ReactTestRenderer = renderer.create(<CardExample />)
  expect(component.toJSON()).toMatchSnapshot()
})
