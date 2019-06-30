import React from 'react'
import { Section } from 'technoidentity-devfractal'
import { ServerError } from './ServerError'
import { useSubmit } from './useSubmit'

export interface PostProps<T> {
  readonly title: string
  readonly url: string
  readonly component: React.FC<{ onSubmit(data: T): Promise<void> }>
  onPost(data: T): Promise<T>
}

export function Post<T>({
  title,
  url,
  onPost,
  component: Component,
}: PostProps<T>): JSX.Element {
  const [serverError, onSubmit] = useSubmit(url, onPost)

  return (
    <Section>
      <h1 className="title has-text-centered">{title}</h1>
      <ServerError error={serverError} />
      <Component onSubmit={onSubmit} />
    </Section>
  )
}
