import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { SafeRoute, SafeRouter } from 'technoidentity-core'
import { MenuExample } from './MenuExample'

test('Menu Example', () => {
  const component: ReactTestRenderer = renderer.create(
    <SafeRouter variant="hash">
      <SafeRoute path="/" component={MenuExample} />
    </SafeRouter>,
  )
  expect(component.toJSON()).toMatchSnapshot()
})
