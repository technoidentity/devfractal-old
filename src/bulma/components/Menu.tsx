import * as React from 'react'

export const Menu: React.SFC = ({ children }) => (
  <aside className="menu">{children}</aside>
)

export const MenuLabel: React.SFC = ({ children }) => (
  <p className="menu-label">{children}</p>
)

export const MenuListItem: React.SFC = ({ children }) => <li>{children}</li>

export const MenuList: React.SFC = ({ children }) => (
  <ul className="menu-list">{children}</ul>
)
