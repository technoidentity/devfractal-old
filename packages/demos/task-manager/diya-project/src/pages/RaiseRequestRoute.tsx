import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { Evs, evsAPI } from '../common'
import { RaiseRequestForm } from '../views/RaiseRequestForm'

export const RaiseRequestRoute: React.FC = () => (
  <Section>
    <Post<Evs>
      onPost={evsAPI.create}
      redirectPath="/evs"
      component={RaiseRequestForm}
    />
  </Section>
)
