import { Form, Formik, FormikActions } from 'formik'
import React from 'react'
import {
  CheckBox,
  CheckboxField,
  Column,
  Columns,
  Container,
  DateField,
  InputField,
  SelectField,
  Simple,
  SimpleArrayField,
  SimpleArrayFieldComponentProps,
  Text,
} from 'technoidentity-devfractal'
import { Refinements } from 'technoidentity-meta-core'

export interface MetaBuildFormProps {
  onSubmit(values: any, formikActions: FormikActions<any>): void
}

type RefinementsKind = 'number' | 'string' | 'date' | 'array'

interface Meta {
  readonly label: string
  readonly kind: RefinementsKind
  readonly refinements: Refinements
}

// tslint:disable-next-line:typedef
const newMeta: () => Meta = () => ({
  label: '',
  kind: 'number',
  refinements: {},
})

interface NumberRefinementsSubFormProps {
  readonly name: string
}

const NumberRefinementsSubForm: React.FC<NumberRefinementsSubFormProps> = ({name}) => {
  const [isSign, setIsSign] = React.useState<boolean>(false)
  const [isMin, setIsMin] = React.useState<boolean>(false)
  const [isMax, setIsMax] = React.useState<boolean>(false)
  return (
    <>
      <Columns>
        <Column narrow>
          <CheckboxField name={`${name}.integer`} />
        </Column>
        <Column narrow>integer</Column>
        <Column />
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox onChange={evt => setIsSign(evt.target.checked)}/>
        </Column>
        <Column narrow>sign</Column>
        <Column>
          {isSign && <SelectField name={`${name}.sign`}>
            <option value="undefined">Select an option</option>
            <option value="positive">positive</option>
            <option value="negative">negative</option>
          </SelectField>}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox onChange={evt => setIsMin(evt.target.checked)}/>
        </Column>
        <Column>minimum</Column>
        <Column>
          {isMin && <InputField type="number" name={`${name}.min`} placeholder="Minimum Value" />}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox onChange={evt => setIsMax(evt.target.checked)}/>
        </Column>
        <Column>maximum</Column>
        <Column>
          {isMax && <InputField type="number" name={`${name}.max`} placeholder="Maximum Value" />}
        </Column>
      </Columns>
    </>
  )
}

interface StringRefinementsSubFormProps {
  readonly name: string
}

const StringRefinementsSubForm: React.FC<StringRefinementsSubFormProps> = ({name}) => {
  const [isBase, setIsBase] = React.useState<boolean>(false)
  const [isCase, setIsCase] = React.useState<boolean>(false)
  const [isFixed, setIsFixed] = React.useState<boolean>(false)
  const [isMin, setIsMin] = React.useState<boolean>(false)
  const [isMax, setIsMax] = React.useState<boolean>(false)
  return (
    <>
      <Columns>
        <Column narrow>
          <CheckBox onChange={evt => setIsBase(evt.target.checked)}/>
        </Column>
        <Column narrow>base</Column>
        <Column>
          {isBase && <Simple.Select name={`${name}.base`}>
            <option value="undefined">Select an option</option>
            <option value="email">email</option>
            <option value="url">url</option>
          </Simple.Select>}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox onChange={evt => setIsCase(evt.target.checked)}/>
        </Column>
        <Column narrow>case</Column>
        <Column>
          {isCase && <Simple.Select name={`${name}.case`}>
            <option value="undefined">Select an option</option>
            <option value="lower">lower</option>
            <option value="upper">upper</option>
          </Simple.Select>}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox onChange={evt => setIsFixed(evt.target.checked)} />
        </Column>
        <Column>fixed</Column>
        <Column>
          {isFixed && <InputField type="number" name={`${name}.strLength.fixed`} placeholder="Exact length" />}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox onChange={evt => setIsMin(evt.target.checked)}/>
        </Column>
        <Column>minimum length</Column>
        <Column>
          {isMin && <InputField type="number" name={`${name}.strLength.min`} placeholder="Minimum length" />}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox onChange={evt => setIsMax(evt.target.checked)}/>
        </Column>
        <Column>maximum length</Column>
        <Column>
          {isMax && <InputField type="number" name={`${name}.strLength.max`} placeholder="Maximum Value" />}
        </Column>
      </Columns>
    </>
  )
}

interface ArrayRefinementsSubFormProps {
  readonly name: string
}

const ArrayRefinementsSubForm: React.FC<ArrayRefinementsSubFormProps> = ({name}) => {
  const [isMax, setIsMax] = React.useState<boolean>(false)
  const [isMin, setIsMin] = React.useState<boolean>(false)
  return (
    <>
      <Columns>
        <Column narrow>
          <CheckBox onChange={evt => setIsMax(evt.target.checked)}/>
        </Column>
        <Column>maximum array elements</Column>
        <Column>
          {isMax && <InputField type="number" name={`${name}.maxArrayLength`} placeholder="maximum array elements" />}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox onChange={evt => setIsMin(evt.target.checked)}/>
        </Column>
        <Column>minimum array elements</Column>
        <Column>
          {isMin && <InputField type="number" name={`${name}.minArrayLength`} placeholder="minimum array elements" />}
        </Column>
      </Columns>
    </>
  )
}

interface DateRefinementsSubFormProps {
  readonly name: string
}

const DateRefinementsSubForm: React.FC<DateRefinementsSubFormProps> = ({name}) => {
  const [isMax, setIsMax] = React.useState<boolean>(false)
  const [isMin, setIsMin] = React.useState<boolean>(false)
  return (
    <>
      <Columns>
        <Column narrow>
          <CheckBox onChange={evt => setIsMax(evt.target.checked)}/>
        </Column>
        <Column>max date</Column>
        <Column>
          {isMax && <DateField name={`${name}.maxDate`} />}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox onChange={evt => setIsMin(evt.target.checked)}/>
        </Column>
        <Column>min date</Column>
        <Column>
          {isMin && <DateField name={`${name}.minDate`} />}
        </Column>
      </Columns>
    </>
  )
}

interface RefinementsSubFormProps {
  readonly selectedType: RefinementsKind
  readonly name: string
}

const RefinementsSubForm: React.FC<RefinementsSubFormProps> = ({
  selectedType,
  name
}) => {
  switch (selectedType) {
    case 'number':
      return <NumberRefinementsSubForm name={name}/>
    case 'string':
      return <StringRefinementsSubForm name={name}/>
    case 'array':
      return <ArrayRefinementsSubForm name={name}/>
    case 'date':
      return <DateRefinementsSubForm name={name}/>
  }
}

interface FieldProps {
  readonly name: string
  readonly data: Meta
}

const AddField: React.FC<FieldProps> = ({ name, data }) => {
  return (
    <Container>
      <Simple.Text name={`${name}.label`} label="Label" />
      <SelectField
        name={`${name}.kind`}
      >
        <option value="number">number</option>
        <option value="string">string</option>
        <option value="date">date</option>
        <option value="array">array</option>
      </SelectField>
      <RefinementsSubForm selectedType={data.kind} name={`${name}.refinements`}/>
    </Container>
  )
}

const initialValues: { readonly meta: ReadonlyArray<Meta> } = { meta: [] }

const AddFieldComponent: React.FC<SimpleArrayFieldComponentProps<any>> = ({
  data,
  name,
}) => (
  <>
    <Text textAlignment="centered" textSize="3">
      Add Field
    </Text>
    <AddField name={name} data={data}/>
  </>
)

export const MetaBuilderForm: React.FC<MetaBuildFormProps> = ({ onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {({ values }) => (
      <Form>
        <SimpleArrayField
          name="meta"
          data={values.meta}
          onAdd={newMeta}
          render={AddFieldComponent}
        />
        <Simple.FormButtons />
      </Form>
    )}
  </Formik>
)
