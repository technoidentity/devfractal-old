import * as React from 'react'
import classNames from 'classnames'

interface PanelTabsItemProps {
  readonly active?: boolean
}

export const Panel: React.SFC = ({ children }) => (
  <nav className="panel">{children}</nav>
)

export const PanelHeading: React.SFC = ({ children }) => (
  <p className="panel-heading">{children}</p>
)

export const PanelBlock: React.SFC = ({ children }) => (
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

export const PanelTabs: React.SFC = ({ children }) => {
  return <p className="panel-tabs">{children}</p>
}
