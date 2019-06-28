// copied from tiny-warning package
export function warning(condition: unknown, message: string): void {
  if (process.env.NODE_ENV !== 'production') {
    if (condition) {
      return
    }

    const text: string = `Warning: ${message}`

    if (typeof console !== 'undefined') {
      // tslint:disable-next-line no-console
      console.warn(text)
    }

    // Throwing an error and catching it immediately to improve debugging.
    // A consumer can use 'pause on caught exceptions'
    // https://github.com/facebook/react/issues/4216
    try {
      throw Error(text)
      // tslint:disable-next-line no-empty
    } catch (x) {}
  }
}

export function fatal(message?: string): never {
  if (process.env.NODE_ENV === 'production') {
    // In production we strip the message but still throw
    throw new Error('Invariant failed')
  } else {
    // When not in production we allow the message to pass through
    // *This block will be removed in production builds*
    throw new Error(`Invariant failed: ${message || ''}`)
  }
}

// copied from tiny-invariant package
export function invariant(condition: unknown, message?: string): void {
  if (!condition) {
    fatal(message)
  }
}

// @TODO: debugWarning, debugInvariant
