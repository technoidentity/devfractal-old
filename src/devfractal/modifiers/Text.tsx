import React from 'react'
import { classNamesHelper, Div, Helpers } from './internal'

type HeaderTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TextTags = HeaderTags | 'span' | 'div' | 'p'
export interface TextProps extends React.HTMLAttributes<HTMLElement>, Helpers {
  readonly as?: TextTags
}

export const Text: React.SFC<TextProps> = ({ as, children, ...props }) => (
  <Div as={as} {...props} className={classNamesHelper(props)}>
    {children}
  </Div>
)
