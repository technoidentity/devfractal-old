import React from 'react'
import { Viewer } from 'technoidentity-devfractal-crud'
import { Box, Label } from 'technoidentity-devfractal-ui-core'
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
