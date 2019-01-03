import React from 'react'
import { RoutedTabs, RoutedTabsItem } from '../devfractal'

export const ColumnsTab: React.SFC = () => (
  <RoutedTabs to="/columns" size="medium">
    <RoutedTabsItem value="basics">Basics</RoutedTabsItem>
    <RoutedTabsItem value="size">Size</RoutedTabsItem>
    <RoutedTabsItem value="responsive">Responsive</RoutedTabsItem>
    <RoutedTabsItem value="nesting">Nesting</RoutedTabsItem>
    <RoutedTabsItem value="gap">Gap</RoutedTabsItem>
    <RoutedTabsItem value="options">Options</RoutedTabsItem>
  </RoutedTabs>
)

export const ComponentsTab: React.SFC = () => (
  <RoutedTabs to="/components" size="medium">
    <RoutedTabsItem value="breadcrumb">Breadcrumb</RoutedTabsItem>
    <RoutedTabsItem value="card">Card</RoutedTabsItem>
    <RoutedTabsItem value="dropdown">Dropdown</RoutedTabsItem>
    <RoutedTabsItem value="menu">Menu</RoutedTabsItem>
    <RoutedTabsItem value="message">Message</RoutedTabsItem>
    <RoutedTabsItem value="modal">Modal</RoutedTabsItem>
    <RoutedTabsItem value="navbar">Navbar</RoutedTabsItem>
    <RoutedTabsItem value="pagination">Pagination</RoutedTabsItem>
    <RoutedTabsItem value="panel">Panel</RoutedTabsItem>
    <RoutedTabsItem value="tabs">Tabs</RoutedTabsItem>
  </RoutedTabs>
)

export const FormTab: React.SFC = () => (
  <RoutedTabs to="/form" size="medium">
    <RoutedTabsItem value="general">General</RoutedTabsItem>
    <RoutedTabsItem value="input">Input</RoutedTabsItem>
    <RoutedTabsItem value="button">Button</RoutedTabsItem>
    <RoutedTabsItem value="textarea">Textarea</RoutedTabsItem>
    <RoutedTabsItem value="select">Select</RoutedTabsItem>
    <RoutedTabsItem value="checkbox">Checkbox</RoutedTabsItem>
    <RoutedTabsItem value="radio">Radio</RoutedTabsItem>
    <RoutedTabsItem value="file">File</RoutedTabsItem>
  </RoutedTabs>
)

export const CompositesTab: React.SFC = () => (
  <RoutedTabs to="/composites" size="medium">
    <RoutedTabsItem value="simple">Simple Examples Form</RoutedTabsItem>
    <RoutedTabsItem value="general-form">General form</RoutedTabsItem>
    <RoutedTabsItem value="counter">Counter</RoutedTabsItem>
    <RoutedTabsItem value="todo">Todo</RoutedTabsItem>
    <RoutedTabsItem value="simple-todo">Simple todo</RoutedTabsItem>
    <RoutedTabsItem value="login-form-variants">
      Login Form Variants
    </RoutedTabsItem>
  </RoutedTabs>
)

export const LayoutTab: React.SFC = () => (
  <RoutedTabs to="/layout" size="medium">
    <RoutedTabsItem value="container">Container</RoutedTabsItem>
    <RoutedTabsItem value="level">Level</RoutedTabsItem>
    <RoutedTabsItem value="object">Media Object</RoutedTabsItem>
    <RoutedTabsItem value="hero">Hero</RoutedTabsItem>
    <RoutedTabsItem value="section">Section</RoutedTabsItem>
    <RoutedTabsItem value="footer">Footer</RoutedTabsItem>
    <RoutedTabsItem value="tiles">Tiles</RoutedTabsItem>
  </RoutedTabs>
)

export const ModifiersTab: React.SFC = () => (
  <RoutedTabs to="/modifiers" size="medium">
    <RoutedTabsItem value="helpers">Helpers</RoutedTabsItem>
    <RoutedTabsItem value="responsive">Responsive Helpers</RoutedTabsItem>
    <RoutedTabsItem value="colors">Color Helpers</RoutedTabsItem>
    <RoutedTabsItem value="typography">Typography helpers</RoutedTabsItem>
  </RoutedTabs>
)

export const ElementsTab: React.SFC = () => (
  <RoutedTabs to="/elements" size="medium">
    <RoutedTabsItem value="box">Box</RoutedTabsItem>
    <RoutedTabsItem value="content">Content</RoutedTabsItem>
    <RoutedTabsItem value="delete">Delete</RoutedTabsItem>
    <RoutedTabsItem value="icon">Icon</RoutedTabsItem>
    <RoutedTabsItem value="image">Image</RoutedTabsItem>
    <RoutedTabsItem value="notification">Notification</RoutedTabsItem>
    <RoutedTabsItem value="bars">Progress bars</RoutedTabsItem>
    <RoutedTabsItem value="table">Table</RoutedTabsItem>
    <RoutedTabsItem value="tag">Tag</RoutedTabsItem>
    <RoutedTabsItem value="title">Title</RoutedTabsItem>
    <RoutedTabsItem value="table-content">TableContentLoader</RoutedTabsItem>
  </RoutedTabs>
)
