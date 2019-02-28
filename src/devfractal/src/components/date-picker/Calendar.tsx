import * as React from 'react'

import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'

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

export const DisplayMonthDaysTable: ({
  weeksMonth,
  onDateButtonClick,
  month,
  year,
}: DisplayMonthDaysTableProps) => JSX.Element = ({
  weeksMonth,
  onDateButtonClick,
  month,
  year,
}: DisplayMonthDaysTableProps) => (
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
        {weeksMonth.map((week, index) => (
          // @TODO: index as key is a really bad idea!
          <tr key={index}>
            {week ? (
              week.map((date, i) => {
                const currentDate: Date = new Date(date.join('-'))

                return isSameDay(currentDate) ? (
                  <td key={i}>
                    <button className="button is-info is-rounded is-size-7-mobile	">
                      {currentDate.getDate()}
                    </button>
                  </td>
                ) : isSameMonth(
                    currentDate,
                    new Date([year, month, 1].join('-')),
                  ) ? (
                  <td key={i}>
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
                  <td key={i}>
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
export class CalendarComponent extends React.Component<
  CalendarProps,
  CalendarState
> {
  constructor(props: CalendarProps) {
    super(props)
    const date: Date = new Date()
    this.state = {
      current: date,
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    }
  }

  readonly calendarDates = () => {
    const { current, month, year } = this.state

    // @TODO: We do this a lot in this project.
    // Need to have a more robust way to convert strings to numbers
    const calendarMonth: number = month || +current.getMonth() + 1
    const calendarYear: number = year || current.getFullYear()

    return getCalendarDates(calendarMonth, calendarYear)
  }

  readonly gotoPreviousMonth = () => {
    const { month, year } = this.state
    this.setState(getPreviousMonth(month, year))
  }

  readonly gotoNextMonth = () => {
    const { month, year } = this.state
    this.setState(getNextMonth(month, year))
  }

  render(): JSX.Element {
    const displayCalendarDays: ReadonlyArray<
      ReadonlyArray<string | number>
    > = this.calendarDates()

    return (
      <div>
        <div className="box">
          <div className="level is-mobile">
            <div
              className="button is-info is-inverted"
              onClick={this.gotoPreviousMonth}
            >
              <div className="level-left">
                <span className="icon ">
                  <i className="fa fa-caret-left" />
                </span>
                Previous
              </div>
            </div>
            <div className="has-text-info	 ">
              {calendarMonths[this.state.month - 1]}-{this.state.year}
            </div>
            <div
              className="button is-info is-inverted"
              onClick={this.gotoNextMonth}
            >
              <div className="level-right">
                <span className="icon ">
                  <i className="fa fa-caret-right" />
                </span>
                Next
              </div>
            </div>
          </div>

          <div>
            <>
              <DisplayMonthDaysTable
                weeksMonth={partitionArray(displayCalendarDays, 7)}
                month={this.state.month}
                year={this.state.year}
                onDateButtonClick={this.props.onDateButtonClick}
              />
            </>
          </div>
        </div>
      </div>
    )
  }
}
