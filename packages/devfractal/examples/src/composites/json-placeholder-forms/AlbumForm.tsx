export const AlbumForm: number = 100
// import * as t from 'technoidentity-spec'
// import React from 'react'
// import {
//   consoleSubmit,
//   empty as emptyFromType,
//   required,
//   Section,
//   Simple,
//   Title,
//   typeInvariant,
// } from 'devfractal-ui-core'

// // tslint:disable typedef

// const AlbumRT = t.readonly(t.type({ title: t.string }))

// type AlbumValues = t.TypeOf<typeof AlbumRT>

// const initialValues: AlbumValues = emptyFromType(AlbumRT)

// export const AlbumForm: React.FC = () => (
//   <Section>
//     <Title>Album Form</Title>
//     <Simple.Form
//       initialValues={initialValues}
//       onSubmit={async (values: AlbumValues, actions) => {
//         typeInvariant(AlbumRT, values)
//         await consoleSubmit(0)(values, actions)
//       }}
//     >
//       <Simple.Text label="Title" name="title" validations={[required()]} />
//       <Simple.FormButtons />
//       <Simple.Debug />
//     </Simple.Form>
//   </Section>
// )
