import {
  faBell,
  faBus,
  faCarBattery,
  faMapMarked,
  faPaperPlane,
  faUserFriends,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  Icon,
  Menu,
  MenuItem,
  MenuList,
  Section,
} from 'technoidentity-devfractal'

export const MenuComponent: React.FC = () => (
  <Section>
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
        <MenuItem href="/geofence">
          <Icon icon={faMapMarked} /> GeoFences
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
  </Section>
)
