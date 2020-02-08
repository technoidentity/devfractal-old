import { Router } from 'stp-router'
import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { BreadcrumbExample } from './BreadcrumbExample'

const Ex: React.FC = () => (
  <Router variant="hash">
    <BreadcrumbExample />
  </Router>
)

test.skip('Breadcrumb Example', () => {
  const component: ReactTestRenderer = renderer.create(<Ex />)
  expect(component.toJSON()).toMatchSnapshot()
})
