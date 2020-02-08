import React from 'react'
import { All, paths } from 'technoidentity-devfractal'
import { tripAPI } from '../common'
import { TripList } from '../views'

const ps = paths('trips')

export const TripListRoute: React.FC = () => (
  <All api={tripAPI} path={ps.list} list={TripList} />
)
