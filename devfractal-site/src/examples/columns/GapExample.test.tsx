import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Gap } from './GapExample'

test('Gap Example of columns', () => {
  const component: ReactTestRenderer = renderer.create(<Gap />)
  expect(component.toJSON()).toMatchSnapshot()
})
