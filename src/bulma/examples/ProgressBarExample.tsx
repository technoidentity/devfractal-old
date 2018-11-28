import * as React from 'react'
import { ProgressBar } from '../ProgressBar'

export const ProgressBarExample: React.SFC = () => (
  <div>
    <ProgressBar value="15" max="100">
      15%
    </ProgressBar>
    <ProgressBar color="link" value="30" max="100">
      30%
    </ProgressBar>
    <ProgressBar color="info" value="45" max="100">
      45%
    </ProgressBar>
  </div>
)
