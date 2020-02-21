import { MT } from 'meta-core'
import React from 'react'
import { SimpleTable } from 'technoidentity-crud'
import { Container, Title } from 'technoidentity-ui'
export interface MetaListProps {
  readonly meta: MT
  readonly data: readonly any[]
}

export const MetaList: React.FC<MetaListProps> = ({ meta, data }) => {
  return (
    <Container>
      <Title textAlignment="centered">{meta.name}</Title>
      <SimpleTable data={data} />
    </Container>
  )
}
