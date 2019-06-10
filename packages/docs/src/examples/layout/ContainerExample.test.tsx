import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Container } from './ContainerExample'

test('Container Example', () => {
  const component: ReactTestRenderer = renderer.create(<Container />)
  expect(component.toJSON()).toMatchSnapshot()
})
