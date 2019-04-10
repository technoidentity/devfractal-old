### Menu

```jsx
import { Menu, MenuList, MenuItem } from './Menu'
;<Menu>
  <MenuLabel>General</MenuLabel>
  <MenuList>
    <MenuItem>
      <a>Dashboard</a>
    </MenuItem>
    <MenuItem>
      <a>Customers</a>
    </MenuItem>
  </MenuList>
  <MenuLabel>Administration</MenuLabel>
  <MenuList>
    <MenuItem>
      <a>TeamSettings</a>
    </MenuItem>
    <MenuItem>
      <a className="is-active"> Manage your team</a>
      <MenuList>
        <MenuItem>
          <a>Members</a>
        </MenuItem>
        <MenuItem>
          <a>Plugins</a>
        </MenuItem>
        <MenuItem>
          <a>Add a member</a>
        </MenuItem>
      </MenuList>
    </MenuItem>
    <MenuItem>
      <a>invitations</a>
    </MenuItem>
    <MenuItem>
      <a>cloudstorage</a>
    </MenuItem>
    <MenuItem>
      <a>invitations</a>
    </MenuItem>
    <MenuLabel>Transactions</MenuLabel>
  </MenuList>
  <MenuList>
    <MenuItem>
      <a>payments</a>
    </MenuItem>
    <MenuItem>
      <a>transfers</a>
    </MenuItem>
    <MenuItem>
      <a>balance</a>
    </MenuItem>
  </MenuList>
</Menu>
```