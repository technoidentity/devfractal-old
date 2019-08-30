export const UserForm: number = 100
// import * as t from 'technoidentity-spec'
// import React from 'react'
// import {
//   consoleSubmit,
//   email,
//   empty as emptyFromType,
//   max,
//   min,
//   required,
//   Section,
//   Simple,
//   Title,
//   typeInvariant,
//   url,
// } from 'devfractal-ui-core'

// // tslint:disable typedef

// const UserRT = t.readonly(
//   t.type({
//     name: t.string,
//     username: t.string,
//     email: t.string,
//     phone: t.string,
//     website: t.string,
//   }),
// )

// type UserValues = t.TypeOf<typeof UserRT>

// const initialValues: UserValues = emptyFromType(UserRT)

// export const UserForm: React.FC = () => (
//   <Section>
//     <Title>Users Form</Title>
//     <Simple.Form
//       initialValues={initialValues}
//       onSubmit={async (values: UserValues, actions) => {
//         typeInvariant(UserRT, values)
//         await consoleSubmit(0)(values, actions)
//       }}
//     >
//       <Simple.Text
//         label="Name:"
//         name="name"
//         validations={[required(), min(6)]}
//       />
//       <Simple.Text
//         label="UserName:"
//         name="username"
//         validations={[required(), min(6), max(20)]}
//       />
//       <Simple.Email
//         label="Email"
//         name="email"
//         validations={[required(), email()]}
//       />
//       <Simple.Telephone label="Phone:" name="phone" />
//       <Simple.Url label="Website:" name="website" validations={[url()]} />
//       <Simple.FormButtons />
//       <Simple.Debug />
//     </Simple.Form>
//   </Section>
// )
