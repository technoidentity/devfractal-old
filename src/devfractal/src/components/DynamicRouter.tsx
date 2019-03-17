import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { capitalizeAll, classNames, toLower } from '../lib'

export const dynamicRouter: (
  components: Readonly<React.ComponentType<any>>,
) => any = components => {
  const componentKeys: ReadonlyArray<string> = Object.keys(components)
  const urls: ReadonlyArray<string> = componentKeys.map(k => toLower(k, '-'))
  const navItems: ReadonlyArray<string> = componentKeys.map(k =>
    capitalizeAll(toLower(k, ' ')),
  )

  const Routes: React.SFC = () => (
    <section className="section">
      <div className="container">
        {urls.length > 0 && (
          <Route
            exact
            path="/"
            component={(components as any)[componentKeys[0]]}
          />
        )}
        {urls.map((url, i) => (
          <Route
            exact
            key={url}
            path={`/${url}`}
            component={(components as any)[componentKeys[i]]}
          />
        ))}
      </div>
    </section>
  )

  const Links: React.SFC = () => {
    const [visible, setVisible] = React.useState(false)
    return (
      <nav role="navigation" className="navbar is-light has-shadow is-spaced">
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/">
              <h1 className="is-size-4">Web Examples</h1>
            </NavLink>
            <a
              role="button"
              className={classNames('navbar-burger', 'burger', {
                'is-active': visible,
              })}
              onClick={() => setVisible(!visible)}
            >
              <span />
              <span />
              <span />
            </a>
          </div>
          <div className={classNames('navbar-menu', { 'is-active': visible })}>
            <div className="navbar-end">
              {urls.map((url, i) => (
                <NavLink
                  activeClassName="is-link is-active"
                  key={url}
                  className="navbar-item"
                  to={`/${url}`}
                  onClick={() => setVisible(false)}
                >
                  {navItems[i]}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return { Links, Routes }
}
