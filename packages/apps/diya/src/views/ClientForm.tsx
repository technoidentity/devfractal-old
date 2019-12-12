import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FormikActions } from 'formik'
import React from 'react'
import {
  Button,
  Column,
  Columns,
  CreateLink,
  formComponent,
  links,
  matches,
  required,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import * as yup from 'yup'
import { useAuth } from '../auth/AuthContext'
import { ClientData } from '../common'
import { googleMapApiKey } from '../config'
import { defaultMapSettings, MapSearch } from '../maps'

const clientLinks = links('clients')

const schema = yup.object().shape({
  contactNumber: yup
    .string()
    .matches(/\d/, 'must be valid mobile number')
    .length(10, 'must be 10 digit mobile number')
    .required('this is a required field'),
  email: yup
    .string()
    .email('must be valid email')
    .required('this is a required field'),
  numberOfEvsOrDrivers: yup
    .number()
    .positive('must be positive number')
    .required('this is required field'),
})

export const ClientForm = formComponent(
  ClientData,
  ({ initial, edit, onSubmit }) => {
    const { setHeaderText } = useAuth()
    if (edit) {
      setHeaderText('Update Client')
    } else {
      setHeaderText('Create Client')
    }

    const initLocation =
      initial.latitude && initial.longitude
        ? { lat: initial.latitude, lng: initial.longitude }
        : {
            lat: 17.385044,
            lng: 78.486671,
          }
    const [location, setLocation] = React.useState<google.maps.LatLngLiteral>(
      initLocation,
    )
    const [billingType, setBillingType] = React.useState<string>(
      initial.address,
    )
    const [address, setAddress] = React.useState<string>(initial.address)
    const [places, setPlaces] = React.useState<
      google.maps.places.Autocomplete
    >()
    return (
      <>
        <Section>
          <CreateLink alignment="right" variant="primary" to={clientLinks.list}>
            Back
          </CreateLink>
        </Section>
        <Section>
          <Simple.Form
            initialValues={{
              ...initial,
              numberOfEvsOrDrivers:
                initial.numberOfEvsOrDrivers === 0
                  ? undefined
                  : initial.numberOfEvsOrDrivers,
            }}
            validationSchema={schema}
            onSubmit={(
              values: ClientData,
              actions: FormikActions<ClientData>,
            ) => {
              const client = {
                ...values,
                latitude: location.lat,
                longitude: location.lng,
                address,
                id: values.id !== '' ? values.id : undefined,
                remarks: values.remarks ? values.remarks : '',
              }
              // tslint:disable-next-line: no-floating-promises
              onSubmit(client, actions)
            }}
          >
            <Columns>
              <Column>
                <Simple.Text
                  name="name"
                  label="Client Name"
                  validations={[
                    matches(/^[a-zA-Z ]*$/, 'must take only alphabets'),
                    required(),
                  ]}
                />

                <Simple.Select
                  name="billingType"
                  fullWidth
                  onClick={e => {
                    setBillingType(e.currentTarget.value)
                  }}
                >
                  <option value="contract_per_month">Contract Per Month</option>
                  <option value="pay_per_delivery">Pay Per Delivery</option>
                  <option value="pay_per_kms_and_time">
                    Pay Per Kms and Time
                  </option>
                  <option value="pay_per_use">Pay Per Use</option>
                  <option value="remarks">Remarks</option>
                </Simple.Select>
                {billingType === 'remarks' ? (
                  <Simple.Text name="remarks" label="Remarks" />
                ) : // tslint:disable-next-line:no-null-keyword
                null}

                <Simple.Number
                  name="numberOfEvsOrDrivers"
                  label="No. of EVS"
                  noControl
                />
              </Column>

              <Column>
                <Simple.Text
                  name="contactName"
                  validations={[
                    matches(/^[a-zA-Z ]*$/, 'must take only alphabets'),
                    required(),
                  ]}
                  noControl
                />
                <Simple.Telephone
                  name="contactNumber"
                  validations={[required()]}
                />
                <Simple.Email
                  name="email"
                  label="Email Address"
                  validations={[required()]}
                />

                <Button variant="primary">Upload Document</Button>
              </Column>

              <Column>
                <MapSearch
                  mapOptions={{
                    ...defaultMapSettings,
                    mapContainerStyle: {
                      height: '235px',
                      width: '100%',
                    },
                  }}
                  googleMapApiKey={googleMapApiKey}
                  location={location}
                  onLoad={autocomplete => {
                    setPlaces(autocomplete)
                  }}
                  onPlaceChanged={() => {
                    const geometry =
                      places && places.getPlace() && places.getPlace().geometry
                    if (geometry) {
                      setLocation(geometry.location.toJSON())
                    }
                  }}
                  inputOptions={{
                    type: 'search',
                    ctrlSize: 'small',
                    rightIcon: faSearch,
                    onChange: e => setAddress(e.target.value),
                  }}
                  markerOptions={{
                    draggable: true,
                    onDragEnd: event => {
                      setLocation(event.latLng.toJSON())
                    },
                  }}
                />
              </Column>
            </Columns>
            <Simple.FormButtons submit={edit ? 'Update' : 'Save'} />
          </Simple.Form>
        </Section>
      </>
    )
  },
)
