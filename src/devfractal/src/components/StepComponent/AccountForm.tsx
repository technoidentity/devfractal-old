import * as React from 'react'

import { StepComponent } from './StepItem'

import { AccountFormPropType } from './types'

export const AccountForm: ({
  initialValues,
  nextClick,
  onInputChange,
}: AccountFormPropType) => JSX.Element = ({
  initialValues,
  nextClick,
  onInputChange,
}: AccountFormPropType) => {
  return (
    <div>
      <div>
        <StepComponent activePage={1} />
        <div className="step-content has-text-centered is-active">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Username</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    name="userName"
                    id="username"
                    type="text"
                    placeholder="Username"
                    data-validate="require"
                    onChange={e => {
                      e.persist()
                      onInputChange(e)
                    }}
                    value={initialValues.userName}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Password</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    data-validate="require"
                    onChange={e => {
                      e.persist()
                      onInputChange(e)
                    }}
                    value={initialValues.password}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Confirm Password</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    placeholder="ConfirmPassword"
                    data-validate="require"
                    onChange={e => {
                      e.persist()
                      onInputChange(e)
                    }}
                    value={initialValues.confirmPassword}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="has-text-centered  ">
          <a data-nav="previous" className="button is-light is-static">
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
