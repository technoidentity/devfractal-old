// import {
//   exact,
//   ExactC,
//   Int,
//   intersection,
//   IntersectionC,
//   Mixed,
//   partial,
//   Props,
//   readonly,
//   readonlyArray,
//   ReadonlyArrayC,
//   ReadonlyC,
//   StringC,
//   Type,
//   type,
//   TypeC,
//   TypeOf,
// } from 'io-ts'
// import { buildObject, camelCaseToPhrase, omit, pick } from '../common'
// import { AnyObj, OptSpec, ReqSpec } from './obj'

// // eslint-disable-next-line @typescript-eslint/interface-name-prefix
// export interface IDProps {
//   readonly [key: string]: Int | StringC
// }

// export interface RefProps {
//   readonly [key: string]: AnyObj
// }

// export type RefArray<T extends RefProps> = {
//   readonly [P in keyof T]: ReadonlyArrayC<T[P]>
// }

// export function refArray<T extends RefProps>(props: T): RefArray<T> {
//   // tslint:disable-next-line: no-unnecessary-callback-wrapper
//   return buildObject<any, any>(props, v => readonlyArray(v)) as any
// }

// type IDSpec<ID extends IDProps> = ReadonlyC<TypeC<ID & Props>>
// type RefSpec<Ref extends RefProps> = ReadonlyC<TypeC<RefArray<Ref>>>

// type DbSpec<
//   ID extends IDProps,
//   Opt extends Props,
//   Req extends Props,
//   Ref extends RefProps
// > = ExactC<
//   // tslint:disable-next-line: readonly-array
//   IntersectionC<[IDSpec<ID>, OptSpec<Opt>, ReqSpec<Req>, RefSpec<Ref>]>
// >

// // tslint:disable-next-line: no-class
// export class DbType<
//   ID extends IDProps,
//   Opt extends Props,
//   Req extends Props,
//   Ref extends RefProps,
//   A,
//   O = A,
//   I = unknown
// > extends Type<A, O, I> {
//   readonly _tag: 'Db' = 'Db'

//   constructor(
//     readonly id: ID & Props,
//     readonly optional: Opt,
//     readonly required: Req,
//     readonly refs: Ref,
//     readonly props: ID & Opt & Req & RefArray<Ref>,
//     readonly spec: Type<A, O, I> & DbSpec<ID, Opt, Req, Ref>,
//     name: string,
//     readonly labels: Record<keyof A, string> = buildObject<any, any>(
//       props,
//       (_, p) => camelCaseToPhrase(p as any),
//     ),
//   ) {
//     super(name, spec.is, spec.validate, spec.encode)
//   }
// }

// export interface DbC<
//   ID extends IDProps,
//   Opt extends Props,
//   Req extends Props,
//   Ref extends RefProps
// >
//   extends DbType<
//     ID,
//     Opt,
//     Req,
//     Ref,
//     DbSpec<ID, Opt, Req, Ref>['_A'],
//     DbSpec<ID, Opt, Req, Ref>['_O'],
//     DbSpec<ID, Opt, Req, Ref>['_I']
//   > {}

// export function newDb<
//   ID extends IDProps,
//   Opt extends Props,
//   Req extends Props,
//   Ref extends RefProps
// >(
//   id: ID & Props,
//   optional: Opt,
//   required: Req,
//   references: Ref,
//   labels?: Record<keyof TypeOf<DbC<ID, Opt, Req, Ref>>, string>,
//   name?: string,
// ): DbC<ID, Opt, Req, Ref> {
//   // tslint:disable-next-line: typedef
//   const refs = refArray(references)

//   const spec: DbSpec<ID, Opt, Req, Ref> = exact(
//     intersection([
//       readonly(type(id)),
//       readonly(partial(optional)),
//       readonly(type(required)),
//       readonly(type(refs)),
//     ]),
//   )

//   return new DbType(
//     id,
//     optional,
//     required,
//     references,
//     { ...id, ...optional, ...required, ...refs },
//     spec,
//     name || spec.name,
//     labels,
//   )
// }

// export function db<
//   ID extends IDProps,
//   Opt extends Props,
//   Req extends Props,
//   Ref extends RefProps
// >(
//   id: ID & Props,
//   optional: Opt,
//   required: Req,
//   refs: Ref,
//   labels?: Record<keyof DbC<ID, Opt, Req, Ref>['_A'], string>,
//   name?: string,
// ): DbC<ID, Opt, Req, Ref> {
//   return newDb(id, optional, required, refs, labels, name)
// }

// export function dbReq<
//   ID extends IDProps,
//   Req extends Props,
//   Ref extends RefProps
// >(
//   id: ID & Props,
//   required: Req,
//   refs: Ref,
//   labels?: Record<keyof DbC<ID, {}, Req, Ref>['_A'], string>,
//   name?: string,
// ): DbC<ID, {}, Req, Ref> {
//   return newDb(id, {}, required, refs, labels, name)
// }

// export function dbOpt<
//   ID extends IDProps,
//   Opt extends Props,
//   Ref extends RefProps
// >(
//   id: ID & Props,
//   optional: Opt,
//   refs: Ref,
//   labels?: Record<keyof DbC<ID, Opt, {}, Ref>['_A'], string>,
//   name?: string,
// ): DbC<ID, Opt, {}, Ref> {
//   return newDb(id, optional, {}, refs, labels, name)
// }

// export function dbOmit<
//   ID extends IDProps,
//   Opt extends Props,
//   Req extends Props,
//   Ref extends RefProps,
//   K extends Omit<DbC<ID, Opt, Req, Ref>['props'], keyof ID>
// >(
//   spec: DbC<ID, Opt, Req, Ref>,
//   keys: readonly K[],
//   name?: string,
// ): DbC<
//   ID,
//   Omit<Opt, Extract<keyof DbC<ID, Opt, Req, Ref>['optional'], K>>,
//   Omit<Req, Extract<keyof DbC<ID, Opt, Req, Ref>['required'], K>>,
//   Omit<Ref, Extract<keyof DbC<ID, Opt, Req, Ref>['refs'], K>>
// > {
//   return db(
//     omit(spec.id, keys as any) as any,
//     omit(spec.optional, keys as any) as any,
//     omit(spec.required, keys as any) as any,
//     omit(spec.refs, keys as any) as any,
//     omit(spec.labels, keys as any) as any,
//     name,
//   )
// }

// export function omitID<
//   ID extends IDProps,
//   Opt extends Props,
//   Req extends Props,
//   Ref extends RefProps
// >(spec: DbC<ID, Opt, Req, Ref>, name?: string): DbC<{}, Opt, Req, Ref> {
//   return db<{}, Opt, Req, Ref>(
//     {},
//     spec.optional,
//     spec.required,
//     spec.refs,
//     spec.labels,
//     name,
//   )
// }

// export function dbPick<
//   ID extends IDProps,
//   Opt extends Props,
//   Req extends Props,
//   Ref extends RefProps,
//   K extends keyof Omit<DbC<ID, Opt, Req, Ref>['props'], keyof ID>
// >(
//   spec: DbC<ID, Opt, Req, Ref>,
//   keys: readonly K[],
//   name?: string,
// ): DbC<
//   ID,
//   Pick<Opt, Extract<keyof Opt, K>>,
//   Pick<Req, Extract<keyof Req, K>>,
//   Pick<Ref, Extract<keyof Ref, K>>
// > {
//   return db(
//     spec.id,
//     pick(spec.optional, keys as any),
//     pick(spec.required, keys as any),
//     pick(spec.refs, keys as any),
//     spec.labels,
//     name,
//   )
// }

// export function toDbOpt<
//   ID extends IDProps,
//   Opt extends Props,
//   Req extends Props,
//   Ref extends RefProps
// >(spec: DbC<ID, Opt, Req, Ref>, name?: string): DbC<ID, Req & Opt, {}, Ref> {
//   return dbOpt<ID, Opt & Req, Ref>(
//     spec.id,
//     { ...spec.required, ...spec.optional },
//     spec.refs,
//     spec.labels,
//     name,
//   )
// }

// // export function dbProps<Spec extends AnyObj>(spec: AnyObj): Spec['props'] {
// //   return spec.props
// // }

// // export function dbProp<Spec extends AnyObj, K extends keyof TypeOf<Spec>>(
// //   spec: Spec,
// //   prop: K,
// // ): Spec['props'][K] {
// //   return spec.props[prop]
// // }

// export type DbTypeOf<
//   ID extends IDProps,
//   Opt extends Props,
//   Req extends Props,
//   Ref extends RefProps
// > = DbC<ID, Opt, Req, Ref>['_A']

// export type AnyDb = Mixed & DbC<any, any, any, any>
