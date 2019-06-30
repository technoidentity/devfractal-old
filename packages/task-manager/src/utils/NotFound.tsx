import React from 'react'
import { useRouter } from './RouterUtils'

export const NotFound: React.FC = () => {
  const { location } = useRouter()

  return <h1>{`path ${location.pathname} did not match any route`}</h1>
}
