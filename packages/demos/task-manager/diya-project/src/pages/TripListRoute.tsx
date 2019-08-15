import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { tripAPI } from '../common'
import { TripList } from '../views'

export const TripListRoute: React.FC = () => (
  <Get asyncFn={async () => tripAPI.many()}>
    {data => <TripList data={data} />}
  </Get>
)
