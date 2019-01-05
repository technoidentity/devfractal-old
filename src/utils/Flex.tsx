import React from 'react'

interface FlexProps {
  readonly direction?: 'row' | 'column'
}

export const Flex: React.SFC<FlexProps> = ({ direction = 'row', children }) => (
  <div style={{ display: 'flex', flexDirection: direction as any }}>
    {children}
  </div>
)
