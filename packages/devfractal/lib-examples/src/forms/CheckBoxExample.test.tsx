import React from 'react'

import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { CheckBox } from './CheckBoxExample'

test('CheckBox Example', () => {
  const component: ReactTestRenderer = renderer.create(<CheckBox />)
  expect(component.toJSON()).toMatchSnapshot()
})
