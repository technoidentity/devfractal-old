import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Typography } from './TypographyHelpersExample'

test('Typography Helpers Example', () => {
  const component: ReactTestRenderer = renderer.create(<Typography />)
  expect(component.toJSON()).toMatchSnapshot()
})
