import React from 'react'
import { classNamesHelper, Div, Helpers } from '../internal'

export interface MediaProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const Media: React.SFC<MediaProps> = ({ children, ...props }) => (
  <Div as="article" {...props} className={classNamesHelper(props, 'media')}>
    {children}
  </Div>
)

export interface MediaLeftProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const MediaLeft: React.SFC<MediaLeftProps> = ({
  children,
  ...props
}) => (
  <Div as="figure" {...props} className={classNamesHelper(props, 'media-left')}>
    {children}
  </Div>
)

export interface MediaRightProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const MediaRight: React.SFC<MediaRightProps> = ({
  children,
  ...props
}) => (
  <Div {...props} className={classNamesHelper(props, 'media-right')}>
    {children}
  </Div>
)

export interface MediaContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const MediaContent: React.SFC<MediaContentProps> = ({
  children,
  ...props
}) => (
  <Div {...props} className={classNamesHelper(props, 'media-content')}>
    {children}
  </Div>
)
