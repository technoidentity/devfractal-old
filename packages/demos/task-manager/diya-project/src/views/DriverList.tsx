import { format } from 'date-fns'
import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ButtonsGroup,
  Navbar,
  NavbarBrand,
  NavbarItem,
  Section,
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Title,
  Tr,
} from 'technoidentity-devfractal'
import { fake, req } from 'technoidentity-utils'
import { Driver } from './common'

const SingleDriverProps = req({ singleDriverDetails: Driver })

type SingleDriverProps = TypeOf<typeof SingleDriverProps>

export const SingleDriverView: React.FC<SingleDriverProps> = ({
  singleDriverDetails,
}) => (
  <Tr>
    <Td>{singleDriverDetails.name}</Td>
    <Td>{format(singleDriverDetails.lastActive, 'YYYY/MM/DD')} </Td>
    <Td>{singleDriverDetails.shift}</Td>
    <Td>{singleDriverDetails.status}</Td>
  </Tr>
)

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
    <Table fullWidth striped>
      <TableHead>
        <Tr>
          <Th>Name</Th>
          <Th>Last Active</Th>
          <Th>Shift</Th>
          <Th>Status</Th>
        </Tr>
      </TableHead>
      <TableBody>
        {driverList.map((driver, index) => (
          <SingleDriverView key={index} singleDriverDetails={driver} />
        ))}
      </TableBody>
    </Table>
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
