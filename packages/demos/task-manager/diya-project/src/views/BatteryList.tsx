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
import { req } from 'technoidentity-utils'
import { Actions, Battery, batteryAPI } from '../common'
import { StaticPagination } from '../components'

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
        headers={['name', 'group', 'remainingCycles', 'status', 'Actions']}
        striped
      >
        {(key, values) =>
          key === 'Actions' ? (
            <Actions editURL={`batteries/${values.id}/edit`} />
          ) : // tslint:disable-next-line: no-null-keyword
          null
        }
      </SimpleTable>
    </>
  ),
)

export const BatteryListTable = component(
  BatteryListProps,
  ({ batteryList }) => (
    <Section>
      <Title size="4" textColor="info">
        Batteries
      </Title>
      <BatteryListForm batteryList={batteryList} />
      <StaticPagination />
    </Section>
  ),
)

export const BatteryList: React.FC = () => (
  <Get asyncFn={() => batteryAPI.many()}>
    {data => <BatteryListTable batteryList={data} />}
  </Get>
)
