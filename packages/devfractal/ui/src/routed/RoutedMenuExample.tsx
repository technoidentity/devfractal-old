import { faBell, faBus, faCarBattery, faMapMarked, faPaperPlane, faUserFriends, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Menu, MenuItem, MenuList } from 'devfractal-ui';
import { Icon, Section } from 'devfractal-ui-core';
import React from 'react';
 
  export const MenuComponent: React.FC = () => (
    <Section>
      <Menu>
        <MenuList
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
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
            <a href="/clients">
              <Icon icon={faUserFriends} /> Clients
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#!">
              <Icon icon={faMapMarked} /> Geofences
            </a>
          </MenuItem>
          <MenuItem>
            <a href="/users">
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
  