import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { TextArea } from '../src/lib'

storiesOf('TextArea', module)
  .add('with variant', () => (
    <div>
      <TextArea
        variant="primary"
        onChange={action('onChange')}
        placeholder="primary"
      />
      <TextArea variant="info" placeholder="info" />
      <TextArea variant="success" placeholder="success" />
      <TextArea variant="white" placeholder="white" />
      <TextArea variant="warning" placeholder="warning" />
      <TextArea variant="danger" placeholder="danger" />
      <TextArea variant="black" placeholder="black" />
      <TextArea variant="light" placeholder="light" />
      <TextArea variant="dark" placeholder="dark" />
    </div>
  ))
  .add('with size', () => (
    <div>
      <TextArea
        ctrlSize="small"
        placeholder="small Textarea"
        variant="primary"
      />
      <TextArea
        ctrlSize="medium"
        placeholder="medium Textarea"
        variant="warning"
      />
      <TextArea ctrlSize="large" placeholder="large Textarea" variant="info" />
      <TextArea placeholder="normal Textarea" variant="danger" />
    </div>
  ))
  .add('with rows', () => (
    <div>
      <TextArea rows={4} variant="primary" placeholder="4 lines of Textarea" />
      <TextArea rows={6} variant="info" placeholder="6 lines of Textarea" />
      <TextArea rows={10} variant="danger" placeholder="10 lines of Textarea" />
    </div>
  ))
  .add('with state', () => (
    <div>
      <TextArea state="focused" placeholder="focused Textarea" />
      <TextArea state="hovered" placeholder="hovered Textarea" />
      <TextArea state="static" placeholder="static Textarea" />
      <TextArea state="active" placeholder="active Textarea" />
    </div>
  ))
  .add('FixedSize', () => (
    <TextArea fixedSize placeholder="Fixed size textarea" />
  ))
  .add('Inline', () => <TextArea inline placeholder="inline textarea" />)
  .add('Fullwidth', () => (
    <TextArea fullWidth placeholder="fullwidth textarea" />
  ))
  .add('Loading', () => (
    <TextArea loading variant="info" placeholder="Loading Textarea" />
  ))
  .add('Disabled', () => <TextArea disabled placeholder="Disabled Textarea" />)
