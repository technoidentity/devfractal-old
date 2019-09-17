import React from 'react'
import { render } from 'react-dom'
import 'typeface-roboto'
import { FormikWithMuiForm } from './form/FormikWithMuiForm'

const App: React.FC = () => {
  return <FormikWithMuiForm />
}
render(<App />, document.getElementById('root'))
