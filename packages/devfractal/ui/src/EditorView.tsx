import React from 'react'
import { EditorViewProps } from 'srtp-core'
import { boolean, date, number } from 'srtp-utils'
import { Section } from './core'
import { Simple } from './simple'

export function EditorView<T extends Record<string, any>>({
  data,
  id,
  schema,
  onSubmit,
}: EditorViewProps<T>): JSX.Element {
  return (
    <Section>
      <Simple.Form
        validationSchema={schema}
        initialValues={data}
        onSubmit={onSubmit}
      >
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
          </React.Fragment>
        ))}
        <Simple.FormButtons />
      </Simple.Form>
    </Section>
  )
}
