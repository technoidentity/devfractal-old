import { Route, SimpleRedirect } from '@stp/router'
import { RoutedTabs, RoutedTabsItem } from '@stp/ui'
import { Title } from '@stp/ui'
import React from 'react'
import {
  FieldsLoginForm,
  FormikLoginForm,
  SimpleLoginForm,
} from './login-form-variants'

export const LoginFormVariantsTab: React.FC = () => (
  <>
    <Title size="4" textAlignment="centered">
      Login form variants
    </Title>

    <RoutedTabs
      tabsStyle="boxed"
      to="/composites/login-form-variants"
      size="medium"
    >
      <RoutedTabsItem value="formik-form">Formik login form</RoutedTabsItem>
      <RoutedTabsItem value="fields-form">Fields login form</RoutedTabsItem>
      <RoutedTabsItem value="simple-form">Simple login form</RoutedTabsItem>
    </RoutedTabs>
  </>
)

export const LoginFormVariants: React.FC = () => <LoginFormVariantsTab />

export const LoginFormVariantsRoutes: React.FC = () => (
  <>
    <SimpleRedirect
      exact
      from="/composites/login-form-variants"
      to="/composites/login-form-variants/formik-form"
    />
    <Route
      exact={false}
      path="/composites/login-form-variants/"
      component={LoginFormVariants}
    />
    <Route
      path="/composites/login-form-variants/formik-form"
      component={FormikLoginForm}
    />
    <Route
      path="/composites/login-form-variants/fields-form"
      component={FieldsLoginForm}
    />

    <Route
      path="/composites/login-form-variants/simple-form"
      component={SimpleLoginForm}
    />
  </>
)
