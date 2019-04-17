import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { AlbumForm } from './AlbumForm'

test('Album Form', () => {
  const component: ReactTestRenderer = renderer.create(<AlbumForm />)
  expect(component.toJSON()).toMatchSnapshot()
})
