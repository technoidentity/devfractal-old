import { Checkbox, Grid, Paper, Typography } from '@material-ui/core'
import { format } from 'date-fns'
import React from 'react'
import { Get } from 'technoidentity-crud'
import * as t from 'technoidentity-utils'
import { camelCaseToPhrase, date } from 'technoidentity-utils'

export function isFunction(x: unknown): x is Function {
  return typeof x === 'function'
}

export function formatDate(date: Date | undefined): string | undefined {
  return date && format(date, 'dd/MM/yyyy')
}

const Header: React.FC<{ readonly objectKey: string }> = ({ objectKey }) => (
  <Typography variant="h6">{camelCaseToPhrase(objectKey)}</Typography>
)

const Value: React.FC<{
  readonly objectValue: string
}> = ({ objectValue }) =>
  t.boolean.is(objectValue) ? (
    <Checkbox checked={objectValue} readOnly />
  ) : date.is(objectValue) ? (
    <Typography>{formatDate(objectValue)}</Typography>
  ) : (
    <>{objectValue}</>
  )

export interface ViewerViewProps<T extends {}> {
  readonly data: T
}

export function ViewerView<T extends {}>({
  data,
}: ViewerViewProps<T>): JSX.Element {
  return (
    <Paper>
      <Grid container>
        {Object.keys(data).map(key => (
          <React.Fragment key={key}>
            <Grid item xs={6}>
              <Header objectKey={key} />
            </Grid>
            <Grid item xs={6}>
              <Value objectValue={data[key]} />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Paper>
  )
}

export interface ViewerProps<T extends {}> {
  readonly data: T | (() => Promise<T>)
}

export function Viewer<T extends {}>({ data }: ViewerProps<T>): JSX.Element {
  if (isFunction(data)) {
    return <Get asyncFn={data}>{data => <ViewerView data={data} />}</Get>
  }
  return <ViewerView data={data} />
}
