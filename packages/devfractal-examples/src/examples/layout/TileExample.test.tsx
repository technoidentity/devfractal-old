import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Tile } from './TileExample'

test('Tile Example', () => {
  const component: ReactTestRenderer = renderer.create(<Tile />)
  expect(component.toJSON()).toMatchSnapshot()
})
