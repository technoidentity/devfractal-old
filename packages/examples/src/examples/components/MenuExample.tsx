import React from 'react'
import {
  Box,
  Menu,
  MenuItem,
  MenuLabel,
  MenuList,
  Section,
} from 'technoidentity-devfractal'

export const MenuExample: React.FC = () => (
  <Section>
    <Box>
      <Menu>
        <MenuLabel>General</MenuLabel>
        <MenuList>
          <MenuItem>
            <a href="#!">Dashboard</a>
          </MenuItem>
          <MenuItem>
            <a href="#!">Customers</a>
          </MenuItem>
        </MenuList>
        <MenuLabel>Administration</MenuLabel>
        <MenuList>
          <MenuItem>
            <a href="#!">TeamSettings</a>
          </MenuItem>
          <MenuItem>
            <a className="is-active" href="#!">
              {' '}
              Manage your team
            </a>
            <MenuList>
              <MenuItem>
                <a href="#!">Members</a>
              </MenuItem>
              <MenuItem>
                <a href="#!">Plugins</a>
              </MenuItem>
              <MenuItem>
                <a href="#!">Add a member</a>
              </MenuItem>
            </MenuList>
          </MenuItem>
          <MenuItem>
            <a href="#!">invitations</a>
          </MenuItem>
          <MenuItem>
            <a href="#!">cloudstorage</a>
          </MenuItem>
          <MenuItem>
            <a href="#!">invitations</a>
          </MenuItem>
          <MenuLabel>Transactions</MenuLabel>
        </MenuList>
        <MenuList>
          <MenuItem>
            <a href="#!">payments</a>
          </MenuItem>
          <MenuItem>
            <a href="#!">transfers</a>
          </MenuItem>
          <MenuItem>
            <a href="#!">balance</a>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  </Section>
)
