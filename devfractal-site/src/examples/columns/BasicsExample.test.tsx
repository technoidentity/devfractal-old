import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Basic } from './BasicsExample'

test('Basics Example of Columns', () => {
  const component: ReactTestRenderer = renderer.create(<Basic />)
  expect(component.toJSON()).toMatchSnapshot()
})
