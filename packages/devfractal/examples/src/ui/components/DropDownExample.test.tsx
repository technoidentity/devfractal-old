import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { SafeRoute, SafeRouter } from 'srtp-core'
import { DropdownExample } from './DropDownExample'

const Ex: React.FC = () => (
  <SafeRouter variant="hash">
    <SafeRoute path="/" component={DropdownExample} />
  </SafeRouter>
)
test('Dropdown Example', () => {
  const component: ReactTestRenderer = renderer.create(<Ex />)
  expect(component.toJSON()).toMatchSnapshot()
})
