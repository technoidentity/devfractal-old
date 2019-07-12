import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { MediaObject } from './MediaObjectExample'

test('MediaObject Example', () => {
  const component: ReactTestRenderer = renderer.create(<MediaObject />)
  expect(component.toJSON()).toMatchSnapshot()
})
