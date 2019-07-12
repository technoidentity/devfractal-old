import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { FieldsGeneralForm } from './FieldsGeneralForm'

test.skip('Fields General Form', () => {
  const component: ReactTestRenderer = renderer.create(<FieldsGeneralForm />)
  expect(component.toJSON()).toMatchSnapshot()
})
