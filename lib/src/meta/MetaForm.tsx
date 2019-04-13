import React from 'react'
import { FieldMT, FieldsMT } from './types'
import { Simple } from '../simple'
import { FormikActions } from 'formik'
import { Label } from '../form'
import { DropDown } from '../dynamic'

export interface MetaFormProps {
  readonly fields: FieldsMT
  readonly data: any
  onSubmit?(values: any, actions: FormikActions<any>): void
}

interface FieldEditorProps {
  readonly field: FieldMT
  readonly data: any
  readonly name: string
}

const BooleanEditor: React.FC<FieldEditorProps> = ({ data, field }) => (
  <>
    <Label>{field.label}</Label>
    <Simple.Checkbox name={name} checked={data} readOnly noLabel />
  </>
)

const NumberEditor: React.FC<FieldEditorProps> = ({ data, field }) => (
  <>
    <Label>{field.label}</Label>
    <Simple.Number name={name} value={data} />
  </>
)

const TextEditor: React.FC<FieldEditorProps> = ({ data, field }) => (
  <>
    <Label>{field.label}</Label>
    <Simple.Text name={name} value={data} />
  </>
)

const DateEditor: React.FC<FieldEditorProps> = ({ data, field }) => (
  <>
    <Label>{field.label}</Label>
    <input type="date" name={name} value={data} />
  </>
)

const EnumEditor: React.FC<FieldEditorProps> = ({ data, field }) => (
  <>
    <Label>{field.label}</Label>
    <Simple.Select name={name} value={data} />
  </>
)

const ArrayEditor: React.FC<FieldEditorProps> = ({ data, field }) => (
  <>
    <Label>{field.label}</Label>
    <h1>Complex Stuff Ahead</h1>
  </>
)

const ObjectEditor: React.FC<FieldEditorProps> = ({ data, field }) => (
  <>
    <Label>{field.label}</Label>
    <h1>Complex Stuff Ahead</h1>
  </>
)

export const FieldEditor: React.FC<FieldEditorProps> = props => {
  const kind: typeof props.field.meta.kind = props.field.meta.kind

  return (
    <>
      {kind === 'boolean' ? (
        <BooleanEditor {...props} />
      ) : kind === 'number' ? (
        <NumberEditor {...props} />
      ) : kind === 'string' ? (
        <TextEditor {...props} />
      ) : kind === 'date' ? (
        <DateEditor {...props} />
      ) : kind === 'enum' ? (
        <EnumEditor {...props} />
      ) : kind === 'array' ? (
        <ArrayEditor {...props} />
      ) : (
        <ObjectEditor {...props} />
      )}
    </>
  )
}

export const MetaForm: React.FC<MetaFormProps> = ({
  data,
  onSubmit,
  fields,
}) => {
  return (
    <Simple.Form initialValues={data} onSubmit={onSubmit}>
      {Object.keys(fields.fields).map(key => (
        <React.Fragment key={key} />
      ))}
      <Simple.FormButtons />
    </Simple.Form>
  )
}

// @TODO: metaToInitialValues
// @TODO: ArrayField using Formik Array
// @TODO: Dynamic Form
// @TODO: Meta Form
