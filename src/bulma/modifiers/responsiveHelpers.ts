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

export const responsiveClass: (
  display: Display,
  breakpoint?: ResponsiveModifier,
  hidden?: boolean,
) => string = (display, breakpoint, hidden = false) => {
  const hiddenClass: string = hidden ? `-${hidden}` : ''
  const breakpointClass: string = breakpoint ? `-${breakpoint}` : ''

  return `${display}${hiddenClass}${breakpointClass}`
}
