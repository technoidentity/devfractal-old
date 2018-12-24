import React from 'react'
import { Helpers, classNamesHelper } from '.'
import { Div } from './Div'

export interface TextProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

export const Text: React.SFC<TextProps> = ({ children, ...props }) => (
  <Div {...props} className={classNamesHelper(props)}>
    {children}
  </Div>
)
