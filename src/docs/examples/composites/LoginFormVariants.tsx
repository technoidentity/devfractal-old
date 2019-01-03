import React from 'react'
import { Route } from 'react-router-dom'
import { SimpleRedirect } from '../../../utils/SimpleRedirect'
import { RoutedTabs, RoutedTabsItem } from '../devfractal'
import { FieldsLoginForm } from './login-form-variants/FieldsLoginForm'
import { FormikLoginForm } from './login-form-variants/FormikLoginForm'
import { NotWorkingLoginForm } from './login-form-variants/NotWorkingLoginForm'
import { SimpleLoginForm } from './login-form-variants/SimpleLoginForm'

export const LoginFormVariantsTab: React.SFC = () => (
  <RoutedTabs to="/composites/login-form-variants" size="medium">
    <RoutedTabsItem value="formik-form">Formik login form</RoutedTabsItem>
    <RoutedTabsItem value="not-working-form">
      Not working login form
    </RoutedTabsItem>
    <RoutedTabsItem value="fields-form">Fields login form</RoutedTabsItem>
    <RoutedTabsItem value="simple-form">Simple login form</RoutedTabsItem>
  </RoutedTabs>
)

export const LoginFormVariants: React.SFC = () => <LoginFormVariantsTab />

export const LoginFormVariantsRoutes: React.SFC = () => (
  <>
    <SimpleRedirect
      exact
      from="/composites/login-form-variants"
      to="/composites/login-form-variants/formik-form"
    />
    <Route
      path="/composites/login-form-variants/"
      component={LoginFormVariantsTab}
    />
    <Route
      path="/composites/login-form-variants/formik-form"
      exact
      component={FormikLoginForm}
    />
    <Route
      path="/composites/login-form-variants/not-working-form"
      exact
      component={NotWorkingLoginForm}
    />

    <Route
      path="/composites/login-form-variants/fields-form"
      exact
      component={FieldsLoginForm}
    />

    <Route
      path="/composites/login-form-variants/simple-form"
      exact
      component={SimpleLoginForm}
    />
  </>
)
