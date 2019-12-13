import React from 'react'
import { Get, paths, Post, Route } from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import {
  cargosUrl,
  EVsAddTripResponse,
  evsAssignedAPI,
  EVsAssignedResponse,
  EVsTripData,
  sessionExpire,
} from '../common'
import { toastMessage } from '../components/Message'
import { AddTripForm } from '../views/AddTripForm'
import { EVsAssignedList } from '../views/EVsAssignedList'

const ps = paths(evsAssignedAPI.resource)

export async function getEVsAssignedList({
  setUser,
  logout,
  setHeaderText,
}: any): Promise<EVsAssignedResponse['data']['rows']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'vehicles/assign/clients' },
      EVsAssignedResponse,
    )
    setHeaderText('EVS Assigned')
    return drivers.data.rows
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    setHeaderText(undefined)
    throw Error(error)
  }
}

export async function postEVsAddTrip(
  data: EVsTripData,
): Promise<EVsAddTripResponse['data']> {
  const evsData = await cargosUrl().post(
    { resource: 'trips' },
    data,
    EVsAddTripResponse,
  )
  return evsData.data
}

const EVsList = ({ setUser, logout, setHeaderText }: any) => (
  <Get
    asyncFn={() => getEVsAssignedList({ setUser, logout, setHeaderText })}
    component={EVsAssignedList}
  />
)
const EVsAddTrip = () => (
  <Post
    // redirectTo={ps.list}
    component={AddTripForm}
    onPost={postEVsAddTrip}
  />
)

export const EVsAssignedRoutes: React.FC = () => {
  const { logout, setUser, setHeaderText } = useAuth()

  return (
    <>
      <Route
        path={ps.list}
        render={() => (
          <EVsList
            setUser={setUser}
            logout={logout}
            setHeaderText={setHeaderText}
          />
        )}
      />
      <Route path="/evs_assigned/addTrip/:id" render={() => <EVsAddTrip />} />
    </>
  )
}
