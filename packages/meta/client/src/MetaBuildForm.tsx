import {
  Simple,
  SimpleArrayField,
  SimpleArrayFieldComponentProps,
} from 'devfractal-simple'
import {
  CheckBox,
  Column,
  Columns,
  Container,
  Input,
  Select,
  Text,
} from 'devfractal-ui-core'
import { Form, Formik, FormikActions } from 'formik'
import { PrimitiveMT } from 'meta-core'
import React from 'react'

export interface MetaBuildFormProps {
  onSubmit(values: any, formikActions: FormikActions<any>): void
}

interface Meta {
  readonly label: string
  readonly kind: PrimitiveMT['kind']
  readonly refinements: ReadonlyArray<any>
}

// tslint:disable-next-line:typedef
const newMeta: () => Meta = () => ({
  label: '',
  kind: 'number',
  refinements: [],
})

const NumberRefinementsSubForm: React.FC = () => {
  return (
    <>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column narrow>integer</Column>
        <Column />
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column narrow>positive</Column>
        <Column />
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column narrow>negative</Column>
        <Column />
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column>minimum</Column>
        <Column>
          <Input type="number" placeholder="Maximum Value" />
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column>maximum</Column>
        <Column>
          <Input type="number" placeholder="Minimum Value" />
        </Column>
      </Columns>
    </>
  )
}

const StringRefinementsSubForm: React.FC = () => {
  return (
    <>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column narrow>email</Column>
        <Column />
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column narrow>url</Column>
        <Column />
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column narrow>lowercase</Column>
        <Column />
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column narrow>uppercase</Column>
        <Column />
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column>length</Column>
        <Column>
          <Input type="number" placeholder="Exact length" />
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column>minimum length</Column>
        <Column>
          <Input type="number" placeholder="Minimum length" />
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column>maximum length</Column>
        <Column>
          <Input type="number" placeholder="Maximum Value" />
        </Column>
      </Columns>
    </>
  )
}

const ArrayRefinementsSubForm: React.FC = () => {
  return (
    <>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column>maximum array elements</Column>
        <Column>
          <Input type="number" placeholder="maximum array elements" />
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column>minimum array elements</Column>
        <Column>
          <Input type="number" placeholder="minimum array elements" />
        </Column>
      </Columns>
    </>
  )
}

const DateRefinementsSubForm: React.FC = () => {
  return (
    <>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column>maximum</Column>
        <Column>
          <Input type="number" placeholder="maximum" />
        </Column>
      </Columns>
      <Columns>
        <Column narrow>
          <CheckBox />
        </Column>
        <Column>minimum</Column>
        <Column>
          <Input type="number" placeholder="minimum" />
        </Column>
      </Columns>
    </>
  )
}

interface RefinementsSubFormProps {
  readonly selectedType: 'number' | 'string' | 'date' | 'array'
}

const RefinementsSubForm: React.FC<RefinementsSubFormProps> = ({
  selectedType,
}) => {
  switch (selectedType) {
    case 'number':
      return <NumberRefinementsSubForm />
    case 'string':
      return <StringRefinementsSubForm />
    case 'array':
      return <ArrayRefinementsSubForm />
    case 'date':
      return <DateRefinementsSubForm />
  }
}

interface FieldProps {
  readonly refinements: ReadonlyArray<any>
  readonly name: string
}

const AddField: React.FC<FieldProps> = ({ name }) => {
  const [selectedType, setSelectedType] = React.useState<
    RefinementsSubFormProps['selectedType']
  >('number')
  return (
    <Container>
      <Simple.Text name={`${name}.label`} label="Label" />
      <Select
        name={`${name}.kind`}
        onChange={evt => {
          setSelectedType(evt.target.value as any)
        }}
      >
        <option value="number">number</option>
        <option value="string">string</option>
        <option value="date">date</option>
        <option value="array">array</option>
      </Select>
      <RefinementsSubForm selectedType={selectedType} />
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
    <AddField name={name} refinements={data.refinements} />
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
