export const TodoForm: number = 100
// import * as t from 'technoidentity-spec'
// import React from 'react'
// import {
//   consoleSubmit,
//   empty as emptyFromType,
//   required,
//   Section,
//   Simple,
//   typeInvariant,
// } from 'devfractal-ui-core'

// // tslint:disable typedef

// const TodoRT = t.readonly(t.type({ title: t.string, completed: t.boolean }))

// type TodoValues = t.TypeOf<typeof TodoRT>

// const initialValues: TodoValues = emptyFromType(TodoRT)

// export const TodoForm: React.FC = () => (
//   <Section>
//     <Simple.Form
//       initialValues={initialValues}
//       onSubmit={async (values: TodoValues, actions) => {
//         typeInvariant(TodoRT, values)
//         await consoleSubmit(0)(values, actions)
//       }}
//     >
//       <Simple.Text label="Title" name="title" validations={[required()]} />
//       <Simple.Checkbox name="completed">Completed</Simple.Checkbox>
//       <Simple.FormButtons />
//       <Simple.Debug />
//     </Simple.Form>
//   </Section>
// )
