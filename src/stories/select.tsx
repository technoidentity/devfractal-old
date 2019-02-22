import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Column, Columns, Select } from '../docs/examples/devfractal'

storiesOf('Select', module)
  .add('with size', () => (
    <div>
      <Select ctrlSize="small" onChange={action('onChange')}>
        <option>small</option>
        <option>medium</option>
        <option>large</option>
      </Select>
      <Select ctrlSize="medium">
        <option>medium</option>
        <option>large</option>
        <option>small</option>
      </Select>
      <Select ctrlSize="large">
        <option>large</option>
        <option>medium</option>
        <option>small</option>
      </Select>
      <Columns>
        <Column>
          <Select fullWidth>
            <option>fullwidth</option>
            <option>medium</option>
            <option>small</option>
            <option>large</option>
          </Select>
        </Column>
      </Columns>
    </div>
  ))
  .add('with variant', () => (
    <div>
      <Select variant="primary">
        <option>primary</option>
      </Select>
      <Select variant="info">
        <option>info</option>
      </Select>
      <Select variant="success">
        <option>success</option>
      </Select>
      <Select variant="white">
        <option>warning</option>
      </Select>
      <Select variant="danger">
        <option>danger</option>
      </Select>
      <Select variant="dark">
        <option>dark</option>
      </Select>
      <Select variant="light">
        <option>light</option>
      </Select>
      <Select variant="black">
        <option>black</option>
      </Select>
      <Select variant="warning">
        <option>warning</option>
      </Select>
    </div>
  ))
  .add('rounded ', () => (
    <Select rounded>
      <option>Rounded Dropdown</option>
    </Select>
  ))
  .add('with state', () => (
    <div>
      <Select state="hovered">
        <option>hovered</option>
        <option>focused</option>
        <option>loading</option>
      </Select>
      <Select state="focused" variant="primary">
        <option>focused</option>
        <option>hovered</option>
        <option>loading</option>
      </Select>
      <Select loading>
        <option>loading</option>
        <option>focused</option>
        <option>hovered</option>
      </Select>
      <Select state="active">
        <option>loading</option>
        <option>focused</option>
        <option>hovered</option>
      </Select>
    </div>
  ))
  .add('Disabled select', () => (
    <Select disabled>
      <option>disabled select</option>
    </Select>
  ))
