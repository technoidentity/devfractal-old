import 'jest-dom/extend-expect'
import React from 'react'

import { CalendarComponent } from '../Calendar'
import { calendarMonths, currentMonth, currentYear } from '../helpers'

import { fireEvent, render } from '@testing-library/react'

import '@testing-library/react/cleanup-after-each'

describe('Calendar Component', () => {
  test('clicks on Previous button', () => {
    const { getByText } = render(
      <CalendarComponent
        selectedDate={new Date()}
        onDateButtonClick={() => {
          return
        }}
      />,
    )
    const previousMonth: string = calendarMonths[currentMonth() - 2]

    const previousButton: HTMLElement = getByText(/previous/i)
    fireEvent.click(previousButton)
    expect(getByText(`${previousMonth}-${currentYear()}`)).toBeTruthy()
  })

  test('clicks on Next button', () => {
    const { getByText } = render(
      <CalendarComponent
        selectedDate={new Date()}
        onDateButtonClick={() => {
          return
        }}
      />,
    )
    const nextMonth: string = calendarMonths[currentMonth()]
    const nextButton: HTMLElement = getByText(/next/i)
    fireEvent.click(nextButton)
    expect(getByText(`${nextMonth}-${currentYear()}`)).toBeTruthy()
  })
})
