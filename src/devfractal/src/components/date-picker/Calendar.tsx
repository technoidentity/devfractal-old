import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import shortid from 'shortid'
import {
  Button,
  Icon,
  Level,
  LevelItem,
  Null,
  range,
  Section,
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Tr,
} from '../../lib'
import {
  calendarMonths,
  calenderDates,
  isSameDay,
  isSameMonth,
  nextMonth,
  previousMonth,
  weekDays,
} from './internal'

const partitionArray: <T>(
  array: ReadonlyArray<ReadonlyArray<T>>,
  size: number,
) => ReadonlyArray<ReadonlyArray<ReadonlyArray<T>>> = (array, size) =>
  range(array.length)
    .map(i => (i % size === 0 ? array.slice(i, i + size) : []))
    .filter(e => e.length !== 0)

export interface DisplayMonthDaysTableProps {
  readonly weeksMonth: ReadonlyArray<
    ReadonlyArray<ReadonlyArray<string | number>>
  >
  readonly month: number
  readonly year: number
  onDateButtonClick(date: Date): void
}

export interface DisplayMonthDaysListProps {
  readonly weeksMonth: ReadonlyArray<
    ReadonlyArray<ReadonlyArray<string | number>> | undefined
  >
  readonly month: number
  readonly year: number
  onDateButtonClick(date: Date): void
}

export interface DisplayMonthDaysProps {
  readonly week: ReadonlyArray<ReadonlyArray<string | number>> | undefined

  readonly month: number
  readonly year: number
  onDateButtonClick(date: Date): void
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
    <Tr key={shortid.generate()}>
      {week ? (
        week.map(date => {
          const currentDate: Date = new Date(date.join('-'))

          return isSameDay(currentDate) ? (
            <Td key={shortid.generate()}>
              <Button variant="info" rounded className="is-size-7-mobile">
                {currentDate.getDate()}
              </Button>
            </Td>
          ) : isSameMonth(currentDate, new Date([year, month, 1].join('-'))) ? (
            <Td key={shortid.generate()}>
              <Button
                textColor="info"
                rounded
                className="is-size-7-mobile"
                onClick={() => onDateButtonClick(currentDate)}
              >
                {currentDate.getDate()}
              </Button>
            </Td>
          ) : (
            <Td key={shortid.generate()}>
              <Button
                textColor="grey-darker"
                rounded
                className="is-size-7-mobile"
                onClick={() => onDateButtonClick(currentDate)}
              >
                {currentDate.getDate()}
              </Button>
            </Td>
          )
        })
      ) : (
        <Null />
      )}
    </Tr>
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
  <Section>
    <Table bordered striped hoverable narrow fullWidth>
      <TableHead>
        <Tr>
          {weekDays.map(m => (
            <Th
              key={shortid.generate()}
              textColor="info"
              className="is-size-7-mobile"
            >
              {m}
            </Th>
          ))}
        </Tr>
      </TableHead>
      <TableBody>
        {weeksMonth.map(week => (
          <DisplayMonthDays
            key={shortid.generate()}
            week={week}
            month={month}
            year={year}
            onDateButtonClick={onDateButtonClick}
          />
        ))}
      </TableBody>
    </Table>
  </Section>
)

export interface CalendarState {
  readonly current: Date
  readonly month: number
  readonly year: number
}

export interface CalendarProps {
  readonly selectedDate: Date
  onDateButtonClick(date: Date): void
}

// @TODO: Use hooks or something avoid classes!
export const CalendarComponent: ({
  selectedDate,
  onDateButtonClick,
}: CalendarProps) => JSX.Element = ({
  selectedDate,
  onDateButtonClick,
}: CalendarProps) => {
  const [state, setState] = React.useState({
    currentMonth: selectedDate.getMonth() + 1,
    currentYear: selectedDate.getFullYear(),
  })

  const calendarDates: () => ReadonlyArray<
    ReadonlyArray<string | number>
  > = () => {
    const { currentMonth, currentYear } = state
    const calendarMonth: number = currentMonth
    const calendarYear: number = currentYear
    return calenderDates(calendarMonth, calendarYear)
  }

  const gotoPreviousMonth: () => void = () => {
    const { currentMonth, currentYear } = state
    const { month, year } = previousMonth(currentMonth, currentYear)
    setState({ ...state, currentMonth: month, currentYear: year })
  }

  const gotoNextMonth: () => void = () => {
    const { currentMonth, currentYear } = state
    const { month, year } = nextMonth(currentMonth, currentYear)
    setState({ ...state, currentMonth: month, currentYear: year })
  }

  const displayCalendarDays: ReadonlyArray<
    ReadonlyArray<string | number>
  > = calendarDates()

  return (
    <Section>
      <Level className="is-mobile">
        <Button variant="info" inverted onClick={gotoPreviousMonth}>
          <LevelItem direction="left">
            <Icon icon={faCaretLeft} />
            Previous
          </LevelItem>
        </Button>
        <Section textColor="info">
          {calendarMonths[state.currentMonth - 1]}-{state.currentYear}
        </Section>
        <Button variant="info" inverted onClick={gotoNextMonth}>
          <LevelItem direction="right">
            Next
            <Icon icon={faCaretRight} />
          </LevelItem>
        </Button>
      </Level>
      <Section>
        <DisplayMonthDaysList
          weeksMonth={partitionArray(displayCalendarDays, 7)}
          month={state.currentMonth}
          year={state.currentYear}
          onDateButtonClick={onDateButtonClick}
        />
      </Section>
    </Section>
  )
}
