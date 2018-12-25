import * as React from 'react'
import { Tabs } from '../components'
import { TabsItem } from '../components/Tabs'

export const Elements: React.SFC = () => (
  <Tabs to="/elements" urlSeparator="-" size="medium">
    <TabsItem name="box" active>
      Box
    </TabsItem>
    <TabsItem name="delete">Delete</TabsItem>
    <TabsItem name="icon">Icon</TabsItem>
    <TabsItem name="image">Image</TabsItem>
    <TabsItem name="notification">Notification</TabsItem>
    <TabsItem name="bars">Progress bars</TabsItem>
    <TabsItem name="table">Table</TabsItem>
    <TabsItem name="tag">Tag</TabsItem>
    <TabsItem name="title">Title</TabsItem>
  </Tabs>
)
