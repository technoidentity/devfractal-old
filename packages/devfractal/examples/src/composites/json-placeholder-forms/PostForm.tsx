export const PostForm: number = 100
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

// const PostRT = t.readonly(t.type({ title: t.string, body: t.string }))

// type PostValues = t.TypeOf<typeof PostRT>

// const initialValues: PostValues = emptyFromType(PostRT)

// export const PostForm: React.FC = () => (
//   <Section>
//     <Title>Post Form</Title>
//     <Simple.Form
//       initialValues={initialValues}
//       onSubmit={async (values: PostValues, actions) => {
//         typeInvariant(PostRT, values)
//         await consoleSubmit(0)(values, actions)
//       }}
//     >
//       <Simple.Text label="Title" name="title" validations={[required()]} />
//       <Simple.TextArea label="Body" name="body" />
//       <Simple.FormButtons />
//       <Simple.Debug />
//     </Simple.Form>
//   </Section>
// )
