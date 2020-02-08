import { Menu, MenuItem, MenuLabel, MenuList } from 'stp-ui'
import { Box, Section } from 'stp-ui'
import React from 'react'

export const MenuExample: React.FC = () => (
  <Section>
    <Box>
      <Menu>
        <MenuLabel>General</MenuLabel>
        <MenuList>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Customers</MenuItem>
        </MenuList>
        <MenuLabel>Administration</MenuLabel>
        <MenuList>
          <MenuItem>TeamSettings</MenuItem>
          <MenuItem active>Manage your team</MenuItem>
          <MenuList>
            <MenuItem>Members</MenuItem>
            <MenuItem>Plugins</MenuItem>
            <MenuItem>Add a member</MenuItem>
          </MenuList>

          <MenuItem>invitations</MenuItem>
          <MenuItem>cloudstorage</MenuItem>
          <MenuItem>invitations</MenuItem>
          <MenuLabel>Transactions</MenuLabel>
        </MenuList>
        <MenuList>
          <MenuItem>payments</MenuItem>
          <MenuItem>transfers</MenuItem>
          <MenuItem>balance</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  </Section>
)
