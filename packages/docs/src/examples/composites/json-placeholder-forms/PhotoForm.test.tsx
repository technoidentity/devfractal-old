import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { PhotoForm } from './PhotoForm'

test('Photo Form', () => {
  const component: ReactTestRenderer = renderer.create(<PhotoForm />)
  expect(component.toJSON()).toMatchSnapshot()
})
