import { Form, Formik, FormikActions } from 'formik'
import React from 'react'
import {
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
import { ArrayRefinements, DateRefinements, Mixed, NumberRefinements, Refinements, StringRefinements } from 'technoidentity-meta-core'

export interface MetaBuilderFormProps {
  onSubmit(values: any, formikActions: FormikActions<any>): void
}

type RefinementsKind = 'number' | 'string' | 'date' | 'array'

interface ArrayRefinementsForm {
  readonly isMin: boolean
  readonly isMax: boolean
}

interface NumberRefinementsForm {
  readonly isSign: boolean
  readonly isMin: boolean
  readonly isMax: boolean
}

interface StringRefinementsForm {
  readonly isBase: boolean
  readonly isCase: boolean
  readonly isFixed: boolean
  readonly isMin: boolean
  readonly isMax: boolean
  readonly fixed: number
}

interface DateRefinementsForm {
  readonly isMin: boolean
  readonly isMax: boolean
}

type RefinementsForm =
  Refinements &
  ArrayRefinementsForm &
  NumberRefinementsForm &
  StringRefinementsForm &
  DateRefinementsForm

interface MetaForm {
  readonly label: string
  readonly kind: RefinementsKind
  readonly refinements: RefinementsForm
}

// tslint:disable-next-line:typedef
const newMeta: () => MetaForm = () => ({
  label: '',
  kind: 'number',
  refinements: {
    integer: false,
    isSign: false,
    sign: 'positive',
    isMin: false,
    min: 0,
    isMax: false,
    max: 0,
    isBase: false,
    base: 'email',
    isCase: false,
    case: 'lower',
    isFixed: false,
    fixed: 0,
    strLength: {
      min: 0,
      max: 0
    },
    maxArrayLength: 0,
    minArrayLength: 0,
    maxDate: new Date(),
    minDate: new Date(),
  },
})

interface NumberRefinementsSubFormProps {
  readonly name: string
  readonly data: NumberRefinements & NumberRefinementsForm
}

const NumberRefinementsSubForm: React.FC<NumberRefinementsSubFormProps> = ({name, data}) => {
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
          <CheckboxField name={`${name}.isSign`} />
        </Column>
        <Column narrow>sign</Column>
        <Column>
          {data.isSign && <SelectField name={`${name}.sign`}>
            <option value="positive">positive</option>
            <option value="negative">negative</option>
          </SelectField>}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckboxField name={`${name}.isMin`}/>
        </Column>
        <Column>minimum</Column>
        <Column>
          {data.isMin && <InputField type="number" name={`${name}.min`} placeholder="Minimum Value" />}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckboxField name={`${name}.isMax`}/>
        </Column>
        <Column>maximum</Column>
        <Column>
          {data.isMax && <InputField type="number" name={`${name}.max`} placeholder="Maximum Value" />}
        </Column>
      </Columns>
    </>
  )
}

interface StringRefinementsSubFormProps {
  readonly name: string
  readonly data: StringRefinements & StringRefinementsForm
}

const StringRefinementsSubForm: React.FC<StringRefinementsSubFormProps> = ({name, data}) => {
  return (
    <>
      <Columns>
        <Column narrow>
          <CheckboxField name={`${name}.isBase`}/>
        </Column>
        <Column narrow>base</Column>
        <Column>
          {data.isBase && <SelectField name={`${name}.base`}>
            <option value="email">email</option>
            <option value="url">url</option>
          </SelectField>}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckboxField name={`${name}.isCase`}/>
        </Column>
        <Column narrow>case</Column>
        <Column>
          {data.isCase && <SelectField name={`${name}.case`}>
            <option value="lower">lower</option>
            <option value="upper">upper</option>
          </SelectField>}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckboxField name={`${name}.isFixed`} />
        </Column>
        <Column>fixed</Column>
        <Column>
          {data.isFixed && <InputField type="number" name={`${name}.fixed`} placeholder="Exact length" />}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
        <CheckboxField name={`${name}.isMin`} />
        </Column>
        <Column>minimum length</Column>
        <Column>
          {!data.isFixed && data.isMin && <InputField type="number" name={`${name}.strLength.min`} placeholder="Minimum length" />}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckboxField name={`${name}.isMax`} />
        </Column>
        <Column>maximum length</Column>
        <Column>
          {!data.isFixed && data.isMax && <InputField type="number" name={`${name}.strLength.max`} placeholder="Maximum Value" />}
        </Column>
      </Columns>
    </>
  )
}

interface ArrayRefinementsSubFormProps {
  readonly name: string
  readonly data: ArrayRefinements & ArrayRefinementsForm
}

const ArrayRefinementsSubForm: React.FC<ArrayRefinementsSubFormProps> = ({name, data}) => {
  return (
    <>
      <Columns>
        <Column narrow>
          <CheckboxField name={`${name}.isMax`} />
        </Column>
        <Column>maximum array elements</Column>
        <Column>
          {data.isMax && <InputField type="number" name={`${name}.maxArrayLength`} placeholder="maximum array elements" />}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckboxField name={`${name}.isMin`} />
        </Column>
        <Column>minimum array elements</Column>
        <Column>
          {data.isMin && <InputField type="number" name={`${name}.minArrayLength`} placeholder="minimum array elements" />}
        </Column>
      </Columns>
    </>
  )
}

interface DateRefinementsSubFormProps {
  readonly name: string
  readonly data: DateRefinements & DateRefinementsForm
}

const DateRefinementsSubForm: React.FC<DateRefinementsSubFormProps> = ({name, data}) => {
  return (
    <>
      <Columns>
        <Column narrow>
          <CheckboxField name={`${name}.isMax`} />
        </Column>
        <Column>max date</Column>
        <Column>
          {data.isMax && <DateField name={`${name}.maxDate`} />}
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckboxField name={`${name}.isMin`} />
        </Column>
        <Column>min date</Column>
        <Column>
          {data.isMin && <DateField name={`${name}.minDate`} />}
        </Column>
      </Columns>
    </>
  )
}

interface RefinementsSubFormProps {
  readonly selectedType: RefinementsKind
  readonly name: string
  readonly data: RefinementsForm
}

const RefinementsSubForm: React.FC<RefinementsSubFormProps> = ({
  selectedType,
  name,
  data
}) => {
  switch (selectedType) {
    case 'number':
      return <NumberRefinementsSubForm name={name} data={data}/>
    case 'string':
      return <StringRefinementsSubForm name={name} data={data}/>
    case 'array':
      return <ArrayRefinementsSubForm name={name} data={data}/>
    case 'date':
      return <DateRefinementsSubForm name={name} data={data}/>
  }
}

interface FieldProps {
  readonly name: string
  readonly data: MetaForm
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
      <RefinementsSubForm selectedType={data.kind} name={`${name}.refinements`} data={data.refinements}/>
    </Container>
  )
}

const initialValues: { readonly meta: ReadonlyArray<MetaForm> } = { meta: [] }

const AddFieldComponent: React.FC<SimpleArrayFieldComponentProps<MetaForm>> = ({
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

// tslint:disable no-object-mutation

function toNumberRefinements(r: RefinementsForm): NumberRefinements {
  const refinements: any = {}

  if(r.integer) {
    refinements.integer = r.integer
  }
  if(r.isSign) {
    refinements.sign = r.sign
  }
  if(r.isMin) {
    refinements.min = r.min
  }
  if(r.isMax) {
    refinements.max = r.max
  }
  return refinements
}

function toStringRefinements(r: RefinementsForm): StringRefinements {
  const refinements: any = {}

  if(r.isBase) {
    refinements.base = r.base
  }
  if(r.isCase) {
    refinements.case = r.case
  }
  if(r.isFixed) {
    refinements.strLength = { fixed: r.fixed }
  }
  else if(r.isMin || r.isMax){
    refinements.strLength = {}
    if(r.isMin) {
      refinements.strLength.min = r.min
    }
    if(r.isMax) {
      refinements.strLength.max = r.max
    }
  }
  return refinements
}

function toArrayRefinements(r: RefinementsForm): ArrayRefinements {
  const refinements: any = {}

  if(r.isMin) {
    refinements.minArrayLength = r.minArrayLength
  }
  if(r.isMax) {
    refinements.maxArrayLength = r.maxArrayLength
  }
  return refinements
}

function toDateRefinements(r: RefinementsForm): DateRefinements {
  const refinements: any = {}

  if(r.isMin) {
    refinements.minDate = r.minDate
  }
  if(r.isMax) {
    refinements.maxDate = r.maxDate
  }
  return refinements
}

function toMeta(value: MetaForm): Mixed {
  switch(value.kind) {
    case 'number':
      return { kind: 'number', refinements: toNumberRefinements(value.refinements)}
    case 'string':
      return { kind: 'string', refinements: toStringRefinements(value.refinements)}
    case 'array':
      return { kind: 'array', of: { kind: 'object', properties: {} }, refinements: toArrayRefinements(value.refinements)}
    case 'date':
      return { kind: 'date', refinements: toDateRefinements(value.refinements)}
  }
}

export const MetaBuilderForm: React.FC<MetaBuilderFormProps> = ({ onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={(values, formikActions) =>
    onSubmit({ meta: values.meta.map(toMeta) }, formikActions)
  }>
    {({ values }) => (
      <Form>
        <SimpleArrayField<MetaForm>
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
