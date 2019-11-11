import { useLoadScript } from '@react-google-maps/api'
import { UseLoadScriptOptions } from '@react-google-maps/api/dist/useLoadScript'
import React from 'react'
import { libraries } from '../config'

interface LoadMapApiKeyProps {
  readonly loadComponent?: React.FC
  readonly errorComponent?: React.FC
}

export const LoadMapApiKey: React.FC<
  UseLoadScriptOptions & LoadMapApiKeyProps
> = ({
  loadComponent: LoadComponent,
  errorComponent: ErrorComponent,
  ...props
}) => {
  const { isLoaded, loadError } = useLoadScript({
    ...props,
    libraries,
  })

  const renderMap = () => <div>{props.children}</div>
  if (loadError) {
    return LoadComponent ? <LoadComponent /> : <div>Error</div>
  }
  if (isLoaded) {
    return renderMap()
  }
  return LoadComponent ? <LoadComponent /> : <div>Loading</div>
}
