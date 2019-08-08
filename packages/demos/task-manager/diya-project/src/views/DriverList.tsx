import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ButtonsGroup,
  component,
  Get,
  Section,
  SimpleTable,
  Title,
} from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Driver, driverAPI } from '../common'

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

export const DriverListTable = component(DriverListProps, ({ driverList }) => (
  <Section>
    <Title size="4">Drivers</Title>
    <DriverListForm driverList={driverList} />
  </Section>
))

export const DriverList: React.FC = () => (
  <Get asyncFn={() => driverAPI.many()}>
    {data => <DriverListTable driverList={data} />}
  </Get>
)
