import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { Client, clientAPI } from '../common'
import { ClientForm } from '../views'

export const ClientRoute = () => (
  <Post
    onPost={clientAPI.create}
    redirectPath="/clients"
    component={ClientForm}
  />
)
