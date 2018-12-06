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
import { CheckBox } from '../CheckBox'

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
    <PanelBlock className="is-active">miniresetcss</PanelBlock>
    <PanelBlock>
      <CheckBox>Remember me</CheckBox>
    </PanelBlock>
    <PanelBlock>
      <Button color="primary" className="is-link is-outlined is-fullwidth">
        reset all filters
      </Button>
    </PanelBlock>
  </Panel>
)
