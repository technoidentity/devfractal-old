import * as React from 'react'

interface MenuLabelProps {
  readonly children: React.ReactChild
}

export const Menu: React.SFC = ({ children }) => (
  <aside className="menu">{children}</aside>
)

export const MenuLabel: React.SFC<MenuLabelProps> = ({ children }) => (
  <p className="menu-label">{children}</p>
)

export const MenuListItem: React.SFC = ({ children }) => <li>{children}</li>

export const MenuList: React.SFC = ({ children }) => (
  <ul className="menu-list">{children}</ul>
)
