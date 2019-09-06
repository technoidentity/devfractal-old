import { SimpleTable } from 'devfractal-simple'
import { Container, Title } from 'devfractal-ui-core'
import { MT } from 'meta-core'
import React from 'react'

export interface MetaListProps {
  readonly meta: MT
  readonly data: ReadonlyArray<any>
}

export const MetaList: React.FC<MetaListProps> = ({ meta, data }) => {
  return (
    <Container>
      <Title textAlignment="centered">{meta.name}</Title>
      <SimpleTable data={data} />
    </Container>
  )
}
