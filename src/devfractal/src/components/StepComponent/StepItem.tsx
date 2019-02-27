import * as React from 'react'
import './App.css'

export const StepItemActive: ({
  id,
  name,
}: {
  readonly id?: number | undefined
  readonly name?: string | undefined
}) => JSX.Element = ({ id = 1, name = '' }) => {
  return (
    <div className="step-item is-active is-success">
      <div className="step-marker">{id}</div>
      <div className="step-details">
        <p className="step-title">{name}</p>
      </div>
    </div>
  )
}

export const StepItem: ({
  id,
  name,
}: {
  readonly id?: number | undefined
  readonly name?: string | undefined
}) => JSX.Element = ({ id = 1, name = '' }) => {
  return (
    <div className="step-item  is-success">
      <div className="step-marker">{id}</div>
      <div className="step-details">
        <p className="step-title">{name}</p>
      </div>
    </div>
  )
}

export const StepComponent: ({
  activePage,
}: {
  readonly activePage?: number | undefined
}) => JSX.Element = ({ activePage = 1 }) => {
  const formNames: ReadonlyArray<string> = [
    'Account',
    'Profile',
    'Social',
    'Finish',
  ]
  return (
    <div className="steps" id="stepsDemo">
      {Array.from(Array(activePage).keys()).map(x => (
        <StepItemActive key={x} id={x + 1} name={formNames[x]} />
      ))}
      {Array.from(Array(formNames.length - activePage).keys()).map(x => (
        <StepItem
          key={x}
          id={activePage + x + 1}
          name={formNames[activePage + x]}
        />
      ))}
    </div>
  )
}
