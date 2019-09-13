import 'bulma/bulma.sass'
import React from 'react'
import {
  AllControlHelpers,
  classNamesHelper,
  El,
} from 'technoidentity-devfractal'

type BurgerType =
  | '3dx'
  | '3dx-r'
  | '3dy'
  | '3dy-r'
  | '3dxy'
  | '3dxy-r'
  | 'arrow'
  | 'arrow-r'
  | 'arrowalt'
  | 'arrowalt-r'
  | 'arrowturn'
  | 'arrowturn-r'
  | 'boring'
  | 'collapse'
  | 'collapse-r'
  | 'elastic'
  | 'elastic-r'
  | 'emphatic'
  | 'emphatic-r'
  | 'minus'
  | 'slider'
  | 'slider-r'
  | 'spin'
  | 'spin-r'
  | 'spring'
  | 'spring-r'
  | 'stand'
  | 'stand-r'
  | 'squeeze'
  | 'vortex'
  | 'vortex-r'

export interface BurgerProps
  extends React.MenuHTMLAttributes<HTMLMenuElement>,
    AllControlHelpers {
  readonly burgerType: BurgerType
  readonly active?: boolean
}

export const Burger: React.FC<BurgerProps> = ({
  burgerType,
  active,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'hamburger', {
    [`hamburger--${burgerType}`]: burgerType,
    'is-active': active,
  })
  return (
    <nav>
      <El as="button" {...props} className={classes}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </El>
    </nav>
  )
}
