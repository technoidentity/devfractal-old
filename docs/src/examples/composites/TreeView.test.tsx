import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { TreeViewStructure } from './TreeView'

test('TreeView Structure', () => {
  const component: ReactTestRenderer = renderer.create(<TreeViewStructure />)
  expect(component.toJSON()).toMatchSnapshot()
})
