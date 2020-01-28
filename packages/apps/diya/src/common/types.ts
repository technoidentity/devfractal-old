import { keyof, string } from '@stp/utils'
import { IntFromString } from '@stp/utils'
import { opt, req } from '@stp/utils'

export const Resources = keyof({
  batteries: 0,
  clients: 1,
  drivers: 2,
  employees: 3,
  evs: 4,
  geoFences: 5,
  invoices: 6,
  plans: 7,
  trips: 8,
  users: 9,
  vehicles: 10,
})

export const Params = req({ id: string })

export const ClientQuery = opt({ page: IntFromString, limit: IntFromString })
