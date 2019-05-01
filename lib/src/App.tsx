import { MetaBuilderForm, Section } from 'devfractal'
import React from 'react'
import { render } from 'react-dom'

// const meta = MObject({
//   name: MString,
//   age: MNumber,
//   male: MBool,
//   dateOfBirth: MDate,
//   position: MEnum(['programmer', 'team leader', 'manager']),
// })

render(
  <Section>
    <MetaBuilderForm onSubmit={values => console.log(values)} />
  </Section>,
  document.getElementById('root'),
)
