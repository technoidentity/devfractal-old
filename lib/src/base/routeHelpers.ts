import { RouteComponentProps } from 'react-router'
import { Omit } from 'utils'

export type RouteComponentPropsRemoved<T> = Omit<T, keyof RouteComponentProps>

export const removeRouteComponentProps: <T extends RouteComponentProps>(
  props: T,
) => RouteComponentPropsRemoved<T> = ({
  match,
  location,
  history,
  staticContext,
  ...result
}) => result
