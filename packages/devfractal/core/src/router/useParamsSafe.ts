import { useParams } from 'react-router'
import { cast, ObjC, ObjTypeOf, Props } from 'technoidentity-utils'

export function useParamsSafe<Opt extends Props, Req extends Props>(
  paramsSpec: ObjC<Opt, Req>,
): ObjTypeOf<Opt, Req> {
  // tslint:disable-next-line: typedef
  const params = useParams()
  return cast(paramsSpec, params)
}
