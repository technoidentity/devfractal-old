export type Display =
  | 'block'
  | 'flex'
  | 'inline'
  | 'inline-block'
  | 'inline-flex'

export type ResponsiveModifier =
  | 'mobile'
  | 'tablet-only'
  | 'desktop-only'
  | 'widescreen-only'
  | 'touch'
  | 'tablet'
  | 'desktop'
  | 'widescreen'
  | 'fullhd'

export interface ResponsiveHelpers {
  readonly display?: Display
  readonly breakpoint?: ResponsiveModifier
  readonly hidden?: boolean
}

export const responsiveClass: (helpers: ResponsiveHelpers) => string = ({
  display,
  breakpoint,
  hidden,
}) => {
  const hiddenClass: string = hidden ? `-${hidden}` : ''
  const breakpointClass: string = breakpoint ? `-${breakpoint}` : ''

  return `${display}${hiddenClass}${breakpointClass}`
}

export type ResponsiveHelpersRemoved<T> = Pick<
  T,
  Exclude<keyof T, keyof ResponsiveHelpers>
>

export function removeResponsiveHelpers<T extends ResponsiveHelpers>(
  props: T,
): ResponsiveHelpersRemoved<T> {
  const { display, breakpoint, hidden, ...result } = props
  return result
}
