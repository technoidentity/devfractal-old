import React from 'react'
import { Tabs, TabsItem } from '../components/Tabs'

export const Composites: React.SFC = () => (
  <Tabs to="/composites" size="medium">
    <TabsItem value="simple">Simple</TabsItem>
    <TabsItem value="simple-login-form">Simple login form</TabsItem>
    <TabsItem value="counter">Counter</TabsItem>
    <TabsItem value="login-form">Login</TabsItem>
    <TabsItem value="sample-form"> Sample</TabsItem>
    <TabsItem value="todo">Todo</TabsItem>
  </Tabs>
)
