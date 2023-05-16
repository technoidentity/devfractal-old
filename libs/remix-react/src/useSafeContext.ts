import React from 'react'
import invariant from 'tiny-invariant'

export function useSafeContext<T>(
  context: React.Context<T | undefined>,
  errorMessage: string,
): T {
  const ctx = React.useContext(context)
  invariant(ctx, errorMessage)
  return ctx
}
