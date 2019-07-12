import React from 'react'

import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Sizes } from './SizesExample'

test('Sizes Example of columns', () => {
  const component: ReactTestRenderer = renderer.create(<Sizes />)
  expect(component.toJSON()).toMatchSnapshot()
})
