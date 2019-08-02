import { format } from 'date-fns'
import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ButtonsGroup,
  Section,
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Tr,
} from 'technoidentity-devfractal'
import { fake, req } from 'technoidentity-utils'
import { SingleDriverDetails } from './common'

const SingleDriverProps = req({ singleDriverDetails: SingleDriverDetails })

type SingleDriverProps = TypeOf<typeof SingleDriverProps>

export const SingleDriver: React.FC<SingleDriverProps> = ({
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
  driverList: readonlyArray(SingleDriverDetails),
})

type DriverListProps = TypeOf<typeof DriverListProps>

export const DriverListForm: React.FC<DriverListProps> = ({ driverList }) => (
  <Section>
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
          <SingleDriver key={index} singleDriverDetails={driver} />
        ))}
      </TableBody>
    </Table>
  </Section>
)

export const multipleDrivers = (n: Number) => {
  const drivers = []
  for (let i = 0; i < n; i += 1) {
    drivers.push(fake(SingleDriverDetails))
  }
  return drivers
}

export const DriverList = () => (
  <DriverListForm driverList={multipleDrivers(10)} />
)
