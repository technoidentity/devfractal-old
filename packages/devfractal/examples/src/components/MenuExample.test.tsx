import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Route, Router } from 'technoidentity-router'
import { MenuExample } from './MenuExample'

test('Menu Example', () => {
  const component: ReactTestRenderer = renderer.create(
    <Router variant="hash">
      <Route path="/" component={MenuExample} />
    </Router>,
  )
  expect(component.toJSON()).toMatchSnapshot()
})
