import * as React from 'react'

import { StepComponent } from './StepItem'
import { ProfileFormPropType } from './types'

export const ProfileForm: ({
  initialValues,
  accountValues,
  nextClick,
  prevClick,
  onInputChange,
}: ProfileFormPropType) => JSX.Element = ({
  initialValues,
  accountValues,
  nextClick,
  prevClick,
  onInputChange,
}: ProfileFormPropType) => {
  return (
    <div>
      <div>
        <StepComponent activePage={2} />

        <div className="step-content has-text-centered is-active">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">FirstName</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    name="firstName"
                    id="firstName"
                    type="text"
                    placeholder="FirstName"
                    data-validate="require"
                    onChange={e => {
                      e.persist()
                      onInputChange(e)
                    }}
                    value={initialValues.firstName}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">LastName</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    name="lastName"
                    id="lastName"
                    type="text"
                    placeholder="LastName"
                    data-validate="require"
                    onChange={e => {
                      e.persist()
                      onInputChange(e)
                    }}
                    value={initialValues.lastName}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Email</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    name="email"
                    id="email"
                    type="text"
                    placeholder="Email"
                    data-validate="require"
                    onChange={e => {
                      e.persist()
                      onInputChange(e)
                    }}
                    value={initialValues.email}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="section">
          <div className="has-text-centered is-gap">
            <a
              data-nav="previous"
              className="button is-light "
              onClick={e => {
                e.persist()
                prevClick(accountValues)
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
    </div>
  )
}
