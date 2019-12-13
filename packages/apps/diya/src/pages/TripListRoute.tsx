import React from 'react'
import { Get, paths, Route } from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import { cargosUrl, sessionExpire, tripAPI, TripListResponse } from '../common'
import { toastMessage } from '../components/Message'
import { TripDetailsTable } from '../views/TripsDetailsTable'

const ps = paths(tripAPI.resource)

export async function getTripList({
  setUser,
  logout,
  setHeaderText,
}: any): Promise<TripListResponse['data']['rows']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'trips' },
      TripListResponse,
    )
    setHeaderText('Trips')
    return drivers.data.rows
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    setHeaderText(undefined)
    throw Error(error)
  }
}

const TripList = ({ setUser, logout, setHeaderText }: any) => (
  <Get
    asyncFn={() => getTripList({ setUser, logout, setHeaderText })}
    component={TripDetailsTable}
  />
)

export const TripListRoute: React.FC = () => {
  const { logout, setUser, setHeaderText } = useAuth()
  return (
    <Route
      path={ps.list}
      render={() => (
        <TripList
          setUser={setUser}
          logout={logout}
          setHeaderText={setHeaderText}
        />
      )}
    />
  )
}
