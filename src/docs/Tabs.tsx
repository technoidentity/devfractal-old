import React from 'react'
import { Tabs, TabsItem } from '../bulma/components'

export const ColumnsTab: React.SFC = () => (
  <Tabs to="/columns" size="medium">
    <TabsItem value="basics">Basics</TabsItem>
    <TabsItem value="size">Size</TabsItem>
    <TabsItem value="responsive">Responsive</TabsItem>
    <TabsItem value="nesting">Nesting</TabsItem>
    <TabsItem value="gap">Gap</TabsItem>
    <TabsItem value="options">Options</TabsItem>
  </Tabs>
)

export const ComponentsTab: React.SFC = () => (
  <Tabs to="/components" size="medium">
    <TabsItem value="breadcrumb">Breadcrumb</TabsItem>
    <TabsItem value="card">Card</TabsItem>
    <TabsItem value="dropdown">Dropdown</TabsItem>
    <TabsItem value="menu">Menu</TabsItem>
    <TabsItem value="message">Message</TabsItem>
    <TabsItem value="modal">Modal</TabsItem>
    <TabsItem value="navbar">Navbar</TabsItem>
    <TabsItem value="pagination">Pagination</TabsItem>
    <TabsItem value="panel">Panel</TabsItem>
    <TabsItem value="tabs">Tabs</TabsItem>
  </Tabs>
)

export const FormTab: React.SFC = () => (
  <Tabs to="/form" size="medium">
    <TabsItem value="general">General</TabsItem>
    <TabsItem value="input">Input</TabsItem>
    <TabsItem value="button">Button</TabsItem>
    <TabsItem value="textarea">Textarea</TabsItem>
    <TabsItem value="select">Select</TabsItem>
    <TabsItem value="checkbox">Checkbox</TabsItem>
    <TabsItem value="radio-button">Radio</TabsItem>
    <TabsItem value="file">File</TabsItem>
  </Tabs>
)

export const CompositesTab: React.SFC = () => (
  <Tabs to="/composites" size="medium">
    <TabsItem value="simple">Simple</TabsItem>
    <TabsItem value="general-form">General form</TabsItem>
    <TabsItem value="login-form">Login form</TabsItem>
    <TabsItem value="counter">Counter</TabsItem>
    <TabsItem value="todo">Todo</TabsItem>
  </Tabs>
)

export const LayoutTab: React.SFC = () => (
  <Tabs to="/layout" size="medium">
    <TabsItem value="container">Container</TabsItem>
    <TabsItem value="level">Level</TabsItem>
    <TabsItem value="object">Media Object</TabsItem>
    <TabsItem value="hero">Hero</TabsItem>
    <TabsItem value="section">Section</TabsItem>
    <TabsItem value="footer">Footer</TabsItem>
    <TabsItem value="tiles">Tiles</TabsItem>
  </Tabs>
)

export const ModifiersTab: React.SFC = () => (
  <Tabs to="modifiers" size="medium">
    <TabsItem value="helpers">Helpers</TabsItem>
    <TabsItem value="helpers">Responsive Helpers</TabsItem>
    <TabsItem value="colors">Color Helpers</TabsItem>
    <TabsItem value="typography">Typography helpers</TabsItem>
  </Tabs>
)

export const ElementsTab: React.SFC = () => (
  <Tabs to="/elements" size="medium">
    <TabsItem value="box">Box</TabsItem>
    <TabsItem value="delete">Delete</TabsItem>
    <TabsItem value="icon">Icon</TabsItem>
    <TabsItem value="image">Image</TabsItem>
    <TabsItem value="notification">Notification</TabsItem>
    <TabsItem value="bars">Progress bars</TabsItem>
    <TabsItem value="table">Table</TabsItem>
    <TabsItem value="tag">Tag</TabsItem>
    <TabsItem value="title">Title</TabsItem>
  </Tabs>
)
