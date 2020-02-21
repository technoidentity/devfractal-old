import { parse } from 'query-string'
import { useLocation } from 'react-router'
import { cast, Mixed, TypeOf } from 'technoidentity-utils'

export function useQuery<Spec extends Mixed>(
  querySpec: Spec,
): TypeOf<typeof querySpec> {
  const { search } = useLocation()
  // tslint:disable-next-line: typedef
  const query = parse(search)
  cast(querySpec, query)

  return query
}
