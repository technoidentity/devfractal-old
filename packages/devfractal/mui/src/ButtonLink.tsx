import { Button, ButtonProps } from '@material-ui/core'
import React from 'react'
import { Link as RouterLink, LinkProps } from 'technoidentity-router'

export interface ButtonLinkProps extends ButtonProps {
  readonly to: LinkProps['to']
  readonly replace?: LinkProps['replace']
}

export const LinkBehavior: React.FC<any> = React.forwardRef(
  (props, ref: React.Ref<LinkProps>) => (
    <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
  ),
)

export const ButtonLink: React.FC<ButtonLinkProps> = props => {
  return <Button {...props} component={LinkBehavior} />
}
