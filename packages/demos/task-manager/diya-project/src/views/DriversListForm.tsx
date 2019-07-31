import { format } from 'date-fns'
import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import {
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Tr,
} from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
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

export const DriversList: React.FC<DriverListProps> = ({ driverList }) => (
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
)
