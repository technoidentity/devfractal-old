import { Omit } from './commonHelpers'

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
  readonly responsiveVisibility?: boolean
}

export const responsiveClass: (helpers: ResponsiveHelpers) => string = ({
  display,
  breakpoint,
  responsiveVisibility,
}) => {
  const hiddenClass: string = responsiveVisibility
    ? `-${responsiveVisibility}`
    : ''
  const breakpointClass: string = breakpoint ? `-${breakpoint}` : ''

  return `${display}${hiddenClass}${breakpointClass}`
}

export type ResponsiveHelpersRemoved<T> = Omit<T, keyof ResponsiveHelpers>

export function removeResponsiveHelpers<T extends ResponsiveHelpers>(
  props: T,
): ResponsiveHelpersRemoved<T> {
  const { display, breakpoint, responsiveVisibility, ...result } = props
  return result
}
