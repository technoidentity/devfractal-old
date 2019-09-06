import {
  CardApp,
  Cart,
  Counter,
  FieldsGeneralForm,
  LoginFormVariants,
  SimpleFormExample,
  SimpleTodo,
  Todo,
} from 'devfractal-examples'
import { Route, SimpleRedirect } from 'devfractal-router'
import React from 'react'

export const CompositesRoutes: React.FC = () => (
  <>
    <SimpleRedirect exact from="/composites" to="/composites/simple-form" />
    <Route path="/composites/simple-form" exact component={SimpleFormExample} />
    <Route
      path="/composites/general-form"
      exact
      component={FieldsGeneralForm}
    />
    <Route path="/composites/counter" exact component={Counter} />
    <Route path="/composites/todo" exact component={Todo} />
    {/* <Route path="/composites/treeview" exact component={TreeViewStructure} /> */}
    <Route path="/composites/simple-todo" exact component={SimpleTodo} />
    <Route path="/composites/github-card" exact component={CardApp} />
    <Route path="/composites/cart-app" exact component={Cart} />
    <Route
      path="/composites/login-form-variants"
      exact
      component={LoginFormVariants}
    />
  </>
)
