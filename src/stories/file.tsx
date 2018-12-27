import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Field, File } from '../bulma/form'

storiesOf('File', module)
  .add('with variant', () => (
    <div>
      <Field>
        <File
          variant="primary"
          fileLabel="primary file"
          onClick={action('selected')}
        />
      </Field>
      <Field>
        <File variant="black" fileLabel="black" />
      </Field>
      <Field>
        <File variant="white" fileLabel="white" />
      </Field>
      <Field>
        <File variant="link" fileLabel="link" fileName>
          Screen Shot 2017-07-29 at 15.54.25.png
        </File>
      </Field>
      <Field>
        <File variant="info" fileLabel="info" />
      </Field>
      <Field>
        <File variant="success" fileLabel="success" />
      </Field>
      <Field>
        <File variant="warning" fileLabel="warning" />
      </Field>
      <Field>
        <File variant="danger" fileLabel="danger" />
      </Field>
    </div>
  ))
  .add('with sizes', () => (
    <div>
      <Field>
        <File fileLabel="small file" size="small" />
      </Field>
      <Field>
        <File fileLabel="large file" size="large" />
      </Field>
      <Field>
        <File fileLabel="medium file" size="medium" />
      </Field>
      <Field>
        <File fileLabel="normal file" />
      </Field>
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
      <Field>
        <File fileLabel="centered choose file" fileName alignment="centered">
          Screen Shot 2017-07-29 at 15.54.25.png
        </File>
      </Field>
      <Field>
        <File fileLabel=" right choose file" fileName alignment="right">
          Screen Shot 2017-07-29 at 15.54.25.png
        </File>
      </Field>
    </div>
  ))
  .add('boxed', () => (
    <File fileLabel="boxed choose file" boxed fileName>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File>
  ))
  .add('fullWidth', () => (
    <File fileLabel="fullWidth choose file" fileName fullWidth>
      Screen Shot 2017-07-29 at 15.54.25.png
    </File>
  ))
