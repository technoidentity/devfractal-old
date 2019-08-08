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
import { Client, clientAPI } from '../common'
import { StaticPagination } from './Pagination'

export const ClientListProps = req({
  clientList: readonlyArray(Client),
})

export const ClientListForm = component(ClientListProps, ({ clientList }) => (
  <>
    <ButtonsGroup alignment="right">
      <Link to="/clients/add" className="button is-primary">
        Add Client
      </Link>
    </ButtonsGroup>
    <SimpleTable data={clientList} striped />
  </>
))

export const ClientListTable = component(ClientListProps, ({ clientList }) => (
  <Section>
    <Title size="4">Clients</Title>
    <ClientListForm clientList={clientList} />
    <StaticPagination />
  </Section>
))

export const ClientList: React.FC = () => (
  <Get asyncFn={async () => clientAPI.many()}>
    {data => <ClientListTable clientList={data} />}
  </Get>
)