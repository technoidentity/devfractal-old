import { Viewer } from 'devfractal-crud'
import { Box, Label } from 'devfractal-ui-core'
import React from 'react'
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
