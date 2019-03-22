import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { isSameDay, isThisMonth } from 'date-fns'
import React from 'react'
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
} from '../../index'
import {
  calendarMonths,
  calenderDates,
  nextMonth,
  previousMonth,
  weekDays,
} from './index'

const partitionArray: <T>(
  array: ReadonlyArray<ReadonlyArray<T>>,
  size: number,
) => ReadonlyArray<ReadonlyArray<ReadonlyArray<T>>> = (array, size) =>
  range(array.length)
    .map(i => (i % size === 0 ? array.slice(i, i + size) : []))
    .filter(e => e.length !== 0)

export interface MonthDaysTableProps {
  readonly weeksMonth: ReadonlyArray<
    ReadonlyArray<ReadonlyArray<string | number>>
  >
  readonly month: number
  readonly year: number
  onDateButtonClick(date: Date): void
}

export interface MonthDaysListProps {
  readonly weeksMonth: ReadonlyArray<
    ReadonlyArray<ReadonlyArray<string | number>> | undefined
  >

  onDateButtonClick(date: Date): void
}

export interface MonthDaysProps {
  readonly week: ReadonlyArray<ReadonlyArray<string | number>> | undefined

  onDateButtonClick(date: Date): void
}

export const MonthDays: ({
  week,
  onDateButtonClick,
}: MonthDaysProps) => JSX.Element = ({
  week,
  onDateButtonClick,
}: MonthDaysProps) => {
  return (
    // @TODO: index as key is a really bad idea!
    <Tr>
      {week ? (
        week.map(date => {
          const dateStr: string = date.join('-')
          const currentDate: Date = new Date(dateStr)

          return isSameDay(currentDate, new Date()) ? (
            <Td key={dateStr}>
              <Button variant="info" rounded className="is-size-7-mobile">
                {currentDate.getDate()}
              </Button>
            </Td>
          ) : isThisMonth(currentDate) ? (
            <Td key={dateStr}>
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
            <Td key={dateStr}>
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

export const MonthDaysList: ({
  weeksMonth,
  onDateButtonClick,
}: MonthDaysListProps) => JSX.Element = ({
  weeksMonth,
  onDateButtonClick,
}: MonthDaysListProps) => (
  // @TODO: Possible to split this into multiple local components?
  <Section>
    <Table bordered striped hoverable narrow fullWidth>
      <TableHead>
        <Tr>
          {weekDays.map(m => (
            <Th key={m} textColor="info" className="is-size-7-mobile">
              {m}
            </Th>
          ))}
        </Tr>
      </TableHead>
      <TableBody>
        {weeksMonth.map(
          (week: ReadonlyArray<ReadonlyArray<string | number>> | undefined) => {
            const [first] = Array.of(week)
            return (
              <MonthDays
                key={`week-${(first || []).join('-')}`}
                week={week}
                onDateButtonClick={onDateButtonClick}
              />
            )
          },
        )}
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
  const [currentMonth, setCurrentMonth] = React.useState(
    selectedDate.getMonth() + 1,
  )

  const [currentYear, setCurrentYear] = React.useState(
    selectedDate.getFullYear(),
  )

  const calendarDates: () => ReadonlyArray<
    ReadonlyArray<string | number>
  > = () => calenderDates(currentMonth, currentYear)

  const gotoPreviousMonth: () => void = () => {
    const { month, year } = previousMonth(currentMonth, currentYear)
    setCurrentMonth(month)
    setCurrentYear(year)
  }

  const gotoNextMonth: () => void = () => {
    const { month, year } = nextMonth(currentMonth, currentYear)
    setCurrentMonth(month)
    setCurrentYear(year)
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
          {calendarMonths[currentMonth - 1]}-{currentYear}
        </Section>
        <Button variant="info" inverted onClick={gotoNextMonth}>
          <LevelItem direction="right">
            Next
            <Icon icon={faCaretRight} />
          </LevelItem>
        </Button>
      </Level>
      <Section>
        <MonthDaysList
          weeksMonth={partitionArray(displayCalendarDays, 7)}
          onDateButtonClick={onDateButtonClick}
        />
      </Section>
    </Section>
  )
}
