import { classNames } from '@stp/devfractal'
import React from 'react'

export const MenuBurger: React.FC<any> = ({ isMinimal, onClick }) => (
  <a
    href="#!"
    className={classNames('menu-burger', { minimal: isMinimal })}
    onClick={onClick}
  >
    <span />
    <span />
    <span />
  </a>
)
