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
import { Employee, employeeAPI } from '../common'
import { Actions } from './Actions'
import { StaticPagination } from './Pagination'

export const EmployeeListProps = req({ employeeList: readonlyArray(Employee) })

type EmployeeListProps = TypeOf<typeof EmployeeListProps>

const EmployeeListView: React.FC<EmployeeListProps> = ({ employeeList }) => (
  <>
    <ButtonsGroup alignment="right">
      <Link to="/employees/add" className="button is-primary">
        Add Employee
      </Link>
    </ButtonsGroup>
    <SimpleTable
      data={employeeList}
      headers={['name', 'role', 'Actions']}
      striped
    >
      {(key, values) =>
        key === 'Actions' ? (
          <Actions editURL={`employees/${values.id}/edit`} />
        ) : // tslint:disable-next-line: no-null-keyword
        null
      }
    </SimpleTable>
  </>
)

export const EmployeeListTable = component(
  EmployeeListProps,
  ({ employeeList }) => (
    <Section>
      <Title size="4" textColor="info">
        Employee
      </Title>
      <EmployeeListView employeeList={employeeList} />
      <StaticPagination />
    </Section>
  ),
)

export const EmployeeList: React.FC = () => (
  <Get asyncFn={() => employeeAPI.many()}>
    {data => <EmployeeListTable employeeList={data} />}
  </Get>
)
