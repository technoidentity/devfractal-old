import { Section } from 'layout'
// import { MBool, MDate, MEnum, MNumber, MObject, MString, Section } from './lib'
import { MetaBuilderForm } from 'meta'
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
