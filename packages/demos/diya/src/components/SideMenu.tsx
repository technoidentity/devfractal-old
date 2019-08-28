import {
  faBell,
  faBullhorn,
  faBus,
  faCarBattery,
  faMapMarked,
  faPaperPlane,
  faUserFriends,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  Column,
  Icon,
  Image,
  Menu,
  MenuItem,
  MenuList,
  Section,
} from 'technoidentity-devfractal'
import diyaLogo from '../images/diyaLogo.png'

export const SideMenu = () => (
  <Column
    narrow
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Section>
      <Image src={diyaLogo} alt="diyaImage" size="96x96" />
    </Section>

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
          <MenuItem href="/geo_fences">
            <Icon icon={faMapMarked} /> GeoFences
          </MenuItem>
          <MenuItem href="/users">
            <Icon icon={faUsers} /> Users
          </MenuItem>
          <MenuItem href="/adManagers">
            <Icon icon={faBullhorn} /> Ad Manager
          </MenuItem>
          <MenuItem href="/invoices">
            <Icon icon={faBell} /> Invoices{' '}
          </MenuItem>
          <MenuItem href="#!">
            <Icon icon={faPaperPlane} /> Reports
          </MenuItem>
        </MenuList>
      </Menu>
    </Section>
  </Column>
)
