import * as React from 'react'
import {
  Panel,
  PanelHeading,
  PanelBlock,
  PanelTabs,
  PanelTabsItem,
} from '../components/Panel'

import { Button } from '../Button'
import { Input } from '../Input'

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
      <PanelTabsItem>forks</PanelTabsItem>
    </PanelTabs>
    <PanelBlock>bulma</PanelBlock>
    <PanelBlock>message</PanelBlock>
    <PanelBlock>marksheet</PanelBlock>
    <PanelBlock>miniresetcss</PanelBlock>
    <PanelBlock>jgthms.github.io</PanelBlock>
    <PanelBlock>marksheet</PanelBlock>
    <PanelBlock>miniresetcss</PanelBlock>
    <PanelBlock>
      <Button color="primary" fullwidth>
        reset all filters
      </Button>
    </PanelBlock>
  </Panel>
)
