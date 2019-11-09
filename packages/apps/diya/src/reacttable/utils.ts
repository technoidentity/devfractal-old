import { format } from 'date-fns'
import matchSorter from 'match-sorter'

export function formatDate(date: Date | undefined): string | undefined {
  return date && format(date, 'yyyy/MM/dd')
}

export function fuzzyTextFilterFn(
  rows: readonly any[],
  id: string,
  filterValue: string,
) {
  return matchSorter(rows, filterValue, {
    keys: [row => row.values[id]],
    threshold: matchSorter.rankings.WORD_STARTS_WITH,
  })
}
