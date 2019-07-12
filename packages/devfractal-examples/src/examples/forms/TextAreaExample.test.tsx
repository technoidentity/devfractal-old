import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { TextArea } from './TextAreaExample'

test('TextArea Example', () => {
  const component: ReactTestRenderer = renderer.create(<TextArea />)
  expect(component.toJSON()).toMatchSnapshot()
})
