import React from 'react'
import { classNames } from 'technoidentity-devfractal'
export const MenuBurger: React.FC<any> = ({ isMinimal, onClick }) => (
  <a
    className={classNames('menu-burger', { minimal: isMinimal })}
    onClick={onClick}
  >
    <span />
    <span />
    <span />
  </a>
)
