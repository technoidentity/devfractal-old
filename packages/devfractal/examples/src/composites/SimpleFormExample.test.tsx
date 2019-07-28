import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { SimpleFormExample } from './SimpleFormExample'

test('Simple Form Example', () => {
  const component: ReactTestRenderer = renderer.create(<SimpleFormExample />)
  expect(component.toJSON()).toMatchSnapshot()
})
