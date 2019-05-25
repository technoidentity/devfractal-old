import React from 'react'
import { FaBook, FaCodeBranch, FaSearch } from 'react-icons/fa'
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
} from 'technoidentity-devfractal'

export const PanelExample: React.FC = () => (
  <Section>
    <Panel>
      <PanelHeading>repositories</PanelHeading>
      <PanelBlock>
        <Input
          type="text"
          placeholder="search"
          ctrlSize="small"
          leftIcon={FaSearch}
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
        <PanelIcon icon={FaBook} />
        devfractal
      </PanelBlock>

      <PanelBlock>
        <PanelIcon icon={FaBook} /> marksheet
      </PanelBlock>
      <PanelBlock>
        {' '}
        <PanelIcon icon={FaBook} />
        miniresetcss
      </PanelBlock>
      <PanelBlock>
        {' '}
        <PanelIcon icon={FaBook} />
        jgthms.github.io
      </PanelBlock>
      <PanelBlock>
        {' '}
        <PanelIcon icon={FaCodeBranch} />
        daniellowtw/infboard
      </PanelBlock>
      <PanelBlock>
        {' '}
        <PanelIcon icon={FaCodeBranch} />
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
