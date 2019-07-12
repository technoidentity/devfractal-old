import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { NavbarExample } from './NavbarExample'

test('Navbar Example', () => {
  const component: ReactTestRenderer = renderer.create(<NavbarExample />)
  expect(component.toJSON()).toMatchSnapshot()
})
