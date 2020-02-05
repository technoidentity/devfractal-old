import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

export interface MediaProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const Media: React.FC<MediaProps> = ({ children, ...props }) => (
  <El as="article" {...props} className={classNamesHelper(props, 'media')}>
    {children}
  </El>
)

export interface MediaLeftProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const MediaLeft: React.FC<MediaLeftProps> = ({ children, ...props }) => (
  <El as="figure" {...props} className={classNamesHelper(props, 'media-left')}>
    {children}
  </El>
)

export interface MediaRightProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const MediaRight: React.FC<MediaRightProps> = ({
  children,
  ...props
}) => (
  <El {...props} className={classNamesHelper(props, 'media-right')}>
    {children}
  </El>
)

export interface MediaContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const MediaContent: React.FC<MediaContentProps> = ({
  children,
  ...props
}) => (
  <El {...props} className={classNamesHelper(props, 'media-content')}>
    {children}
  </El>
)
