import { Paper } from '@material-ui/core'
import { FormikHelpers } from 'formik'
import React from 'react'
import { boolean, date, number } from 'technoidentity-utils'
import { ObjectSchema } from 'yup'
import { Simple } from './SimpleForm'

export interface EditorViewProps<T extends {}> {
  readonly data: T
  readonly id?: keyof T
  readonly schema?: ObjectSchema<T>
  onSubmit?(values: T, actions: FormikHelpers<T>): void
}

export function EditorView<T extends {}>({
  data,
  id,
  schema,
  onSubmit,
}: EditorViewProps<T>): JSX.Element {
  return (
    <Paper>
      <Simple.Form
        validationSchema={schema}
        initialValues={data}
        onSubmit={onSubmit}
      >
        {/* @TODO: use Grid */}
        {Object.keys(data).map(key => (
          <React.Fragment key={key}>
            {key !== id &&
              (boolean.is(data[key]) ? (
                <Simple.Checkbox name={key} />
              ) : number.is(data[key]) ? (
                <Simple.Number name={key} />
              ) : date.is(data[key]) ? (
                <Simple.Date name={key} />
              ) : (
                <Simple.Text name={key} />
              ))}
            <br />
          </React.Fragment>
        ))}
        <Simple.FormButtons />
      </Simple.Form>
    </Paper>
  )
}
