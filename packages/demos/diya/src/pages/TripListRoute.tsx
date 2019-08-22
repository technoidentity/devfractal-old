import React from 'react'
import { v2 } from 'technoidentity-devfractal'
import { tripAPI } from '../common'
import { TripList } from '../views'

const paths = v2.paths('trips')
const links = v2.links('trips')

export const TripListRoute: React.FC = () => (
  <v2.All
    api={tripAPI}
    path={paths.list}
    list={TripList}
    createTo={links.create}
    editTo={links.edit}
  />
)
