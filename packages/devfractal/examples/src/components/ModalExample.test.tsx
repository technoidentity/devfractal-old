import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { ModalExample } from './ModalExample'

test('Modal Example', () => {
  const component: ReactTestRenderer = renderer.create(<ModalExample />)
  expect(component.toJSON()).toMatchSnapshot()
})
