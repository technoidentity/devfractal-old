import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { File } from './FileExample'

test('File Example', () => {
  const component: ReactTestRenderer = renderer.create(<File />)
  expect(component.toJSON()).toMatchSnapshot()
})
