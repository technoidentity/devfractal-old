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
  Box,
  Icon,
  Menu,
  MenuItem,
  MenuList,
  Section,
} from 'technoidentity-devfractal'

export const MenuComponent: React.FC = () => (
  <Section>
    <Box>
      <Menu>
        <MenuList>
          <MenuItem>
            <a href="#!">
              <Icon icon={faUsers} /> Drivers
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#!">
              <Icon icon={faBus} /> Vehicles
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#!">
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
    </Box>
  </Section>
)
