import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { evAPI } from '../common'
import { RaiseRequestForm } from '../views/RaiseRequestForm'

export const RaiseRequestRoute: React.FC = () => (
  <Section>
    <Post
      onPost={evAPI.create}
      redirectPath="/evs"
      component={RaiseRequestForm}
    />
  </Section>
)
