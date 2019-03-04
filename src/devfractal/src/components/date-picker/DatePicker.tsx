import * as React from 'react'
import { Button, Field, Section } from '../../lib'
import { CalendarComponent, getDateISO } from './internal'

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
    <Section>
      <Field addons>
        <Button variant="info" state="static">
          Birthday
        </Button>
        <Button
          variant="info"
          outlined
          type="submit"
          onClick={toggleDateButtonClick}
        >
          {getDateISO(date)}
        </Button>
      </Field>
      <Section>
        {isCalendarOpen && (
          <CalendarComponent
            selectedDate={date}
            onDateButtonClick={handleDateButtonClick}
          />
        )}
      </Section>
    </Section>
  )
}
