import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { PaginationExample } from './PaginationExample'

test('Pagination Example', () => {
  const component: ReactTestRenderer = renderer.create(<PaginationExample />)
  expect(component.toJSON()).toMatchSnapshot()
})
