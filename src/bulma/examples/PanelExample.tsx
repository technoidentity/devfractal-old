import React from 'react'
import {
  Panel,
  PanelBlock,
  PanelHeading,
  PanelTabs,
  PanelTabsItem,
} from '../components/Panel'
import { Button } from '../form/Button'
import { CheckBox } from '../form/CheckBox'
import { Input } from '../form/Input'

export const PanelExample: React.SFC = () => (
  <Panel>
    <PanelHeading>repositories</PanelHeading>
    <PanelBlock>
      <Input type="text" />
    </PanelBlock>
    <PanelTabs>
      <PanelTabsItem active>all</PanelTabsItem>
      <PanelTabsItem>public</PanelTabsItem>
      <PanelTabsItem>sources</PanelTabsItem>
      <PanelTabsItem className="active">forks</PanelTabsItem>
    </PanelTabs>
    <PanelBlock>bulma</PanelBlock>
    <PanelBlock active>message</PanelBlock>
    <PanelBlock>marksheet</PanelBlock>
    <PanelBlock>miniresetcss</PanelBlock>
    <PanelBlock>jgthms.github.io</PanelBlock>
    <PanelBlock>marksheet</PanelBlock>
    <PanelBlock active>miniresetcss</PanelBlock>
    <PanelBlock>
      <CheckBox>Remember me</CheckBox>
    </PanelBlock>
    <PanelBlock>
      <Button variant="primary">reset all filters</Button>
    </PanelBlock>
  </Panel>
)
