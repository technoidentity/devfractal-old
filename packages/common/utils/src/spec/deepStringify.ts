export type DeepStringify<T> = {
  [K in keyof T]: T[K] extends
    | number
    | string
    | boolean
    | symbol
    | null
    | bigint
    // tslint:disable-next-line:readonly-array
    | any[]
    | ((...args: any[]) => any)
    | Date
    ? string
    : DeepStringify<T[K]>
}

// interface Person {
//   readonly name: string
//   readonly age: number
//   readonly hobbies: readonly string[]
//   readonly address: {
//     readonly houseNo: number
//     readonly street: string
//     readonly city: string
//   }
//   foo(): void
//   readonly dob: Date
// }
// type Labels = DeepStringify<Person>
