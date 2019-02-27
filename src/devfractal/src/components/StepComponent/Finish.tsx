import * as React from 'react'
import { StepComponent } from './StepItem'

import { FinishFormPropType } from './types'

export const FinishForm: ({
  socialValues,
  prevClick,
}: FinishFormPropType) => JSX.Element = ({
  socialValues,
  prevClick,
}: FinishFormPropType) => {
  return (
    <div>
      <StepComponent activePage={4} />
      <div className="step-content has-text-centered">
        <h1 className="title is-4">Your account is now created!</h1>
      </div>
      <section className="section">
        <div className="has-text-centered">
          <a
            data-nav="previous"
            className="button is-light"
            onClick={e => {
              e.persist()
              prevClick(socialValues)
            }}
          >
            Previous
          </a>
          <a data-nav="next" className="button is-light is-static">
            Next
          </a>
        </div>
      </section>
    </div>
  )
}
