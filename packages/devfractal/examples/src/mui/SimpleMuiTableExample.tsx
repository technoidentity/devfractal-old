import { SimpleMuiTable } from '@stp/crud/src/simple/SimpleMuiTable'
import { Section, Title } from '@stp/ui'
import React from 'react'

const data: ReadonlyArray<any> = [
  {
    username: 'foo',
    address: 'hyd',
    city: 'hyd',
    email: 'foobar@gmail.com',
    state: 'andhrapradesh',
  },
  {
    username: 'bar',
    address: 'hyd',
    city: 'hyd',
    email: 'foobar@gmail.com',
    state: 'telangana',
  },
  {
    username: 'bar',
    address: 'hyd',
    city: 'hyd',
    email: 'foobar@gmail.com',
    state: 'telangana',
  },
  {
    username: 'bar',
    address: 'hyd',
    city: 'hyd',
    email: 'foobar@gmail.com',
    state: 'telangana',
  },
  {
    username: 'bar',
    address: 'hyd',
    city: 'hyd',
    email: 'foobar@gmail.com',
    state: 'telangana',
  },
]

export const SimpleMaterialUiTableExample: React.FC = () => (
  <>
    <Section>
      <Title>Simple MUI Table</Title>
      <SimpleMuiTable data={data} />
    </Section>
    <Section>
      <Title>MUI Table with selected rows</Title>
      <SimpleMuiTable data={data} select={['username', 'email']} />
    </Section>
    <Section>
      <Title>MUI Table with override</Title>
      <SimpleMuiTable data={data} override={{ address: 'Address1' }} />
    </Section>
    <Section>
      <Title>MUI Table with extra</Title>
      <SimpleMuiTable data={data} extra={['zipCode', 'pinCode']} />
    </Section>
    <Section>
      <Title> MUI Table with onRowclicked(testing with console.log)</Title>
      <SimpleMuiTable
        data={data}
        onRowClicked={evt => console.log(evt.value)}
      />
    </Section>
  </>
)
