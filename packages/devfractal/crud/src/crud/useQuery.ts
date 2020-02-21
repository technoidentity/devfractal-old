import { parse } from 'query-string'
import { useLocation } from 'react-router'
import { cast, ObjC, Props, record, string, TypeOf } from 'technoidentity-utils'

export function useQuery<Opt extends Props, Req extends Props>(
  spec: ObjC<Req, Opt>,
): TypeOf<typeof spec> {
  const { search } = useLocation()
  const query: Record<string, string> = cast(
    record(string, string),
    parse(search),
  )

  return cast(spec, query)
}
