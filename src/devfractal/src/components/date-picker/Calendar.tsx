import * as React from 'react'

import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'

import * as shortid from 'shortid'

import { Null } from '../../utils'
import {
  calendarMonths,
  getCalendarDates,
  getNextMonth,
  getPreviousMonth,
  isSameDay,
  isSameMonth,
} from './helpers'

const partitionArray: <T>(
  array: ReadonlyArray<ReadonlyArray<T>>,
  size: number,
) => ReadonlyArray<ReadonlyArray<ReadonlyArray<T>>> = (array, size) =>
  Array.from(Array(array.length).keys())
    .map(i => (i % size === 0 ? array.slice(i, i + size) : []))
    .filter(e => e.length !== 0)

export interface DisplayMonthDaysTableProps {
  readonly weeksMonth: ReadonlyArray<
    ReadonlyArray<ReadonlyArray<string | number>>
  >
  readonly month: number
  readonly year: number
  onDateButtonClick(day: number, month: number, year: number): void
}

export interface DisplayMonthDaysListProps {
  readonly weeksMonth: ReadonlyArray<
    ReadonlyArray<ReadonlyArray<string | number>> | undefined
  >
  readonly month: number
  readonly year: number
  onDateButtonClick(day: number, month: number, year: number): void
}

export interface DisplayMonthDaysProps {
  readonly week: ReadonlyArray<ReadonlyArray<string | number>> | undefined

  readonly month: number
  readonly year: number
  onDateButtonClick(day: number, month: number, year: number): void
}

export const DisplayMonthDays: ({
  week,
  onDateButtonClick,
  month,
  year,
}: DisplayMonthDaysProps) => JSX.Element = ({
  week,
  onDateButtonClick,
  month,
  year,
}: DisplayMonthDaysProps) => {
  return (
    // @TODO: index as key is a really bad idea!
    <tr key={shortid.generate()}>
      {week ? (
        week.map(date => {
          const currentDate: Date = new Date(date.join('-'))

          return isSameDay(currentDate) ? (
            <td key={shortid.generate()}>
              <button className="button is-info is-rounded is-size-7-mobile	">
                {currentDate.getDate()}
              </button>
            </td>
          ) : isSameMonth(currentDate, new Date([year, month, 1].join('-'))) ? (
            <td key={shortid.generate()}>
              <button
                className="button is-rounded has-text-info is-size-7-mobile		 "
                onClick={() =>
                  onDateButtonClick(
                    currentDate.getDate(),
                    currentDate.getMonth(),
                    currentDate.getFullYear(),
                  )
                }
              >
                {currentDate.getDate()}
              </button>
            </td>
          ) : (
            <td key={shortid.generate()}>
              <button
                className="button is-rounded has-text-grey is-size-7-mobile		"
                onClick={() =>
                  onDateButtonClick(
                    currentDate.getDate(),
                    currentDate.getMonth(),
                    currentDate.getFullYear(),
                  )
                }
              >
                {currentDate.getDate()}
              </button>
            </td>
          )
        })
      ) : (
        <Null />
      )}
    </tr>
  )
}

export const DisplayMonthDaysList: ({
  weeksMonth,
  onDateButtonClick,
  month,
  year,
}: DisplayMonthDaysListProps) => JSX.Element = ({
  weeksMonth,
  onDateButtonClick,
  month,
  year,
}: DisplayMonthDaysListProps) => (
  // @TODO: Possible to split this into multiple local components?
  <div>
    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th className="has-text-info is-size-7-mobile	">SUN</th>
          <th className="has-text-info is-size-7-mobile		">MON</th>
          <th className="has-text-info is-size-7-mobile		">TUE</th>
          <th className="has-text-info is-size-7-mobile		">WED</th>
          <th className="has-text-info is-size-7-mobile		">THU</th>
          <th className="has-text-info is-size-7-mobile		">FRI</th>
          <th className="has-text-info is-size-7-mobile		">SAT</th>
        </tr>
      </thead>
      <tbody>
        {weeksMonth.map(week => (
          <DisplayMonthDays
            key={shortid.generate()}
            week={week}
            month={month}
            year={year}
            onDateButtonClick={onDateButtonClick}
          />
        ))}
      </tbody>
    </table>
  </div>
)

export interface CalendarState {
  readonly current: Date
  readonly month: number
  readonly year: number
}

export interface CalendarProps {
  onDateButtonClick(day: number, month: number, year: number): void
}

// @TODO: Use hooks or something avoid classes!
export const CalendarComponent: ({
  onDateButtonClick,
}: CalendarProps) => JSX.Element = ({ onDateButtonClick }: CalendarProps) => {
  const [state, setState] = React.useState({
    current: new Date(),
    currentMonth: new Date().getMonth() + 1,
    currentYear: new Date().getFullYear(),
  })

  const calendarDates: () => ReadonlyArray<
    ReadonlyArray<string | number>
  > = () => {
    const { current, currentMonth, currentYear } = state
    const calendarMonth: number = currentMonth || current.getMonth() + 1
    const calendarYear: number = currentYear || current.getFullYear()
    return getCalendarDates(calendarMonth, calendarYear)
  }

  const gotoPreviousMonth: () => void = () => {
    const { currentMonth, currentYear } = state
    const { month, year } = getPreviousMonth(currentMonth, currentYear)
    setState({ ...state, currentMonth: month, currentYear: year })
  }

  const gotoNextMonth: () => void = () => {
    const { currentMonth, currentYear } = state
    const { month, year } = getNextMonth(currentMonth, currentYear)
    setState({ ...state, currentMonth: month, currentYear: year })
  }

  const displayCalendarDays: ReadonlyArray<
    ReadonlyArray<string | number>
  > = calendarDates()

  return (
    <div>
      <div className="box  ">
        <div className="level is-mobile">
          <div
            className="button is-info is-inverted"
            onClick={gotoPreviousMonth}
          >
            <div className="level-left">
              <span className="icon ">
                <i className="fa fa-caret-left" />
              </span>
              Previous
            </div>
          </div>
          <div className="has-text-info	 ">
            {calendarMonths[state.currentMonth - 1]}-{state.currentYear}
          </div>
          <div className="button is-info is-inverted" onClick={gotoNextMonth}>
            <div className="level-right">
              <span className="icon ">
                <i className="fa fa-caret-right" />
              </span>
              Next
            </div>
          </div>
        </div>

        <div>
          <DisplayMonthDaysList
            weeksMonth={partitionArray(displayCalendarDays, 7)}
            month={state.currentMonth}
            year={state.currentYear}
            onDateButtonClick={onDateButtonClick}
          />
        </div>
      </div>
    </div>
  )
}
