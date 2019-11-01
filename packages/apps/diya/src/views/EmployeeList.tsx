import React from 'react'
import {
  CreateLink,
  links,
  listComponent,
  Section,
} from 'technoidentity-devfractal'
import { Employee } from '../common'
import { HeadTitle } from '../components'
import { Table } from '../reacttable/Table'

const employeeLinks = links('employees')

export const EmployeeList = listComponent(
  Employee,
  ({ data: employeeList }) => {
    const tableData = employeeList.map(data => ({
      ...data,
      actions: 'actions',
    }))
    return (
      <Section>
        <HeadTitle>Employee</HeadTitle>

        <CreateLink
          alignment="right"
          variant="primary"
          to={employeeLinks.create}
        >
          {' '}
          Add Employee
        </CreateLink>
        <Table
          tableData={[
            // @TODO: Fix 'id' required/partial later
            ...((tableData as unknown) as ReadonlyArray<
              Omit<Employee, 'id'> & { readonly id: string }
            >),
          ]}
          sorting={true}
          pagination={true}
          headerNames={['name', 'role']}
          filterOption={[{ columnName: 'name', filterType: 'search' }]}
          actions={{
            editTo: id => employeeLinks.edit(id),
          }}
        />
      </Section>
    )
  },
)
