import React from 'react'
import { Get, paths, Route } from 'technoidentity-devfractal'
import { cargosUrl, tripAPI, TripListResponse } from '../common'
import { TripDetailsTable } from '../views/TripsDetailsTable'

const ps = paths(tripAPI.resource)

export async function getTripList(): Promise<TripListResponse['data']['rows']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'vehicles/assign/clients' },
      TripListResponse,
    )
    return drivers.data.rows
  } catch (error) {
    // sessionExpire({ error, setUser, logout, toastMessage })
    throw Error(error)
  }
}

const TripList = () => (
  <Get asyncFn={getTripList} component={TripDetailsTable} />
)

export const TripListRoute: React.FC = () => (
  <Route path={ps.list} render={() => <TripList />} />
)
