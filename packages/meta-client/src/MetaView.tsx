import React from 'react'
import { Box, Label, Viewer } from 'technoidentity-devfractal'
import { MT } from 'technoidentity-meta-core'

export interface MetaViewProps {
  readonly meta: MT
  readonly data: any
}

export const MetaView: React.FC<MetaViewProps> = ({ meta, data }) => {
  return (
    <Box>
      <Label>{meta.name}</Label>
      <Viewer data={data} />
    </Box>
  )
}
