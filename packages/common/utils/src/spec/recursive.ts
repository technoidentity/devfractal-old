import { Props, Type } from 'io-ts'
import { ObjC } from '.'

// tslint:disable no-class no-this no-invalid-this typedef no-object-mutation

export class ObjRecType<
  Opt extends Props,
  Req extends Props,
  A,
  O,
  I
> extends Type<A, O, I> {
  readonly _tag: 'RecursiveType' = 'RecursiveType'

  readonly type!: ObjC<Opt, Req>

  constructor(
    is: ObjRecType<Opt, Req, A, O, I>['is'],
    validate: ObjRecType<Opt, Req, A, O, I>['validate'],
    encode: ObjRecType<Opt, Req, A, O, I>['encode'],
    public runDefinition: () => ObjC<Opt, Req>,
  ) {
    super('RecursiveType', is, validate, encode)
  }
}

export interface ObjRecC<Opt extends Props, Req extends Props>
  extends ObjRecType<
    Opt,
    Req,
    ObjC<Opt, Req>['_A'],
    ObjC<Opt, Req>['_O'],
    ObjC<Opt, Req>['_I']
  > {}

Object.defineProperty(ObjRecType.prototype, 'type', {
  get() {
    return this.runDefinition()
  },
  enumerable: true,
  configurable: true,
})

export const rec = <Opt extends Props, Req extends Props>(
  definition: (self: ObjC<Opt, Req>) => ObjC<Opt, Req>,
): ObjRecC<Opt, Req> => {
  let cache: ObjC<Opt, Req>

  const runDefinition = (): ObjC<Opt, Req> => {
    if (!cache) {
      cache = definition(Self)
    }

    return cache
  }

  const Self: any = new ObjRecType<
    Opt,
    Req,
    ObjC<Opt, Req>['_A'],
    ObjC<Opt, Req>['_O'],
    ObjC<Opt, Req>['_I']
  >(
    (u): u is ObjC<Opt, Req>['_A'] => runDefinition().is(u),
    (u, c) => runDefinition().validate(u, c),
    a => runDefinition().encode(a),
    runDefinition,
  )

  return Self
}
