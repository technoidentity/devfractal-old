import { Get } from 'devfractal-api'
import { SimpleTable } from 'devfractal-simple'
import { ButtonsGroup, component, Section, Title } from 'devfractal-ui-core'
import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import { req } from 'technoidentity-utils'
import { Employee, employeeAPI } from '../common'
import { Actions } from './Actions'

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
      headers={['name', 'employeeID', 'role', 'Actions']}
    >
      {(key, values) =>
        key === 'Actions' ? (
          <Actions editUrl={`employees/${values.employeeID}/edit`} />
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
    </Section>
  ),
)

export const EmployeeList: React.FC = () => (
  <Get asyncFn={() => employeeAPI.many()}>
    {data => <EmployeeListTable employeeList={data} />}
  </Get>
)
