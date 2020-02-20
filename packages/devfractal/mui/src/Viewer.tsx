import { Checkbox, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import {
  boolean,
  camelCaseToPhrase,
  date,
  formatDate,
} from 'technoidentity-utils'

const Header: React.FC<{ readonly objectKey: string }> = ({ objectKey }) => (
  <Typography variant="h6">{camelCaseToPhrase(objectKey)}</Typography>
)

const Value: React.FC<{
  readonly objectValue: string
}> = ({ objectValue }) =>
  boolean.is(objectValue) ? (
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
