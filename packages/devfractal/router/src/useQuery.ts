import { cast, Mixed, TypeOf } from 'stp-utils'
import { parse } from 'query-string'
import { useLocation } from 'react-router'

export function useQuery<Spec extends Mixed>(
  querySpec: Spec,
): TypeOf<typeof querySpec> {
  const { search } = useLocation()
  // tslint:disable-next-line: typedef
  const query = parse(search)
  cast(querySpec, query)

  return query
}
