import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { evAPI } from '../common'
import { RaiseRequestForm } from '../views'

export const RaiseRequestRoute: React.FC = () => (
  <Post
    onPost={evAPI.create}
    redirectPath="/evs"
    component={RaiseRequestForm}
  />
)
