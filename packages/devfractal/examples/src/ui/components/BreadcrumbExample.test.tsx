import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { SafeRouter } from 'srtp-core'
import { BreadcrumbExample } from './BreadcrumbExample'

const Ex: React.FC = () => (
  <SafeRouter variant="hash">
    <BreadcrumbExample />
  </SafeRouter>
)

test.skip('Breadcrumb Example', () => {
  const component: ReactTestRenderer = renderer.create(<Ex />)
  expect(component.toJSON()).toMatchSnapshot()
})
