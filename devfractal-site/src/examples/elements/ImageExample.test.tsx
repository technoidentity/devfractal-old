import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Image } from './ImageExample'

test('Image Example', () => {
  const component: ReactTestRenderer = renderer.create(<Image />)
  expect(component.toJSON()).toMatchSnapshot()
})
