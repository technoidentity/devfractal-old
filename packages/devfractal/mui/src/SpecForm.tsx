import { Mixed, ObjPickBy, Props, TypeOf } from 'srtp-utils'

export interface TypedField<Spec extends Mixed, Name extends string> {
  readonly name: Name
  readonly value: TypeOf<Spec>[Name]
  onChange(value: TypeOf<Spec>[Name]): void
}

export type TypeForTypedField<
  Opt extends Props,
  Req extends Props,
  Spec extends Mixed
> = TypedField<ObjPickBy<Opt, Req, Spec>, keyof ObjPickBy<Opt, Req, Spec>>

// export interface TypedFields<
//   Opt extends Props,
//   Req extends Props,
//   N,
//   B,
//   S,
//   D,
//   E,
//   M
// > {
//   readonly Number: React.FC<N & TypeForTypedField<Opt, Req, NumberC>>
//   readonly Boolean: React.FC<B & TypeForTypedField<Opt, Req, BooleanC>>
//   readonly String: React.FC<S & TypeForTypedField<Opt, Req, StringC>>
//   readonly Date: React.FC<D & TypeForTypedField<Opt, Req, DateC>>
//   readonly Enum: React.FC<
//     E & TypeForTypedField<Opt, Req, EnumC<readonly string[]>>
//   >
//   readonly MultiSelect: React.FC<
//     M & TypeForTypedField<Opt, Req, ReadonlyArrayC<StringC>>
//   >
// }

// export function typedFields<
//   Opt extends Props,
//   Req extends Props,
//   N,
//   B,
//   S,
//   D,
//   E,
//   M
// >(): TypedFields<Opt, Req, N, B, S, D, E, M> {
//   const Simple = typedForm<ObjTypeOf<Opt, Req>>()

//   return {
//     Number: ({ name, value, onChange, ...props }) => (
//       <Simple.Number
//         name={name as string}
//         value={value}
//         onChange={onChange}
//         {...props}
//       />
//     ),
//     Boolean: ({ name, value, onChange, props }) => (
//       <Simple.Checkbox
//         name={name as string}
//         checked={value}
//         onChange={onChange}
//         {...props}
//       />
//     ),
//     String: props => <Simple.Text {...props} />,
//     Date: props => <Simple.Date {...props} />,
//     Enum: props => <Simple.Select {...props} />,
//     MultiSelect: props => <Simple.Checkbox {...props} />,
//   }
// }

// // export interface SpecFormProps<O extends Props, R extends Props>
// //   extends SimpleFormProps<TypeOf<ObjC<O, R>>> {
// //   readonly spec: ObjC<O, R>
// //   readonly columns: ReadonlyArray<keyof TypeOf<ObjC<O, R>>>
// // }

// // export function SpecForm<Opt extends Props, Req extends Props>({
// //   spec,
// //   columns,
// //   ...props
// // }: SpecFormProps<Opt, Req>): JSX.Element {
// //   return (
// //     <Simple.Form {...props}>
// //       {columns.map(col => (
// //         <SpecField<Opt, Req, any> key={col as string} spec={spec} name={col} />
// //       ))}
// //       <Simple.FormButtons />
// //     </Simple.Form>
// //   )
// // }
