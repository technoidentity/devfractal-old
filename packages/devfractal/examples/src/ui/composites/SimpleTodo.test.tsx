import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { CrudComponents } from 'srtp-core'
import { UICrudComponents } from 'srtp-ui'
import { SimpleTodo } from './SimpleTodo'

test('Simple Todo', () => {
  const component: ReactTestRenderer = renderer.create(
    <CrudComponents.Provider value={UICrudComponents}>
      <SimpleTodo />
    </CrudComponents.Provider>,
  )
  expect(component.toJSON()).toMatchSnapshot()
})
