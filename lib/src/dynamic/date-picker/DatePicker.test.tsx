import 'jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'
import { nop } from 'utils'
import { CalendarComponent } from './Calendar'
import { calendarMonths, currentMonth, currentYear } from './helpers'

describe('Calendar Component', () => {
  test('clicks on Previous button', () => {
    const { getByText } = render(
      <CalendarComponent selectedDate={new Date()} onDateButtonClick={nop} />,
    )
    const previousMonth: string = calendarMonths[currentMonth() - 2]
    const previousButton: HTMLElement = getByText(/previous/i)
    fireEvent.click(previousButton)
    expect(getByText(`${previousMonth}-${currentYear()}`)).toBeTruthy()
  })

  test('clicks on Next button', () => {
    const { getByText } = render(
      <CalendarComponent selectedDate={new Date()} onDateButtonClick={nop} />,
    )
    const nextMonth: string = calendarMonths[currentMonth()]
    const nextButton: HTMLElement = getByText(/next/i)
    fireEvent.click(nextButton)
    expect(getByText(`${nextMonth}-${currentYear()}`)).toBeTruthy()
  })
})
