import React from 'react'
import { Tabs, TabsItem } from '../components/Tabs'

export const TabsExample: React.SFC = () => (
  <div>
    <Tabs
      to="/tabs-1"
      urlSeparator="-"
      className="is-centered  is-toggle is-toggle-rounded"
      size="medium"
    >
      <TabsItem name="Pictures">Pictures</TabsItem>
      <TabsItem name="Music" className="is-active">
        Music
      </TabsItem>
      <TabsItem name="Videos">Videos</TabsItem>
      <TabsItem name="Documents">Documents</TabsItem>
    </Tabs>
    <Tabs to="/tabs-2" size="medium">
      <TabsItem name="Pictures">Pictures</TabsItem>
      <TabsItem name="Music">Music</TabsItem>
      <TabsItem name="Videos" active>
        Videos
      </TabsItem>
      <TabsItem name="Documents">Documents</TabsItem>
    </Tabs>
  </div>
)
