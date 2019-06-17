import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { FieldsLoginForm } from './FieldsLoginForm'

test('Fields login form', () => {
  const component: ReactTestRenderer = renderer.create(<FieldsLoginForm />)
  expect(component.toJSON()).toMatchSnapshot()
})
