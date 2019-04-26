import React from 'react'
import { render } from 'react-dom'
import { Section } from './lib'
// import { MBool, MDate, MEnum, MNumber, MObject, MString, Section } from './lib'
import { MetaBuilderForm } from './meta/MetaBuildForm'

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
