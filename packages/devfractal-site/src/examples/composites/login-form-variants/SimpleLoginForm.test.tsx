import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { SimpleLoginForm } from './SimpleLoginForm'

test('Simple Login Form', () => {
  const component: ReactTestRenderer = renderer.create(<SimpleLoginForm />)
  expect(component.toJSON()).toMatchSnapshot()
})
