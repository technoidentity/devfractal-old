import { omit } from 'lodash-es'
import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { Client, clientAPI } from '../common'
import { ClientForm } from '../views'

export const CreateClientRoute: React.FC = () => (
  <Section>
    <Post<Client>
      onPost={values => clientAPI.create(omit(values, 'id'))}
      redirectPath="/clients"
      component={ClientForm}
    />
  </Section>
)
