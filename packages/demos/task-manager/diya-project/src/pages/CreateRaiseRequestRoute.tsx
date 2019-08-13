import { Post } from 'devfractal-api'
import { Section } from 'devfractal-ui-core'
import { omit } from 'lodash-es'
import React from 'react'
import { Evs, evsAPI } from '../common'
import { RaiseRequestForm } from '../views/RaiseRequestForm'

export const CreateRaiseRequestRoute: React.FC = () => (
  <Section>
    <Post<Evs>
      onPost={values => evsAPI.create(omit(values, 'id'))}
      redirectPath="/evs"
      component={RaiseRequestForm}
    />
  </Section>
)
