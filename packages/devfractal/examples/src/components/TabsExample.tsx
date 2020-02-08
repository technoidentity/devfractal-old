import {
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faFileAlt,
  faFilm,
  faImage,
  faMusic,
} from '@fortawesome/free-solid-svg-icons'
import { Tabs, TabsItem } from 'stp-ui'
import { Box, Icon, Section, Title } from 'stp-ui'
import React from 'react'

export const TabsExamples: React.FC = () => (
  <>
    <Section>
      <Tabs name="basicTab50" value="pictures" readOnly>
        <TabsItem value="pictures">Pictures</TabsItem>
        <TabsItem value="music">Music</TabsItem>
        <TabsItem value="videos">Videos</TabsItem>
        <TabsItem value="documents">Documents</TabsItem>
      </Tabs>
    </Section>
  </>
)

export const AlignmentTabExample: React.FC = () => (
  <>
    <Title size="6">Centered</Title>
    <Tabs name="basicTab2" value="pictures" alignment="centered" readOnly>
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>
    <Title size="6">Right</Title>
    <Tabs name="basicTab3" value="pictures" alignment="right" readOnly>
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>
  </>
)

export const IconsTabExample: React.FC = () => (
  <>
    <Tabs name="basicTab4" value="pictures" alignment="centered" readOnly>
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
  </>
)

export const SizesTabExample: React.FC = () => (
  <>
    <Tabs name="basicTab5" value="pictures" size="small" readOnly>
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>
    <Tabs name="basicTab6" value="pictures" size="medium" readOnly>
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>
    <Tabs name="basicTab7" value="pictures" size="large" readOnly>
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>
  </>
)

export const StyleTabsExample: React.FC = () => (
  <>
    <Title size="6">Boxed</Title>
    <Tabs name="basicTab8" value="pictures" tabsStyle="boxed" readOnly>
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
    <Title size="6">Toggle</Title>
    <Tabs name="basicTab9" value="pictures" tabsStyle="toggle" readOnly>
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
    <Title size="6">Toggle-Rounded</Title>
    <Tabs
      name="basicTab10"
      value="pictures"
      tabsStyle="toggle-rounded"
      readOnly
    >
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
    <Title size="6">Fullwidth</Title>
    <Tabs name="basicTab11" fullWidth readOnly>
      <TabsItem value="left">
        <Icon icon={faAngleLeft} />
        <span>Left</span>
      </TabsItem>
      <TabsItem value="up">
        <Icon icon={faAngleUp} />
        <span>Up</span>
      </TabsItem>
      <TabsItem value="right">
        <Icon icon={faAngleRight} />
        <span>Right</span>
      </TabsItem>
    </Tabs>
  </>
)

export const CombiningTabsExample: React.FC = () => (
  <>
    <Tabs
      name="basicTab20"
      value="pictures"
      tabsStyle="boxed"
      alignment="centered"
      readOnly
    >
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
    <Tabs
      name="basicTab12"
      value="pictures"
      tabsStyle="toggle"
      fullWidth
      readOnly
    >
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
    <Tabs
      name="basicTab30"
      value="pictures"
      tabsStyle="boxed"
      alignment="centered"
      size="medium"
      readOnly
    >
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
    <Tabs
      name="basicTab40"
      value="pictures"
      tabsStyle="toggle"
      fullWidth
      size="large"
      readOnly
    >
      <TabsItem value="pictures">
        <Icon icon={faImage} />
        <span>Pictures</span>
      </TabsItem>
      <TabsItem value="music">
        <Icon icon={faMusic} />
        <span>Music</span>
      </TabsItem>
      <TabsItem value="videos">
        <Icon icon={faFilm} />
        <span>Videos</span>
      </TabsItem>
      <TabsItem value="documents">
        <Icon icon={faFileAlt} />
        <span>Documents</span>
      </TabsItem>
    </Tabs>
  </>
)

export const UncontrolledTabExample: React.FC = () => (
  <Section>
    <Tabs name="secondTab" defaultValue="documents" size="medium">
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>
  </Section>
)

export const SelectedTabExample: React.FC = () => (
  <Section>
    <Tabs value="music" name="secondTab" size="medium" readOnly>
      <TabsItem value="pictures">Pictures</TabsItem>
      <TabsItem value="music">Music</TabsItem>
      <TabsItem value="videos">Videos</TabsItem>
      <TabsItem value="documents">Documents</TabsItem>
    </Tabs>
  </Section>
)

export const ControlledTabsExample: React.FC = () => {
  const [value, set] = React.useState('music')
  return (
    <>
      <Box>
        <Title size="4">Controlled Tab({value})</Title>
        <Tabs
          value={value}
          onChange={({ value }) => {
            set(value || 'music')
          }}
          name="secondTab2"
          size="medium"
        >
          <TabsItem value="pictures">Pictures</TabsItem>
          <TabsItem value="music">Music</TabsItem>
          <TabsItem value="videos">Videos</TabsItem>
          <TabsItem value="documents">Documents</TabsItem>
        </Tabs>
      </Box>
    </>
  )
}

export const StaticTabsExample: React.FC = () => (
  <Section>
    <Title textAlignment="centered">Static Tabs</Title>
    <Box>
      <Title size="4">Basic Tab</Title>
      <TabsExamples />
    </Box>
    <Box>
      <Title size="4">Alignment</Title>
      <AlignmentTabExample />
    </Box>
    <Box>
      <Title size="4">Icons</Title>
      <IconsTabExample />
    </Box>
    <Box>
      <Title size="4">Sizes</Title>
      <SizesTabExample />
    </Box>
    <Box>
      <Title size="4">Styles</Title>
      <StyleTabsExample />
    </Box>
    <Box>
      <Title size="4">Combining</Title>
      <CombiningTabsExample />
    </Box>
  </Section>
)

export const DynamicTabsExample: React.FC = () => (
  <Section>
    <Title textAlignment="centered">Dynamic Tabs</Title>
    <Box>
      <Title size="4">Uncontrolled Tab</Title>
      <UncontrolledTabExample />
    </Box>
    <Box>
      <Title size="4">
        'value' is provided, but not 'onChange' Tabs will be readonly
      </Title>
      <SelectedTabExample />
    </Box>
    <ControlledTabsExample />
  </Section>
)

export const TabsExample: React.FC = () => (
  <>
    <DynamicTabsExample />
    <StaticTabsExample />
  </>
)
