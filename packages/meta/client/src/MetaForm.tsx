import { Simple } from 'devfractal-simple'
import { Field, Label } from 'devfractal-ui-core'
import { FormikActions } from 'formik'
import { EnumMT, Mixed, MT, PrimitiveMT } from 'meta-core'
import React from 'react'
import { camelCaseToPhrase } from 'technoidentity-utils'
import { metaToInitialValues } from './metaToInitialValues'
import { mtToYup } from './metaToYup'

interface EditorProps {
  readonly name: string
  readonly label?: string
}

const BooleanEditor: React.FC<EditorProps> = ({ label, name }) => (
  <Simple.Checkbox name={name}>
    <Label>{label || camelCaseToPhrase(name)}</Label>
  </Simple.Checkbox>
)

const NumberEditor: React.FC<EditorProps> = ({ label, name }) => (
  <Simple.Number name={name} label={label} />
)

const TextEditor: React.FC<EditorProps> = ({ label, name }) => (
  <Simple.Text name={name} label={label} />
)

const DateEditor: React.FC<EditorProps> = ({ label, name }) => (
  <Field>
    <Label>{label || camelCaseToPhrase(name)}</Label>
    <input className="input" type="date" name={name} />
  </Field>
)

interface EnumEditorProps {
  readonly name: string
  readonly label?: string
  readonly meta: EnumMT
}

const EnumEditor: React.FC<EnumEditorProps> = ({ label, name, meta }) => (
  <Field>
    <Label>{label || camelCaseToPhrase(name)}</Label>
    <Simple.Select name={name}>
      {meta.values.map(v => (
        <option key={v} value={v}>
          {camelCaseToPhrase(v)}
        </option>
      ))}
    </Simple.Select>
  </Field>
)

interface SimpleMetaEditorProps {
  readonly name: string
  readonly label?: string
  readonly meta: PrimitiveMT
}

const PrimitiveMetaEditor: React.FC<SimpleMetaEditorProps> = ({
  label,
  name,
  meta: { kind },
}) => (
  <>
    {kind === 'boolean' ? (
      <BooleanEditor name={name} label={label} />
    ) : kind === 'number' ? (
      <NumberEditor name={name} label={label} />
    ) : kind === 'string' ? (
      <TextEditor name={name} label={label} />
    ) : kind === 'date' ? (
      <DateEditor name={name} label={label} />
    ) : (
      <h1>`ERROR: Unknown meta kind: ${kind}`</h1>
    )}
  </>
)

interface ObjectMetaEditorProps {
  readonly meta: MT
}

const ObjectMetaEditor: React.FC<ObjectMetaEditorProps> = ({ meta }) => (
  <>
    {Object.keys(meta.properties).map(key => {
      const props: Mixed = meta.properties[key]

      return (
        <React.Fragment key={key}>
          {props.kind === 'array' ? (
            <h1>@TODO: Implement array meta editor</h1>
          ) : props.kind === 'object' ? (
            <h1>@TODO: Implement nesting object meta</h1>
          ) : props.kind === 'enum' ? (
            <EnumEditor name={key} meta={props} />
          ) : (
            <PrimitiveMetaEditor name={key} meta={props} />
          )}
        </React.Fragment>
      )
    })}
  </>
)

export interface MetaFormProps {
  readonly meta: MT
  onSubmit?(values: any, actions: FormikActions<any>): void
}

export const MetaForm: React.FC<MetaFormProps> = ({ onSubmit, meta }) => {
  return (
    <Simple.Form
      initialValues={metaToInitialValues(meta)}
      validationSchema={mtToYup(meta)}
      onSubmit={onSubmit}
    >
      <ObjectMetaEditor meta={meta} />
      <Simple.FormButtons />
    </Simple.Form>
  )
}
