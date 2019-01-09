import React from 'react'
import { State } from '../../../utils'
import { Tabs, TabsItem, Title } from '../devfractal'

export const TabsExample: React.SFC = () => (
  <div>
    <Title>Uncontrolled Tab components</Title>
    <Tabs name="firstTab" defaultValue="documents" size="medium">
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

    <State
      initial={'music'}
      render={({ value, set }) => (
        <>
          <Title>Controlled Tab({value})</Title>
          <Tabs
            selectedTab={value}
            onTabChange={({ value }) => value && set(value)}
            name="thirdTab"
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
