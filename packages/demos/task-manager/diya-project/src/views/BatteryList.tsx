import { readonlyArray } from 'io-ts'
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
import { fake, range, req } from 'technoidentity-utils'
import { Battery } from '../common'

const BatteryListProps = req({ batteryList: readonlyArray(Battery) })

export const BatteryListForm = component(
  BatteryListProps,
  ({ batteryList }) => (
    <>
      <ButtonsGroup alignment="right">
        <Link to="/batteries/add" className="button is-primary">
          Add Battery
        </Link>
      </ButtonsGroup>

      <SimpleTable
        data={batteryList}
        headers={['name', 'id', 'group', 'remainingCycles', 'status']}
        striped
      />
    </>
  ),
)

export const BatteryListTable = component(
  BatteryListProps,
  ({ batteryList }) => (
    <Section>
      <Title size="4">Battery</Title>
      <BatteryListForm batteryList={batteryList} />
    </Section>
  ),
)

export const BatteryList: React.FC = () => (
  <Get asyncFn={async () => range(10).map(i => fake(Battery))}>
    {data => <BatteryListTable batteryList={data} />}
  </Get>
)
