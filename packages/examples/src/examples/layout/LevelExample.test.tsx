import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Level } from './LevelExample'

test('Level Example', () => {
  const component: ReactTestRenderer = renderer.create(<Level />)
  expect(component.toJSON()).toMatchSnapshot()
})
