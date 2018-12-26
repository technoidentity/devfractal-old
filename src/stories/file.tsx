import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { File } from '../bulma/form/File'

storiesOf('File', module)
  .add('with variant', () => (
    <div>
      <File
        variant="primary"
        fileLabel="primary"
        onClick={action('selected')}
      />
      <File variant="black" fileLabel="black" />
      <File variant="white" fileLabel="white" />
      <File variant="link" fileLabel="link" />
      <File variant="info" fileLabel="info" />
      <File variant="success" fileLabel="success" />
      <File variant="warning" fileLabel="warning" />
      <File variant="danger" fileLabel="danger" />
    </div>
  ))
  .add('with sizes', () => (
    <div>
      <File fileLabel="small file" size="small" />
      <File fileLabel="large file" size="large" />
      <File fileLabel="medium file" size="medium" />
      <File fileLabel="normal file" />
    </div>
  ))
  .add('with name', () => (
    <div>
      <File fileLabel="choose file" fileName>
        Screen Shot 2017-07-29 at 15.54.25.png
      </File>
    </div>
  ))
  .add('file-cta alignment', () => (
    <div>
      <File fileLabel="centered choose file" fileName alignment="centered">
        Screen Shot 2017-07-29 at 15.54.25.png
      </File>
      <File fileLabel=" right choose file" fileName alignment="right">
        Screen Shot 2017-07-29 at 15.54.25.png
      </File>
    </div>
  ))
  .add('boxed', () => <File fileLabel="boxed choose file" boxed />)
  .add('fullWidth', () => (
    <File fileLabel="fullWidth choose file" fileName fullWidth>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File>
  ))
