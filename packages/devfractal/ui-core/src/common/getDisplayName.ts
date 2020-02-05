// Copied from https://github.com/mui-org/material-ui/blob/master/packages/material-ui-utils/src/getDisplayName.js
import { ForwardRef } from 'react-is'

// Simplified polyfill for IE 11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
const fnNameMatchRegex: RegExp = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/

export function getFunctionName(fn: Function): string {
  const match: RegExpMatchArray | null = `${fn}`.match(fnNameMatchRegex)
  const name: string | null = match && match[1]
  return name || ''
}

function getFunctionComponentName(
  Component: React.ComponentType,
  fallback: string = '',
): string {
  return (
    Component.displayName ||
    Component.name ||
    getFunctionName(Component) ||
    fallback
  )
}

function getWrappedName(
  outerType: React.ComponentType,
  innerType: React.ComponentType,
  wrapperName: string,
): string {
  const functionName: string = getFunctionComponentName(innerType)
  return (
    outerType.displayName ||
    (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName)
  )
}

/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE 11 support
 *
 */
export function getDisplayName(Component: React.FC): string | undefined {
  // tslint:disable-next-line: no-null-keyword
  if (Component == null) {
    return undefined
  }

  if (typeof Component === 'string') {
    return Component
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component')
  }

  if (typeof Component === 'object') {
    const C: any = Component as any
    switch (C.$$typeof) {
      case ForwardRef:
        return getWrappedName(C, C.render, 'ForwardRef')
      default:
        return undefined
    }
  }

  return undefined
}
