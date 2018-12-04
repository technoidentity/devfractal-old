import * as React from 'react'
import { ProgressBar } from '../ProgressBar'
import { Section } from '../Section'

export const ProgressBarExample: React.SFC = () => (
  <Section>
    <ProgressBar className="is-primary is-large" value="15" max="100">
      15%
    </ProgressBar>
    <ProgressBar color="link" value="30" max="100">
      30%
    </ProgressBar>
    <ProgressBar color="info" size="small" value="45" max="100">
      45%
    </ProgressBar>
  </Section>
)
