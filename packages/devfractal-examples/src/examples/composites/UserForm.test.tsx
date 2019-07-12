import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { UserForm } from './UserForm'

test('User Form Example', () => {
  const component: ReactTestRenderer = renderer.create(<UserForm />)
  expect(component.toJSON()).toMatchSnapshot()
})
