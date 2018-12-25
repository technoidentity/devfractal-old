import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { File } from '../bulma/form/File'

storiesOf('File', module)
  .add('with variant', () => (
    <div>
      <File
        variant="primary"
        fileLabel="choose file"
        onClick={action('selected')}
      />
      <File variant="black" fileLabel="choose file" />
      <File variant="white" fileLabel="choose file" />
      <File variant="link" fileLabel="choose file" />
      <File variant="info" fileLabel="choose file" />
      <File variant="success" fileLabel="choose file" />
      <File variant="warning" fileLabel="choose file" />
      <File variant="danger" fileLabel="choose file" />
    </div>
  ))
  .add('with sizes', () => (
    <div>
      <File fileLabel="choose file" size="small" />
      <File fileLabel="choose file" size="large" />
      <File fileLabel="choose file" size="medium" />
    </div>
  ))
  .add('with name', () => (
    <div>
      <File fileLabel="choose file" fileName>
        screenshot1
      </File>
    </div>
  ))
  .add('with alignment', () => (
    <div>
      <File fileLabel="choose file" fileName alignment="centered">
        screenshot 1
      </File>
      <File fileLabel="choose file" fileName alignment="right">
        screenshot 2
      </File>
    </div>
  ))
  .add('with boxed', () => (
    <File fileLabel="choose file" boxed={Boolean(true)} />
  ))
  .add('with fullWidth', () => (
    <File fileLabel="choose file" fileName fullWidth={Boolean(true)}>
      {' '}
      Screen Shot 2017-07-29 at 15.54.25.png
    </File>
  ))
