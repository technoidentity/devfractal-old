import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ButtonsGroup,
  Navbar,
  NavbarBrand,
  NavbarItem,
  Section,
  SimpleTable,
  Title,
} from 'technoidentity-devfractal'
import { fake, req } from 'technoidentity-utils'
import { Driver } from '../common'

const DriverListProps = req({
  driverList: readonlyArray(Driver),
})

type DriverListProps = TypeOf<typeof DriverListProps>

export const DriverListForm: React.FC<DriverListProps> = ({ driverList }) => (
  <>
    <ButtonsGroup alignment="right">
      <Link to="/drivers/add" className="button is-primary">
        Add Driver
      </Link>
    </ButtonsGroup>
    <SimpleTable
      data={driverList}
      headers={['name', 'lastActive', 'shift', 'status']}
      striped
    />
  </>
)

export const multipleDrivers = (n: Number) => {
  const drivers = []
  for (let i = 0; i < n; i += 1) {
    drivers.push(fake(Driver))
  }
  return drivers
}

export const DriverList = () => (
  <>
    <Navbar textColor="info" textBackgroundColor="light">
      <NavbarBrand>
        <NavbarItem>
          <Title size="4">Drivers</Title>
        </NavbarItem>
      </NavbarBrand>
    </Navbar>
    <Section>
      <DriverListForm driverList={multipleDrivers(10)} />
    </Section>
  </>
)
