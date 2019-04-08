import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Table } from './TableExample'

test('Table Example', () => {
  const component: ReactTestRenderer = renderer.create(<Table />)
  expect(component.toJSON()).toMatchSnapshot()
})
