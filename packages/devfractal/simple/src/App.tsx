// import 'bulma/css/bulma'
import React from 'react'
// import 'react-datepicker/dist/react-datepicker.css'
import { render } from 'react-dom'
import { Simple } from './SimpleForm'

const App: React.FC = () => (
  <Simple.Form
    initialValues={{ name: '', dateOfBirth: new Date(), male: false }}
  >
    <Simple.Text name="name" />
    <Simple.Date name="dateOfBirth" />
    <Simple.Checkbox name="male" />
  </Simple.Form>
)
render(<App />, document.getElementById('root'))
