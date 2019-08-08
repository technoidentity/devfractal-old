import { FormikActions } from 'formik'
import { Int, keyof, string, TypeOf } from 'io-ts'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import {
  Box,
  Button,
  Column,
  Columns,
  component,
  Image,
  Media,
  MediaContent,
  required,
  Router,
  SafeRoute as Route,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import { empty, fn, props } from 'technoidentity-utils'
import { Post } from './Post'
import { rest } from './rest'

// tslint:disable typedef

const Status = keyof({ active: 0, inActive: 1 })
const Group = keyof({ Retail: 0, Cargo: 1 })

const Battery = props(
  {
    name: string,
    batteryID: Int,
    group: Group,
    remainingCycles: Int,
    status: Status,
  },
  {
    batteryMake: string,
    batteryModel: string,
    capacity: string,
    batteryCycles: Int,
  },
)

type Battery = TypeOf<typeof Battery>

const BatteryFormProps = props(
  {
    initial: Battery,
  },
  {
    onSubmit: fn<
      (values: Battery, actions: FormikActions<Battery>) => Promise<void>
    >(),
  },
)

const initialValues = empty(Battery)

export const BatteryForm = component(
  BatteryFormProps,
  ({ onSubmit, initial }) => (
    <Section>
      <Title textAlignment="left" size="5" textColor="info">
        Battery Details
      </Title>
      <Simple.Form initialValues={initial || initialValues} onSubmit={onSubmit}>
        <Columns>
          <Column>
            <Simple.Text name="batteryMake" validations={[required()]} />
            <Simple.Text name="batteryModel" validations={[required()]} />
          </Column>
          <Column>
            <Simple.Text name="capacity" validations={[required()]} />
            <Simple.Text name="batteryCycles" validations={[required()]} />
          </Column>
          <Column narrow>
            <Title size="6">Battery Photo</Title>
            <Box>
              <Media>
                <MediaContent>
                  <Image
                    size="128x128"
                    src="https://bulma.io/images/placeholders/128x128.png"
                  />
                </MediaContent>
              </Media>
            </Box>
            <Button variant="dark">Upload Photo</Button>
          </Column>
        </Columns>
        <Simple.FormButtons />
      </Simple.Form>
    </Section>
  ),
)

const batterAPI = rest(Battery, 'batteryID', {
  baseURL: 'http://localhost:9999',
  resource: 'batteries',
})

const BatteryComponent = () => (
  // tslint:disable-next-line: no-unbound-method
  <Post component={BatteryForm} onPost={batterAPI.create} redirectPath="/" />
)

const Index = () => <Link to="/batteries">Batteries</Link>

const App = () => {
  return (
    <Router variant="hash">
      <Route path="/" component={Index} />
      <Route path="/batteries" component={BatteryComponent} />
    </Router>
  )
}

render(<App />, document.getElementById('root'))
