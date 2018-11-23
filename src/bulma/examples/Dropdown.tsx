import * as React from 'react'
import { Button } from '../Button'
import {
  DropDown,
  DropDownTrigger,
  DropDownMenu,
  DropDownContent,
  DropDownItem,
  DropDownDivider,
} from '../components/Dropdown'
export const DropDownExample: React.SFC = () => (
  <DropDown active>
    <DropDownTrigger>
      <Button>Dropdown button</Button>
    </DropDownTrigger>
    <DropDownMenu id="dropdown-menu" role="menu">
      <DropDownContent>
        <DropDownItem href="#">Dropdown item</DropDownItem>
        <DropDownItem href="#" active>
          Dropdown item
        </DropDownItem>
        <DropDownItem href="#">Dropdown item</DropDownItem>
        <DropDownItem href="#">Dropdown item</DropDownItem>
        <DropDownDivider />
        <DropDownItem href="#">With a divider</DropDownItem>
      </DropDownContent>
    </DropDownMenu>
  </DropDown>
)
