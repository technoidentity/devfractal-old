import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Options } from './OptionExample'

test('Options Example of columns', () => {
  const component: ReactTestRenderer = renderer.create(<Options />)
  expect(component.toJSON()).toMatchSnapshot()
})
