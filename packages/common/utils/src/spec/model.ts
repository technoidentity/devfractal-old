/* eslint-disable @typescript-eslint/interface-name-prefix */
import { Props } from 'io-ts'
import { IDC } from './id'
import { obj, ObjC, ReqC } from './obj'
import { ObjProps, WrapMany, wrapMany, WrapOne, wrapOne } from './objUtils'

// tslint:disable no-unnecessary-callback-wrapper typedef

export interface ModelID {
  readonly id: IDC<any> | ReqC<{ readonly [s: string]: IDC<any> }>
}

interface ResArgs<
  Opt extends Props,
  Req extends Props & ModelID,
  Many extends ObjProps,
  One extends ObjProps
> {
  readonly plain: ObjC<Opt, Req>
  readonly many?: Many
  readonly one?: One
}

interface IDResArgs<
  ID extends ModelID,
  Opt extends Props,
  Req extends Props,
  Many extends ObjProps,
  One extends ObjProps
> {
  readonly id: ID
  readonly plain: ObjC<Opt, Omit<Req, 'id'>>
  readonly many?: Many
  readonly one?: One
}

export function model<
  Opt extends Props,
  Req extends Props & ModelID,
  Many extends ObjProps = {},
  One extends ObjProps = {}
>({
  plain: { optional, required },
  many,
  one,
}: ResArgs<Opt, Req, Many, One>): ObjC<
  Opt & WrapMany<Many> & WrapOne<One>,
  Req
> {
  const m = many && wrapMany(many)
  const o = one && wrapOne(one)

  return obj({ ...optional, ...m, ...o }, required) as any
}

export function idModel<
  ID extends ModelID,
  Opt extends Props,
  Req extends Props,
  Many extends ObjProps = {},
  One extends ObjProps = {}
>({
  id,
  plain: { optional, required },
  many,
  one,
}: IDResArgs<ID, Opt, Req, Many, One>): ObjC<
  Opt & WrapMany<Many> & WrapOne<One>,
  Req
> {
  const m = many && wrapMany(many)
  const o = one && wrapOne(one)

  return obj({ ...optional, ...m, ...o }, { ...required, ...id }) as any
}
