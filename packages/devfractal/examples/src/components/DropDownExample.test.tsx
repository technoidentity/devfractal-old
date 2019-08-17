import { Route, Router } from 'devfractal-router'
import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { DropdownExample } from './DropDownExample'

const Ex: React.FC = () => (
  <Router variant="hash">
    <Route path="/" component={DropdownExample} />
  </Router>
)
test('Dropdown Example', () => {
  const component: ReactTestRenderer = renderer.create(<Ex />)
  expect(component.toJSON()).toMatchSnapshot()
})
