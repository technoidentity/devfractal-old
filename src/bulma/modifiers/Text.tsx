import React from 'react'
import { Div } from './div'
import { classNamesHelper, Helpers } from './helpers'

export interface TextProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

export const Text: React.SFC<TextProps> = ({ children, ...props }) => (
  <Div as="span" {...props} className={classNamesHelper(props)}>
    {children}
  </Div>
)
