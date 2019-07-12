import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Footer } from './FooterExample'

test('Footer Example', () => {
  const component: ReactTestRenderer = renderer.create(<Footer />)
  expect(component.toJSON()).toMatchSnapshot()
})
