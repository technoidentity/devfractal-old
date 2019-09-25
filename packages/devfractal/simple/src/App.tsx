import 'bulma/bulma.sass'
import { Section } from 'devfractal-ui-core'
import React from 'react'
// import 'react-datepicker/dist/react-datepicker.css'
import { render } from 'react-dom'
import { Simple } from './SimpleForm'
import { SimpleTable } from './SimpleTable'

const SimpleTableTest: React.FC = () => {
  // tslint:disable-next-line: typedef
  const data = [{ title: 'hello', done: false, id: 1, deadline: new Date() }]

  return (
    <SimpleTable
      data={data}
      select={['done', 'title', 'deadline']}
      override={{ done: 'Completed', deadline: 'Scheduled' }}
      extra={['Actions']}
    />
  )
}

const App: React.FC = () => (
  <Section>
    <Simple.Form
      initialValues={{ name: '', dateOfBirth: new Date(), male: false }}
    >
      <Simple.Text name="name" />
      <Simple.Date name="dateOfBirth" />
      <Simple.Checkbox name="male" />
    </Simple.Form>
    <SimpleTableTest />
  </Section>
)
render(<App />, document.getElementById('root'))
