export const PhotoForm: number = 100
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
//   url,
// } from 'devfractal-ui-core'

// // tslint:disable typedef

// const PhotoRT = t.readonly(
//   t.type({ title: t.string, url: t.string, thumbnailUrl: t.string }),
// )

// type PhotoValues = t.TypeOf<typeof PhotoRT>

// const initialValues: PhotoValues = emptyFromType(PhotoRT)

// export const PhotoForm: React.FC = () => (
//   <Section>
//     <Title>Photo Form</Title>
//     <Simple.Form
//       initialValues={initialValues}
//       onSubmit={async (values: PhotoValues, actions) => {
//         typeInvariant(PhotoRT, values)
//         await consoleSubmit(0)(values, actions)
//       }}
//     >
//       <Simple.Text label="Title" name="title" validations={[required()]} />
//       <Simple.Url label="Url" name="url" validations={[required(), url()]} />
//       <Simple.Url
//         label="ThumbNailUrl"
//         name="thumbnailUrl"
//         validations={[required(), url()]}
//       />
//       <Simple.FormButtons />
//       <Simple.Debug />
//     </Simple.Form>
//   </Section>
// )
