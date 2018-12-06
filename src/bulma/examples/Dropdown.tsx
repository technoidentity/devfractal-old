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
  <div>
    <DropDown modifier="active">
      <DropDownTrigger>
        <Button
          className="is-primary"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          Dropdown button
        </Button>
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
        <Button aria-haspopup="true" aria-controls="dropdown-menu4">
          Hover me
        </Button>
      </DropDownTrigger>
      <DropDownMenu id="dropdown-menu4" role="menu">
        <DropDownContent>
          <DropDownItem>
            <p>
              You can insert <strong>any type of content</strong> within the
              dropdown menu.
            </p>
          </DropDownItem>
        </DropDownContent>
      </DropDownMenu>
    </DropDown>
  </div>
)
