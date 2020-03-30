import * as server from 'json-server'
import { plural as pl } from 'pluralize'
import {
  Any,
  AnyObj,
  isObj,
  ObjRecType,
  pickID,
  pickMany,
  pickOne,
  pickPlain,
  range,
  verify,
} from 'srtp-utils'
import { chance } from './chance'
import { fake } from './fake'

// tslint:disable no-object-mutation

const resourceName = (spec: AnyObj) => pl(spec.name.toLowerCase())

const unwrapSpec = (spec: Any): AnyObj => {
  verify(isObj(spec) || spec instanceof ObjRecType)

  return isObj(spec) ? spec : spec.type
}

interface ResourceConfig {
  readonly spec: Any
  readonly count: number
}

function handleOne(
  spec: AnyObj,
  db: Record<string, ReadonlyArray<object>>,
  idKey: string,
) {
  const resName = resourceName(spec)
  const resource = db[resName]
  const ones = pickOne(spec).props
  for (const s of Object.values(ones)) {
    const other = unwrapSpec(s.spec)
    const otherResource = db[resourceName(other)]

    if (otherResource) {
      otherResource.forEach((r: any) => {
        r[`${resName}Id`] = (resource[
          chance.integer({ min: 0, max: otherResource.length - 1 })
        ] as any)[idKey]
      })
    }
  }
}

function handleMany(
  spec: AnyObj,
  db: Record<string, ReadonlyArray<object>>,
  idKey: string,
) {
  const resName = resourceName(spec)
  const resource = db[resName]
  for (const s of Object.values(pickMany(spec).props)) {
    const other = unwrapSpec(s.spec.type)
    if (
      Object.values(pickOne(other).props).includes(
        (os: any) => os.name === s.name,
      )
    ) {
      continue
    }
    const otherResName = resourceName(other)
    const otherResource = db[otherResName]
    for (const r of resource) {
      const id = `${otherResName}Id`
      ;(r as any)[id] = (otherResource[
        chance.integer({ min: 0, max: otherResource.length - 1 })
      ] as any)[idKey]
    }
  }
}

function fakeObjects(resources: readonly ResourceConfig[]) {
  const db: Record<string, ReadonlyArray<object>> = {}

  const specs = resources.map(r => ({ ...r, spec: unwrapSpec(r.spec) }))

  specs.forEach(({ count, spec }) => {
    const resName = resourceName(spec)
    const resData = range(count).map(_ => fake(pickPlain(spec)))
    db[resName] = resData
  })

  specs.forEach(({ spec }) => {
    verify(isObj(spec), `${spec.name} not an Obj`)

    const id = pickID(spec)

    verify(Object.keys(id.props).length === 1)

    const idKey = Object.keys(id.props)[0]

    handleOne(spec, db, idKey)
    handleMany(spec, db, idKey)
  })

  return db
}

export function startFakeJSONServer(
  resources: readonly ResourceConfig[],
  port = process.env.PORT || 5555,
) {
  server
    .create()
    .use(server.defaults())
    .use(server.router(fakeObjects(resources)))
    .listen(port, () => {
      console.log(`fake JSON Server is running at port: ${port}`)
    })
}
