import { MT } from 'meta-core'
import React from 'react'
import { Viewer } from 'srtp-crud'
import { Box, Label } from 'srtp-ui'

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
