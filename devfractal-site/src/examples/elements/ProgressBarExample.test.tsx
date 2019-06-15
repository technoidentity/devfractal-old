import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { ProgressBar } from './ProgressBarExample'

test('ProgressBar Example', () => {
  const component: ReactTestRenderer = renderer.create(<ProgressBar />)
  expect(component.toJSON()).toMatchSnapshot()
})
