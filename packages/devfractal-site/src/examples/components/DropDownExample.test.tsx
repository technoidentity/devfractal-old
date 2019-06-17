import React from 'react'
import { HashRouter } from 'react-router-dom'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { DropdownExample } from './DropDownExample'

const Ex: React.FC = () => (
  <HashRouter>
    <DropdownExample />
  </HashRouter>
)
test('Dropdown Example', () => {
  const component: ReactTestRenderer = renderer.create(<Ex />)
  expect(component.toJSON()).toMatchSnapshot()
})
