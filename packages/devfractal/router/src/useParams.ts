import { cast, Mixed, TypeOf } from '@stp/utils'
import { useParams as useParamsRR } from 'react-router'

export function useParams<Spec extends Mixed>(paramsSpec: Spec): TypeOf<Spec> {
  // tslint:disable-next-line: typedef
  const params = useParamsRR()
  cast(paramsSpec, params)

  return params
}
