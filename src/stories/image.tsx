import { storiesOf } from '@storybook/react'
import React from 'react'
import { Image } from '../devfractal/elements/Image'
import { Field } from '../devfractal/form'

storiesOf('Image ', module)
  .add('fixed square images', () => (
    <div>
      <Field>
        <Image
          src="https://bulma.io/images/placeholders/128x128.png"
          size="16x16"
        />
      </Field>
      <Field>
        <Image
          src="https://bulma.io/images/placeholders/128x128.png"
          size="24x24"
        />
      </Field>
      <Field>
        <Image
          src="https://bulma.io/images/placeholders/128x128.png"
          size="32x32"
        />
      </Field>
      <Field>
        <Image
          src="https://bulma.io/images/placeholders/128x128.png"
          size="48x48"
        />
      </Field>
      <Field>
        <Image
          src="https://bulma.io/images/placeholders/128x128.png"
          size="64x64"
        />
      </Field>
      <Field>
        <Image
          src="https://bulma.io/images/placeholders/128x128.png"
          size="96x96"
        />
      </Field>
      <Field>
        <Image
          src="https://bulma.io/images/placeholders/128x128.png"
          size="128x128"
        />
      </Field>
    </div>
  ))

  .add('rounded image', () => (
    <Image
      src="https://bulma.io/images/placeholders/128x128.png"
      size="96x96"
      rounded
    />
  ))
