import * as React from 'react'
import { Tabs } from '../components'
import { TabsItem } from '../components/Tabs'

export const Elements: React.SFC = () => (
  <Tabs to="/elements" size="medium">
    <TabsItem name="Box" active>
      Box
    </TabsItem>
    <TabsItem name="Button">Button</TabsItem>
    <TabsItem name="Content">Content</TabsItem>
    <TabsItem name="Delete">Delete</TabsItem>
    <TabsItem name="Icon">Icon</TabsItem>
    <TabsItem name="Image">Image</TabsItem>
    <TabsItem name="Notification">Notification</TabsItem>
    <TabsItem name="bars">Progress bars</TabsItem>
    <TabsItem name="Table">Table</TabsItem>
    <TabsItem name="Tag">Tag</TabsItem>
    <TabsItem name="Title">Title</TabsItem>
  </Tabs>
)
