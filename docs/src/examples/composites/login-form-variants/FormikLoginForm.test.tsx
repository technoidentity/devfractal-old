import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { FormikLoginForm } from './FormikLoginForm'

test('Formik Login Form', () => {
  const component: ReactTestRenderer = renderer.create(<FormikLoginForm />)
  expect(component.toJSON()).toMatchSnapshot()
})
