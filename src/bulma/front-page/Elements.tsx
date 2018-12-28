import React from 'react'
import { Tabs, TabsItem } from '../components/Tabs'

export const Elements: React.SFC = () => (
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
