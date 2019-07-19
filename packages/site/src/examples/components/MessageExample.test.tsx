import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { MessageExample } from './MessageExample'

test('Message Example', () => {
  const component: ReactTestRenderer = renderer.create(<MessageExample />)
  expect(component.toJSON()).toMatchSnapshot()
})
