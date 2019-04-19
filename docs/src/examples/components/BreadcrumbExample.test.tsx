import React from 'react'
import { HashRouter } from 'react-router-dom'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { BreadcrumbExample } from './BreadcrumbExample'

test('Breadcrumb Example', () => {
  const component: ReactTestRenderer = renderer.create(
    <HashRouter>
      <BreadcrumbExample />
    </HashRouter>,
  )
  expect(component.toJSON()).toMatchSnapshot()
})
