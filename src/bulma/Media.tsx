import * as React from 'react'

interface MediaProps {
  readonly children: React.ReactNode
}

interface MediaLeftProps {
  readonly children: React.ReactNode
}

interface MediaRightProps {
  readonly children: React.ReactNode
}

interface MediaContentProps {
  readonly children: React.ReactNode
}

export const Media: React.SFC<MediaProps> = ({ children }) => (
  <article className="media">{children}</article>
)

export const MediaLeft: React.SFC<MediaLeftProps> = ({ children }) => (
  <figure className="media-left">{children}</figure>
)

export const MediaRight: React.SFC<MediaRightProps> = ({ children }) => (
  <div className="media-right">{children}</div>
)

export const MediaContent: React.SFC<MediaContentProps> = ({ children }) => (
  <div className="media-content">{children}</div>
)
