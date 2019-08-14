import {
  faBus,
  faLocationArrow,
  faMapMarked,
  faStickyNote,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { Menu, MenuItem, MenuList } from 'devfractal-ui'
import { Icon, Section } from 'devfractal-ui-core'
import React from 'react'

export const MenuComponentRoute: React.FC = () => (
  <Section>
    <Menu>
      <MenuList
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MenuItem href="/">
          <Icon icon={faUsers} /> Employee
        </MenuItem>
        <MenuItem href="/evs">
          <Icon icon={faBus} /> EVS Assigned
        </MenuItem>
        <MenuItem href="/planRoute">
          <Icon icon={faLocationArrow} /> Plan Route
        </MenuItem>
        <MenuItem href="/invoices">
          <Icon icon={faStickyNote} /> Invoices
        </MenuItem>
        <MenuItem href="/viewTrips">
          <Icon icon={faMapMarked} /> View Trips
        </MenuItem>
      </MenuList>
    </Menu>
  </Section>
)
