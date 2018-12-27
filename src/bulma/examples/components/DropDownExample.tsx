import React from 'react'
import {
  DropDown,
  DropDownContent,
  DropDownDivider,
  DropDownItem,
  DropDownMenu,
  DropDownTrigger,
} from '../../components/Dropdown'
import { Button } from '../../form'

export const DropDownExample: React.SFC = () => (
  <div>
    <DropDown modifier="active">
      <DropDownTrigger>
        <Button variant="primary">Dropdown button</Button>
      </DropDownTrigger>
      <DropDownMenu id="dropdown-menu" role="menu">
        <DropDownContent>
          <DropDownItem href="#">Dropdown item</DropDownItem>
          <DropDownItem active>Dropdown item</DropDownItem>
          <DropDownItem>Dropdown item</DropDownItem>
          <DropDownItem>Dropdown item</DropDownItem>
          <DropDownDivider />
          <DropDownItem>With a divider</DropDownItem>
        </DropDownContent>
      </DropDownMenu>
    </DropDown>
    <DropDown modifier="hoverable">
      <DropDownTrigger>
        <Button>Hover me</Button>
      </DropDownTrigger>
      <DropDownMenu id="dropdown-menu4" role="menu">
        <DropDownContent>
          <DropDownItem>
            <div>
              You can insert any type of contentwithin the dropdown menu.
            </div>
          </DropDownItem>
        </DropDownContent>
      </DropDownMenu>
    </DropDown>
  </div>
)
