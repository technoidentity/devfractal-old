import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { Client, clientAPI } from '../common'
import { ClientForm } from '../views'

export const CreateClientRoute: React.FC = () => (
  <Section>
    <Post<Client>
      onPost={clientAPI.create}
      redirectPath="/clients"
      component={ClientForm}
    />
  </Section>
)
