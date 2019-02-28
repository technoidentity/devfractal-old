import * as React from 'react'
import { StepComponent } from './StepItem'

import { SocialFormPropType } from './types'

export const SocialForm: ({
  initialValues,
  profileValues,
  nextClick,
  prevClick,
  onInputChange,
}: SocialFormPropType) => JSX.Element = ({
  initialValues,
  profileValues,
  nextClick,
  prevClick,
  onInputChange,
}: SocialFormPropType) => {
  return (
    <div>
      <StepComponent activePage={3} />
      <div className="step-content has-text-centered is-active">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Facebook Account</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name="facebookAccount"
                  id="facebookAccount"
                  type="text"
                  placeholder="FacebookAccount"
                  data-validate="require"
                  onChange={e => {
                    e.persist()
                    onInputChange(e)
                  }}
                  value={initialValues.facebookAccount}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Twitter Account</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name="twitterAccount"
                  id="twitterAccount"
                  type="text"
                  placeholder="TwitterAccount"
                  data-validate="require"
                  onChange={e => {
                    e.persist()
                    onInputChange(e)
                  }}
                  value={initialValues.twitterAccount}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="has-text-centered">
          <a
            data-nav="previous"
            className="button is-light"
            onClick={e => {
              e.persist()
              prevClick(profileValues)
            }}
          >
            Previous
          </a>
          <a
            data-nav="next"
            className="button is-light"
            onClick={e => {
              e.persist()
              nextClick(initialValues)
            }}
          >
            Next
          </a>
        </div>
      </section>
    </div>
  )
}
