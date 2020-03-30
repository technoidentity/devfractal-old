import {
  CardApp,
  Cart,
  Counter,
  FieldsGeneralForm,
  LoginFormVariantsRoutes,
  SimpleFormExample,
  SimpleTodo,
  Todo,
} from 'devfractal-examples'
import React from 'react'
import { SafeRoute, SimpleRedirect } from 'srtp-core'

export const CompositesRoutes: React.FC = () => (
  <>
    <SimpleRedirect from="/composites" to="/composites/simple-form" />
    <SafeRoute path="/composites/simple-form" component={SimpleFormExample} />
    <SafeRoute path="/composites/general-form" component={FieldsGeneralForm} />
    <SafeRoute path="/composites/counter" component={Counter} />
    <SafeRoute path="/composites/todo" component={Todo} />
    <SafeRoute path="/composites/simple-todo" component={SimpleTodo} />
    <SafeRoute path="/composites/github-card" component={CardApp} />
    <SafeRoute path="/composites/cart-app" component={Cart} />
    <SafeRoute
      path="/composites/login-form-variants"
      component={LoginFormVariantsRoutes}
    />
  </>
)
