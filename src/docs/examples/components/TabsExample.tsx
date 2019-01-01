import React from 'react'
import { Value } from 'react-powerplug'
import { Tabs, TabsItem } from '../../../devfractal/components'
import { Title } from '../../../devfractal/elements'

export const TabsExample: React.SFC = () => (
  <div>
    <Title>Uncontrolled Tab components</Title>
    <Tabs name="secondTab" defaultValue="documents" size="medium">
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>

    <Title>
      When 'value' is provided, but not 'noChange' Tabs will be readonly
    </Title>
    <Tabs selectedTab="music" name="secondTab" size="medium">
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>

    <Value
      initial={'music'}
      render={({ value, set }) => (
        <>
          <Title>Controlled Tab({value})</Title>
          <Tabs
            selectedTab={value}
            onTabChange={({ value }) => {
              set(value || 'music')
            }}
            name="secondTab"
            size="medium"
          >
            <TabsItem value="pictures">Pictures</TabsItem>
            <TabsItem value="music">Music</TabsItem>
            <TabsItem value="videos">Videos</TabsItem>
            <TabsItem value="documents">Documents</TabsItem>
          </Tabs>
        </>
      )}
    />
  </div>
)
