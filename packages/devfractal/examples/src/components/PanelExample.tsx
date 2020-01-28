import {
  faBook,
  faCodeBranch,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  CheckBox,
  Input,
  Panel,
  PanelBlock,
  PanelHeading,
  PanelIcon,
  PanelTabs,
  PanelTabsItem,
  Section,
} from '@stp/ui-core'
import React from 'react'

export const PanelExample: React.FC = () => (
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
        <PanelTabsItem>private</PanelTabsItem>
        <PanelTabsItem>sources</PanelTabsItem>
        <PanelTabsItem>forks</PanelTabsItem>
      </PanelTabs>
      <PanelBlock active>
        <PanelIcon icon={faBook} />
        devfractal
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
      <PanelBlock>
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
