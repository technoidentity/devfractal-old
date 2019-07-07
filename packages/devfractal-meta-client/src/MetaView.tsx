import React from 'react'
import { Box, Label, SimpleViewer } from 'technoidentity-devfractal'
import { MT } from 'technoidentity-meta-core'

export interface MetaViewProps {
  readonly meta: MT
  readonly data: any
}

export const MetaView: React.FC<MetaViewProps> = ({ meta, data }) => {
  return (
    <Box>
      <Label>{meta.name}</Label>
      <SimpleViewer data={data} />
    </Box>
  )
}
