// copied from tiny-invariant package

export const invariant: (condition: unknown, message?: string) => void = (
  condition,
  message,
) => {
  if (condition) {
    return
  }

  if (process.env.NODE_ENV === 'production') {
    // In production we strip the message but still throw
    throw new Error('Invariant failed')
  } else {
    // When not in production we allow the message to pass through
    // *This block will be removed in production builds*
    throw new Error(`Invariant failed: ${message || ''}`)
  }
}
