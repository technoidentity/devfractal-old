import {
  faBell,
  faBus,
  faCarBattery,
  faMapMarked,
  faPaperPlane,
  faUserFriends,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

import { Route, Router } from '@stp/router'
import { Icon, Section } from '@stp/ui-core'
import 'bulma/css/bulma.css'
import React from 'react'
import { render } from 'react-dom'
import { Menu, MenuItem, MenuList } from './routed'

const MenuComponent: React.FC = () => (
  <Menu>
    <MenuList
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MenuItem href="/drivers">
        <Icon icon={faUsers} /> Drivers
      </MenuItem>
      <MenuItem href="/vehicles">
        <Icon icon={faBus} /> Vehicles
      </MenuItem>
      <MenuItem href="/batteries">
        <Icon icon={faCarBattery} /> Battery
      </MenuItem>
      <MenuItem href="/clients">
        <Icon icon={faUserFriends} /> Clients
      </MenuItem>
      <MenuItem href="#!">
        <Icon icon={faMapMarked} /> Geofences
      </MenuItem>
      <MenuItem href="/users">
        <Icon icon={faUsers} /> Users
      </MenuItem>
      <MenuItem href="#!">
        <Icon icon={faBell} /> Alerts
      </MenuItem>
      <MenuItem href="#!">
        <Icon icon={faPaperPlane} /> Reports
      </MenuItem>
    </MenuList>
  </Menu>
)

const ClientList: React.FC = () => <h1>clients</h1>
const VehicleList: React.FC = () => <h1>vehicles</h1>

export const App: React.FC = () => {
  return (
    <Section>
      <Router variant="hash">
        <Route exact path="/" component={MenuComponent} />
        <Route exact path="/clients" component={ClientList} />
        <Route exact path="/vehicles" component={VehicleList} />
      </Router>
    </Section>
  )
}

render(<App />, document.getElementById('root'))
