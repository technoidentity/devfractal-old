import * as t from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { req } from 'technoidentity-utils'
import { startFakeJSONServer } from './fakeServer'

const User = req({
  id: t.Int,
  name: t.string,
  male: t.boolean,
  dateOfBirth: date,
})

startFakeJSONServer({ users: User })
