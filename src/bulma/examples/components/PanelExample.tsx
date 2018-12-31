import {
  faBook,
  faCodeBranch,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  Panel,
  PanelBlock,
  PanelHeading,
  PanelIcon,
  PanelTabs,
  PanelTabsItem,
} from '../../components/Panel'
import { Button, CheckBox, Input } from '../../form'
import { Section } from '../../layout'

export const PanelExample: React.SFC = () => (
  <Section>
    <Panel>
      <PanelHeading>repositories</PanelHeading>
      <PanelBlock>
        <Input
          type="text"
          placeholder="search"
          ctrlSize="small"
          leftIcon={faSearch}
        />
      </PanelBlock>
      <PanelTabs>
        <PanelTabsItem active>all</PanelTabsItem>
        <PanelTabsItem>public</PanelTabsItem>
        <PanelTabsItem>sources</PanelTabsItem>
        <PanelTabsItem className="active">forks</PanelTabsItem>
      </PanelTabs>
      <PanelBlock>
        <PanelIcon icon={faBook} />
        bulma
      </PanelBlock>

      <PanelBlock>
        <PanelIcon icon={faBook} /> marksheet
      </PanelBlock>
      <PanelBlock>
        {' '}
        <PanelIcon icon={faBook} />
        miniresetcss
      </PanelBlock>
      <PanelBlock>
        {' '}
        <PanelIcon icon={faBook} />
        jgthms.github.io
      </PanelBlock>
      <PanelBlock>
        {' '}
        <PanelIcon icon={faCodeBranch} />
        daniellowtw/infboard
      </PanelBlock>
      <PanelBlock active>
        {' '}
        <PanelIcon icon={faCodeBranch} />
        mojs
      </PanelBlock>
      <PanelBlock>
        <CheckBox>remember me</CheckBox>
      </PanelBlock>
      <PanelBlock>
        <Button variant="link" fullWidth outlined>
          reset all filters
        </Button>
      </PanelBlock>
    </Panel>
  </Section>
)
