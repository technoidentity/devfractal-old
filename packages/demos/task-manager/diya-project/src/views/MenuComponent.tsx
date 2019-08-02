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
    <Menu
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 's',
      }}
    >
      <MenuList>
        {/* <MenuItem>
            <Image src={diyaLogo} alt="diyaImage" size="64x64" />
          </MenuItem> */}

        <MenuItem>
          <a href="/drivers">
            <Icon icon={faUsers} /> Drivers
          </a>
        </MenuItem>
        <MenuItem>
          <a href="/vehicles">
            <Icon icon={faBus} /> Vehicles
          </a>
        </MenuItem>
        <MenuItem>
          <a href="/batteries">
            <Icon icon={faCarBattery} /> Battery
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#!">
            <Icon icon={faUserFriends} /> Clients
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#!">
            <Icon icon={faMapMarked} /> Geofences
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#!">
            <Icon icon={faUsers} /> Users
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#!">
            <Icon icon={faBell} /> Alerts
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#!">
            <Icon icon={faPaperPlane} /> Reports
          </a>
        </MenuItem>
      </MenuList>
    </Menu>
  </Section>
)
