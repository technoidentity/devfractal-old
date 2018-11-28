import * as React from 'react'
import { Menu, MenuLabel, MenuList, MenuListItem } from '../components/Menu'

export const MenuExample: React.SFC = () => (
  <Menu>
    <MenuLabel>General</MenuLabel>
    <MenuList>
      <MenuListItem>
        <a>Dashboard</a>
      </MenuListItem>
      <MenuListItem>
        <a>Customers</a>
      </MenuListItem>
    </MenuList>
    <MenuLabel>Administration</MenuLabel>
    <MenuList>
      <MenuListItem>
        <a>Team settings</a>
      </MenuListItem>
      <MenuListItem>
        <a className="is-active">Manage Your Team</a>
        <MenuList>
          <MenuListItem>
            <a>members</a>
          </MenuListItem>
          <MenuListItem>
            <a>plugins</a>
          </MenuListItem>
          <MenuListItem>
            <a>add a member</a>
          </MenuListItem>
        </MenuList>
      </MenuListItem>
      <MenuListItem>
        <a>Invitations</a>
      </MenuListItem>
      <MenuListItem>
        <a>Cloud Storage Environment Settings</a>
      </MenuListItem>
      <MenuListItem>
        <a>Authentication</a>
      </MenuListItem>
    </MenuList>
    <MenuLabel>Transactions</MenuLabel>
    <MenuList>
      <MenuListItem>
        <a>payments</a>
      </MenuListItem>
      <MenuListItem>
        <a>transfers</a>
      </MenuListItem>
      <MenuListItem>
        <a>balance</a>
      </MenuListItem>
    </MenuList>
  </Menu>
)
