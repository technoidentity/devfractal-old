import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Helpers } from './HelpersExample'

test('Helpers Example', () => {
  const component: ReactTestRenderer = renderer.create(<Helpers />)
  expect(component.toJSON()).toMatchSnapshot()
})
