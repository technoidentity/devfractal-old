import React from 'react'
import { RouteComponentProps } from 'react-router'
import { EditTaskForm } from '../views'

export const EditTaskRoute: React.FC<
  RouteComponentProps<{
    readonly id: string
  }>
> = ({ match, history }) => (
  <section className="section">
    <h1 className="title has-text-centered">Edit Task</h1>
    <EditTaskForm id={match.params.id} onEdit={async () => history.push('/')} />
  </section>
)
