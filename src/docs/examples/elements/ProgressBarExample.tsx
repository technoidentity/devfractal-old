import React from 'react'
import { Box, ProgressBar, Section, Title } from '../devfractal'

export const BasicProgressBarExample: React.SFC = () => (
  <Section>
    <Title>Default Progress bar</Title>
    <Box>
      <ProgressBar value="15" max="100">
        15%
      </ProgressBar>
    </Box>
  </Section>
)

export const ProgressBarColorExample: React.SFC = () => (
  <Section>
    <Title>Colors</Title>
    <Box>
      <ProgressBar variant="primary" size="large" value="15" max="100">
        15%
      </ProgressBar>
      <ProgressBar variant="link" value="30" max="100">
        30%
      </ProgressBar>
      <ProgressBar variant="info" value="45" max="100">
        45%
      </ProgressBar>
      <ProgressBar variant="success" value="60" max="100">
        60%
      </ProgressBar>
      <ProgressBar variant="warning" value="75" max="100">
        75%
      </ProgressBar>
      <ProgressBar variant="danger" value="90" max="100">
        90%
      </ProgressBar>
      <ProgressBar variant="light" value="30" max="100">
        90%
      </ProgressBar>
      <ProgressBar variant="dark" value="45" max="100">
        90%
      </ProgressBar>
      <ProgressBar variant="white" value="60" max="100">
        90%
      </ProgressBar>
      <ProgressBar variant="black" value="75" max="100">
        90%
      </ProgressBar>
    </Box>
  </Section>
)

export const ProgressBarSizeExample: React.SFC = () => (
  <Section>
    <Title>Sizes</Title>
    <Box>
      <ProgressBar size="small" value="15" max="100">
        15%
      </ProgressBar>
      <ProgressBar value="30" max="100">
        30%
      </ProgressBar>
      <ProgressBar size="medium" value="45" max="100">
        45%
      </ProgressBar>
      <ProgressBar size="large" value="60" max="100">
        60%
      </ProgressBar>
    </Box>
  </Section>
)

export const ProgressBarExample: React.SFC = () => (
  <>
    <BasicProgressBarExample />
    <ProgressBarColorExample />
    <ProgressBarSizeExample />
  </>
)
