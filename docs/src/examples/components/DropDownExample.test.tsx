import React from 'react'
import { HashRouter } from 'react-router-dom'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { DropdownExample } from './DropDownExample'

test('Dropdown Example', () => {
  const component: ReactTestRenderer = renderer.create(
    <HashRouter>
      <DropdownExample />
    </HashRouter>,
  )
  expect(component.toJSON()).toMatchSnapshot()
})
