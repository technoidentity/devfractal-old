import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { General } from './GeneralExample'

test('General Example', () => {
  const component: ReactTestRenderer = renderer.create(<General />)
  expect(component.toJSON()).toMatchSnapshot()
})
