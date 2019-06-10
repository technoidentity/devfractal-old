import React from 'react'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { CommentForm } from './CommentForm'

test('Comment Form', () => {
  const component: ReactTestRenderer = renderer.create(<CommentForm />)
  expect(component.toJSON()).toMatchSnapshot()
})
