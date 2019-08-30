import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik'
import React from 'react'
import {
  Button,
  CreateLink,
  CrudTable,
  DateInput,
  Field as UIField,
  Input,
  Label,
  links,
  listComponent,
  Section,
  SelectField,
  ServerError,
  SubmitAction,
  Text,
  Title,
  useGet,
  useParams,
  useSubmitRedirect,
} from 'technoidentity-devfractal'
import { type } from 'technoidentity-spec'
import { IntFromString } from 'technoidentity-spec'
import { AdManager, adManagerAPI } from '../common'
import { HeadTitle } from '../components'

const { create, edit } = links(adManagerAPI.resource)

const FormikInput: React.FC<FieldProps<AdManager>> = ({
  form,
  field,
  ...props
}) => <Input {...props} {...field} />

const FormikDate: React.FC<FieldProps<AdManager>> = ({
  form,
  field,
  ...props
}) => (
  <DateInput
    {...props}
    onChange={date => form.setFieldValue(field.name, date)}
    name={field.name}
    onBlur={field.onBlur}
    selected={field.value}
  />
)

export const AdManagerFormInner = () => (
  <>
    <Section>
      <HeadTitle> Ad Manager</HeadTitle>
    </Section>
    <Section>
      <Form>
        <UIField>
          <Label>Upload Image</Label>
          <Field name="uploadImage" component={FormikInput} addons />
          <Button variant="dark">Upload</Button>
          <ErrorMessage name="title" />
        </UIField>
        <UIField>
          <Label>Client</Label>
          <Field name="client" component={FormikInput} />
          <ErrorMessage name="title" />
        </UIField>
        <UIField>
          <Label>Vehicle</Label>
          <SelectField name="vehicle">
            <option value="vehicle1">Vehicle1</option>
            <option value="vehicle1">Vehicle2</option>
            <option value="vehicle1">Vehicle3</option>
          </SelectField>
          <ErrorMessage name="vehicle" />
        </UIField>
        <UIField>
          <Label>Start Date</Label>
          <Field name="startDate" component={FormikDate} />
          <ErrorMessage name="startDate" />
        </UIField>
        <UIField>
          <Label>End Date</Label>
          <Field name="endDate" component={FormikDate} />
          <ErrorMessage name="endDate" />
        </UIField>
      </Form>
    </Section>
  </>
)

const initialValues: AdManager = {
  uploadImage: '',
  client: '',
  vehicle: 'vehicle1',
  startDate: new Date(),
  endDate: new Date(),
}

interface AdManagerFormProps {
  readonly initial?: AdManager
  readonly onSubmit: SubmitAction<AdManager>
}

const AdManagerForm: React.FC<AdManagerFormProps> = ({ onSubmit, initial }) => (
  <Formik
    initialValues={initial || initialValues}
    onSubmit={onSubmit}
    component={AdManagerFormInner}
  />
)

export const CreateAdManager = () => {
  const { serverError, onSubmit } = useSubmitRedirect(
    adManagerAPI.create,
    '/adManagers',
  )
  return (
    <>
      <Title textAlignment="centered">Create AdManager</Title>
      <ServerError error={serverError} />
      <AdManagerForm onSubmit={onSubmit} />
    </>
  )
}

export const EditAdManager: React.FC = () => {
  const { id } = useParams(type({ id: IntFromString }))

  const result = useGet(adManagerAPI.get, id)

  const { serverError, onSubmit } = useSubmitRedirect(
    data => adManagerAPI.update(id, data),
    '/adManagers',
  )

  return (
    <>
      {result.state === 'success' ? (
        <>
          <Title textAlignment="centered">Edit AdManager</Title>
          <ServerError error={serverError} />
          <AdManagerForm initial={result.data} onSubmit={onSubmit} />
        </>
      ) : result.state === 'failure' ? (
        <Text color="danger" textSize="3">
          {result.error.message}
        </Text>
      ) : (
        <Text title="3">Loading...</Text>
      )}
    </>
  )
}

export const AdManagerList = listComponent(AdManager, ({ data }) => (
  <>
    <Title textAlignment="centered">Ad Managers</Title>
    <CreateLink alignment="right" to={create}>
      Add AdManger
    </CreateLink>
    <CrudTable data={data} editTo={v => edit(v.id)} />
  </>
))
