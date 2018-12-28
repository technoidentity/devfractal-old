import React from 'react'
import { classNamesHelper, Helpers } from '.'
import { Div } from './div'

export interface TextProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

export const Text: React.SFC<TextProps> = ({ children, ...props }) => (
  <Div as="span" {...props} className={classNamesHelper(props)}>
    {children}
  </Div>
)
