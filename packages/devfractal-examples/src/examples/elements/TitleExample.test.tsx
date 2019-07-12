import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Title } from './TitleExample'

test('Title Example', () => {
  const component: ReactTestRenderer = renderer.create(<Title />)
  expect(component.toJSON()).toMatchSnapshot()
})
