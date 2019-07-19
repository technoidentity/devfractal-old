import React from 'react'
import {
  Box,
  ProgressBar as ProgressBarComponent,
  Section,
  Title,
} from 'technoidentity-devfractal'

const BasicProgressBarExample: React.FC = () => (
  <Section>
    <Title>Default Progress bar</Title>
    <Box>
      <ProgressBarComponent value="15" max="100">
        15%
      </ProgressBarComponent>
    </Box>
  </Section>
)

const ProgressBarColorExample: React.FC = () => (
  <Section>
    <Title>Colors</Title>
    <Box>
      <ProgressBarComponent variant="primary" size="large" value="15" max="100">
        15%
      </ProgressBarComponent>
      <ProgressBarComponent variant="link" value="30" max="100">
        30%
      </ProgressBarComponent>
      <ProgressBarComponent variant="info" value="45" max="100">
        45%
      </ProgressBarComponent>
      <ProgressBarComponent variant="success" value="60" max="100">
        60%
      </ProgressBarComponent>
      <ProgressBarComponent variant="warning" value="75" max="100">
        75%
      </ProgressBarComponent>
      <ProgressBarComponent variant="danger" value="90" max="100">
        90%
      </ProgressBarComponent>
      <ProgressBarComponent variant="light" value="30" max="100">
        90%
      </ProgressBarComponent>
      <ProgressBarComponent variant="dark" value="45" max="100">
        90%
      </ProgressBarComponent>
      <ProgressBarComponent variant="white" value="60" max="100">
        90%
      </ProgressBarComponent>
      <ProgressBarComponent variant="black" value="75" max="100">
        90%
      </ProgressBarComponent>
    </Box>
  </Section>
)

const ProgressBarSizeExample: React.FC = () => (
  <Section>
    <Title>Sizes</Title>
    <Box>
      <ProgressBarComponent size="small" value="15" max="100">
        15%
      </ProgressBarComponent>
      <ProgressBarComponent value="30" max="100">
        30%
      </ProgressBarComponent>
      <ProgressBarComponent size="medium" value="45" max="100">
        45%
      </ProgressBarComponent>
      <ProgressBarComponent size="large" value="60" max="100">
        60%
      </ProgressBarComponent>
    </Box>
  </Section>
)

export const ProgressBar: React.FC = () => (
  <>
    <BasicProgressBarExample />
    <ProgressBarColorExample />
    <ProgressBarSizeExample />
  </>
)
