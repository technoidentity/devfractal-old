import * as React from 'react'

type DeleteSize = 'small' | 'medium' | 'large'

interface DeleteProps {
  readonly size?: DeleteSize
}

export const Delete: React.SFC<DeleteProps> = ({ size }) => {
  return <a className={`delete is-${size}`} />
}
