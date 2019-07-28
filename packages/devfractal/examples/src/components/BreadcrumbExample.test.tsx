import React from 'react'
import { HashRouter } from 'react-router-dom'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { BreadcrumbExample } from './BreadcrumbExample'

const Ex: React.FC = () => (
  <HashRouter>
    <BreadcrumbExample />
  </HashRouter>
)

test.skip('Breadcrumb Example', () => {
  const component: ReactTestRenderer = renderer.create(<Ex />)
  expect(component.toJSON()).toMatchSnapshot()
})
