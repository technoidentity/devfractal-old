import React from 'react'
import { SimpleTable } from 'technoidentity-devfractal-simple'
import { Container, Title } from 'technoidentity-devfractal-ui-core'
import { MT } from 'technoidentity-meta-core'

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
