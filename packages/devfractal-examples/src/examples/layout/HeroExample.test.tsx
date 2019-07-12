import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Hero } from './HeroExample'

test('Hero Example', () => {
  const component: ReactTestRenderer = renderer.create(<Hero />)
  expect(component.toJSON()).toMatchSnapshot()
})
