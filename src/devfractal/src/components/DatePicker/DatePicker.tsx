import * as React from 'react'

import 'bulma/css/bulma.css'

import { CalendarComponent } from './Calendar'

import { getDateISO } from './helpers'

// tslint:disable
// ts-ignore

export interface DatePickerState {
  readonly date: Date
  readonly isCalendarOpen: boolean
}

export class DatePicker extends React.Component<{}, DatePickerState> {
  readonly state = {
    isCalendarOpen: false,
    date: new Date(),
  }

  readonly toggleDateButtonClick = () => {
    this.setState({ isCalendarOpen: !this.state.isCalendarOpen })
  }

  readonly handleDateButtonClick = (
    day: number,
    month: number,
    year: number,
  ) => {
    const date = new Date(year, month, day)
    this.setState({ date, isCalendarOpen: false })
  }

  render(): JSX.Element {
    return (
      <section>
        <div className="field has-addons">
          <input
            className="button is-static is-info"
            type="text"
            placeholder="BirthDay"
          />
          <button
            className=" button is-outlined  is-info "
            type="submit "
            onClick={this.toggleDateButtonClick}
          >
            {getDateISO(this.state.date)}
          </button>
        </div>
        <div>
          {this.state.isCalendarOpen && (
            <CalendarComponent onDateButtonClick={this.handleDateButtonClick} />
          )}
        </div>
      </section>
    )
  }
}
