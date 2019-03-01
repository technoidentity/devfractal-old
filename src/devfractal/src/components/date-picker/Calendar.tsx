import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import * as shortid from 'shortid'
import {
  Button,
  Icon,
  Level,
  LevelItem,
  Null,
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
  getCalendarDates,
  getNextMonth,
  getPreviousMonth,
  isSameDay,
  isSameMonth,
} from './internal'

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
                onClick={() =>
                  onDateButtonClick(
                    currentDate.getDate(),
                    currentDate.getMonth(),
                    currentDate.getFullYear(),
                  )
                }
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
                onClick={() =>
                  onDateButtonClick(
                    currentDate.getDate(),
                    currentDate.getMonth(),
                    currentDate.getFullYear(),
                  )
                }
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
          <Th textColor="info" className="is-size-7-mobile">
            SUN
          </Th>
          <Th textColor="info" className="is-size-7-mobile">
            MON
          </Th>
          <Th textColor="info" className="is-size-7-mobile">
            TUE
          </Th>
          <Th textColor="info" className="is-size-7-mobile">
            WED
          </Th>
          <Th textColor="info" className="is-size-7-mobile">
            THU
          </Th>
          <Th textColor="info" className="is-size-7-mobile">
            FRI
          </Th>
          <Th textColor="info" className="is-size-7-mobile">
            SAT
          </Th>
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
