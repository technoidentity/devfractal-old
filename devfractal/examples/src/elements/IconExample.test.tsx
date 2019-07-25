import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Icon } from './IconExample'

test('Icon Example', () => {
  const component: ReactTestRenderer = renderer.create(<Icon />)
  expect(component.toJSON()).toMatchSnapshot()
})
