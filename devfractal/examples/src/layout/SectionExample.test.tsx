import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Section } from './SectionExample'

test('Section Example', () => {
  const component: ReactTestRenderer = renderer.create(<Section />)
  expect(component.toJSON()).toMatchSnapshot()
})
