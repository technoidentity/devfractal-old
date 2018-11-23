import * as React from 'react'
import classNames from 'classnames'

interface PanelHeadingProps {
  readonly children: React.ReactChild
}

interface PanelTabsProps {
  readonly children: ReadonlyArray<JSX.Element>
}

interface PanelTabsItemProps {
  readonly active?: boolean
  readonly children: React.ReactChild
}

interface PanelBlockProps {
  readonly children: React.ReactNode
}

interface PanelProps {
  readonly children: React.ReactNode
}

export const Panel: React.SFC<PanelProps> = ({ children }) => (
  <nav className="panel">{children}</nav>
)

export const PanelHeading: React.SFC<PanelHeadingProps> = ({ children }) => (
  <p className="panel-heading">{children}</p>
)

export const PanelBlock: React.SFC<PanelBlockProps> = ({ children }) => (
  <div className="panel-block">{children}</div>
)

export const PanelTabsItem: React.SFC<PanelTabsItemProps> = ({
  active,
  children,
}) => {
  const classes: string = classNames({
    'is-active': active,
  })
  return <a className={classes}>{children}</a>
}

export const PanelTabs: React.SFC<PanelTabsProps> = ({ children }) => {
  return (
    <div className="panel-tabs">
      {React.Children.map(children, child => (
        <a>{child}</a>
      ))}
    </div>
  )
}
