import * as React from 'react'

export const Media: React.SFC = ({ children }) => (
  <article className="media">{children}</article>
)

export const MediaLeft: React.SFC = ({ children }) => (
  <figure className="media-left">{children}</figure>
)

export const MediaRight: React.SFC = ({ children }) => (
  <div className="media-right">{children}</div>
)

export const MediaContent: React.SFC = ({ children }) => (
  <div className="media-content">{children}</div>
)
