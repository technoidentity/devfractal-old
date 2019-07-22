import * as React from 'react'
import { Button, Field, Section } from '../../lib'
import { CalendarComponent } from './Calendar'
import { toISODate } from './helpers'

export const DatePicker: React.FC = () => {
  const [calendarOpen, setCalendarOpen] = React.useState(false)
  const [date, setDate] = React.useState(new Date())

  const toggle: () => void = () => {
    setCalendarOpen(!calendarOpen)
  }

  const handleDateButtonClick: (date: Date) => void = date => {
    setDate(date)
    setCalendarOpen(false)
  }

  return (
    <Section>
      <Field addons>
        <Button variant="info" state="static">
          Birthday
        </Button>
        <Button variant="info" outlined type="submit" onClick={toggle}>
          {toISODate(date)}
        </Button>
      </Field>
      <Section>
        {calendarOpen && (
          <CalendarComponent
            selectedDate={date}
            onDateButtonClick={handleDateButtonClick}
          />
        )}
      </Section>
    </Section>
  )
}