import { Form, Formik, FormikActions } from 'formik'
import React from 'react'
import {
  camelCaseToPhrase,
  Container,
  Simple,
  SimpleArrayField,
  Text,
} from '../lib'
import { PrimitiveMT } from './index'

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

const newRefinement: () => string = () => 'min'

// export const NR = ['integer', 'integer', 'positive', 'negative', 'min', 'max']

// export const SR = [
//   'email',
//   'url',
//   'lowercase',
//   'uppercase',
//   'length',
//   'maxLength',
//   'minLength',
// ]

// export const DR = ['min', 'max']
// export const AR = ['maxLength', 'minLength']

// interface RefinementsFormProps {
//   readonly kind: SimpleMT['kind']
// }

// const RefinementsForm: React.FC<RefinementsFormProps> = ({ kind }) => (
//   <SimpleArrayField
//     name={`${name}.refinements`}
//     data={refinements}
//     onAdd={newRefinement}
//   >
//     {({ data, index, name }) => (
//       <Simple.Select key={index} name={`${name}`}>
//         {data.map((r: string) => (
//           <option key="r" value="r">
//             {camelCaseToPhrase(r)}
//           </option>
//         ))}
//       </Simple.Select>
//     )}
//   </SimpleArrayField>
// )

interface FieldProps {
  readonly refinements: ReadonlyArray<any>
  readonly name: string
}

const AddField: React.FC<FieldProps> = ({ name, refinements }) => {
  return (
    <Container>
      <Simple.Text name={`${name}.label`} label="Label" />
      <Simple.Select name={`${name}.kind`}>
        <option value="number">number</option>
        <option value="string">string</option>
        <option value="boolean">boolean</option>
        <option value="date">date</option>
      </Simple.Select>
      <SimpleArrayField
        name={`${name}.refinements`}
        data={refinements}
        onAdd={newRefinement}
      >
        {({ data, index, name }) => (
          <Simple.Select key={index} name={`${name}`}>
            {data.map((r: string) => (
              <option key="r" value="r">
                {camelCaseToPhrase(r)}
              </option>
            ))}
          </Simple.Select>
        )}
      </SimpleArrayField>
    </Container>
  )
}

const initialValues: { readonly meta: ReadonlyArray<Meta> } = { meta: [] }

export const MetaBuilderForm: React.FC<MetaBuildFormProps> = ({ onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {({ values }) => (
      <Form>
        <SimpleArrayField name="meta" data={values.meta} onAdd={newMeta}>
          {({ data, name }) => (
            <>
              <Text textAlignment="centered" textSize="3">
                Add Field
              </Text>
              <AddField name={name} refinements={data.refinements} />
            </>
          )}
        </SimpleArrayField>
        <Simple.FormButtons />
      </Form>
    )}
  </Formik>
)
