import React from 'react'
import { Function } from 'tcomb'
import { warning } from 'technoidentity-utils'

interface RenderPropsProps<Props> {
  readonly component?: React.ComponentType<Props> | React.ReactNode
  readonly children?: ((props: Props) => React.ReactNode) | React.ReactNode
  render?(props: Props): React.ReactNode
}

export function renderProps<Props>(
  props: RenderPropsProps<Props> & Props,
): React.ReactNode {
  const { component, children, render, ...rest } = props

  warning(
    !(props.component && props.render),
    'You should not use <Formik component> and <Formik render> in the same <Formik> component; <Formik render> will be ignored',
  )

  warning(
    !(
      props.component &&
      props.children &&
      React.Children.count(props.children) !== 0
    ),
    'You should not use component and  children in the same component; children will be ignored',
  )

  warning(
    !(
      props.render &&
      props.children &&
      React.Children.count(props.children) !== 0
    ),
    'You should not use render and children in the same component; children will be ignored',
  )

  warning(
    !(props.render && props.component),
    'You should not use render and component in the same component; component will be ignored',
  )

  if (render) {
    return render(rest as Props)
  }
  if (component) {
    return React.createElement(component as any, rest)
  }

  if (Function.is(children)) {
    return children(rest as Props)
  }
  return children
}
