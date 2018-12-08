import * as React from 'react'

import { Button, Buttons } from '../Button'
import { logger } from './common'
import { Field } from '../Field'

export const ButtonExample: React.SFC = () => (
  <div>
    <Buttons alignment="centered">
      <Button
        className="is-info is-selected"
        buttonStyle="rounded"
        state="focused"
        onClick={() => logger('click')}
      >
        Primary
      </Button>
      <Button state="static">success</Button>
      <Button state="active">danger</Button>
      <Button state="focused">info</Button>
      <Button> dark</Button>
    </Buttons>

    <Field className="has-addons has-addons-centered">
      <Button className="is-primary" size="medium">
        Left
      </Button>
      <Button disabled>Center</Button>
      <Button onClick={() => logger('clicked')}>Right</Button>
    </Field>
  </div>
)
