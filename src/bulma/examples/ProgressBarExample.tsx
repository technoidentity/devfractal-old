import React from 'react'
import { ProgressBar } from '../elements'
import { Section } from '../layout'

export const ProgressBarExample: React.SFC = () => (
  <Section>
    <ProgressBar className="is-primary" size="large" value="15" max="100">
      15%
    </ProgressBar>
    <ProgressBar variant="link" value="30" max="100">
      30%
    </ProgressBar>
    <ProgressBar variant="info" size="small" value="45" max="100">
      45%
    </ProgressBar>
  </Section>
)
