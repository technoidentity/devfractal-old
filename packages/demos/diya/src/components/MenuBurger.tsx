import React from 'react'
import { classNames } from 'technoidentity-devfractal'
export const MenuBurger: React.FC<any> = ({ isMinimal, onClick }) => (
  <div
    className={classNames('menu-burger', { minimal: isMinimal })}
    onClick={onClick}
  >
    <div className="burger-lines" />
  </div>
)
