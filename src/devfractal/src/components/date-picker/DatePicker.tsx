import * as React from 'react'

import 'bulma/css/bulma.css'

import { CalendarComponent } from './Calendar'

import { getDateISO } from './helpers'

export interface DatePickerState {
  readonly date: Date
  readonly isCalendarOpen: boolean
}

export const DatePicker: () => JSX.Element = () => {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false)
  const [date, setDate] = React.useState(new Date())

  const toggleDateButtonClick: () => void = () => {
    setIsCalendarOpen(!isCalendarOpen)
  }

  const handleDateButtonClick: (
    day: number,
    month: number,
    year: number,
  ) => void = (day: number, month: number, year: number) => {
    const newDate: Date = new Date(year, month, day)
    setDate(newDate)
    setIsCalendarOpen(false)
  }

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
          onClick={toggleDateButtonClick}
        >
          {getDateISO(date)}
        </button>
      </div>
      <div>
        {isCalendarOpen && (
          <CalendarComponent onDateButtonClick={handleDateButtonClick} />
        )}
      </div>
    </section>
  )
}
