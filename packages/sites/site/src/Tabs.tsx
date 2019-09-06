import { RoutedTabs, RoutedTabsItem } from 'devfractal-ui'
import React from 'react'

export const ComponentsTab: React.FC = () => (
  <RoutedTabs to="/components" size="medium">
    <RoutedTabsItem value="card">Card</RoutedTabsItem>
    <RoutedTabsItem value="dropdown">DropDown</RoutedTabsItem>
    <RoutedTabsItem value="breadcrumb">Breadcrumb</RoutedTabsItem>
    <RoutedTabsItem value="menu">Menu</RoutedTabsItem>
    <RoutedTabsItem value="message">Message</RoutedTabsItem>
    <RoutedTabsItem value="modal">Modal</RoutedTabsItem>
    <RoutedTabsItem value="navbar">Navbar</RoutedTabsItem>
    <RoutedTabsItem value="pagination">Pagination</RoutedTabsItem>
    <RoutedTabsItem value="panel">Panel</RoutedTabsItem>
    <RoutedTabsItem value="tabs">Tabs</RoutedTabsItem>
    <RoutedTabsItem value="step">Step</RoutedTabsItem>
  </RoutedTabs>
)

export const CompositesTab: React.FC = () => (
  <RoutedTabs to="/composites" size="medium">
    <RoutedTabsItem value="simple-form">Simple Form</RoutedTabsItem>
    <RoutedTabsItem value="general-form">General form</RoutedTabsItem>
    <RoutedTabsItem value="counter">Counter</RoutedTabsItem>
    <RoutedTabsItem value="treeview">TreeView</RoutedTabsItem>
    <RoutedTabsItem value="todo">Todo</RoutedTabsItem>
    <RoutedTabsItem value="github-card">Github Card</RoutedTabsItem>
    <RoutedTabsItem value="cart-app">Cart</RoutedTabsItem>
    <RoutedTabsItem value="simple-todo">Simple todo</RoutedTabsItem>
    <RoutedTabsItem value="login-form-variants">
      Login Form Variants
    </RoutedTabsItem>
  </RoutedTabs>
)
