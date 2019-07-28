import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Notification } from './NotificationExample'

test('Notification Example', () => {
  const component: ReactTestRenderer = renderer.create(<Notification />)
  expect(component.toJSON()).toMatchSnapshot()
})
