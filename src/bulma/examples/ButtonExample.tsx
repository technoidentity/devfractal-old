import * as React from 'react'

import { Button, Buttons } from '../Button'
import { logger } from './common'
import { Field } from '../Field'
import { Control } from '../Control'

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
      <Control>
        <Button className="is-primary" size="medium">
          Left
        </Button>
      </Control>
      <Control>
        <Button disabled>Center</Button>
      </Control>
      <Control>
        <Button onClick={() => logger('clicked')}>Right</Button>
      </Control>
    </Field>
  </div>
)
