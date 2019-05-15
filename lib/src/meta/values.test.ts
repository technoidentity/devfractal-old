import { validate } from 'tcomb-validation'
import {
  MArray,
  maybe,
  MBool,
  MDate,
  MEnum,
  MNumber,
  MObject,
  MString,
} from './index'
import { metaToTcomb } from './metaToTcomb'
import { ObjectMT } from './types'

test('create meta using values', () => {
  const customerMeta: ObjectMT = MObject(
    {
      name: MString(),
      type: MEnum(['manager', 'programmer', 'team-leader'], 'CustomerType'),
      joined: MDate(),
      retired: maybe(MBool()),
      addresses: MArray(
        MObject({
          city: MString(),
          zip: MNumber(),
          country: MString(),
        }),
      ),
    },

    'Customer',
  )

  // tslint:disable-next-line:typedef
  const customer = {
    name: 'foobar',
    type: 'team-leader',
    joined: new Date(),
    addresses: [
      { city: 'hyderabad', zip: 500018, country: 'india' },
      { city: 'chennai', zip: 500038, country: 'india' },
    ],
  }

  expect(
    validate(customer, metaToTcomb(customerMeta)).errors,
  ).toMatchInlineSnapshot(`Array []`)

  // tslint:disable-next-line: typedef
  const customerWithErrors = {
    name: 'foobar',
    type: 'team-leader',
    joined: new Date(),
    retired: 100,
    addresses: [
      { city: 'hyderabad', zip: '500018', country: 'india' },
      { city: 'chennai', zip: 500038, country: 'india' },
    ],
  }

  expect(validate(customerWithErrors, metaToTcomb(customerMeta)).errors)
    .toMatchInlineSnapshot(`
        Array [
          Struct {
            "actual": 100,
            "expected": [Function],
            "message": "Invalid value 100 supplied to /retired: Boolean",
            "path": Array [
              "retired",
            ],
          },
          Struct {
            "actual": "500018",
            "expected": [Function],
            "message": "Invalid value \\"500018\\" supplied to /addresses/0/zip: Number",
            "path": Array [
              "addresses",
              0,
              "zip",
            ],
          },
        ]
    `)
})
