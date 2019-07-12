import * as React from 'react'
import {
  Button,
  Field,
  FieldBody,
  FieldLabel,
  Input,
  Section,
} from 'technoidentity-devfractal'
import { StepItemComponent } from './internal'
import { SocialFormPropType } from './types'

export const SocialForm: ({
  initialValues,
  profileValues,
  nextClick,
  prevClick,
  onInputChange,
}: SocialFormPropType) => JSX.Element = ({
  initialValues,
  profileValues,
  nextClick,
  prevClick,
  onInputChange,
}: SocialFormPropType) => (
  <Section>
    <StepItemComponent activePage={3} />
    <Section textAlignment="centered" className="is-active">
      <Field horizontal>
        <FieldLabel fieldLabelSize="normal">Facebook Account</FieldLabel>
        <FieldBody>
          <Field>
            <Input
              name="facebookAccount"
              id="facebookAccount"
              type="text"
              placeholder="FacebookAccount"
              data-validate="require"
              onChange={e => {
                e.persist()
                onInputChange(e)
              }}
              value={initialValues.facebookAccount}
            />
          </Field>
        </FieldBody>
      </Field>
      <Field horizontal>
        <FieldLabel fieldLabelSize="normal">Twitter Account</FieldLabel>
        <FieldBody>
          <Field>
            <Input
              name="twitterAccount"
              id="twitterAccount"
              type="text"
              placeholder="TwitterAccount"
              data-validate="require"
              onChange={e => {
                e.persist()
                onInputChange(e)
              }}
              value={initialValues.twitterAccount}
            />
          </Field>
        </FieldBody>
      </Field>
    </Section>
    <Field groupModifier="grouped-centered">
      <Button
        variant="light"
        onClick={e => {
          e.persist()
          prevClick(profileValues)
        }}
      >
        Previous
      </Button>
      <Button
        variant="light"
        onClick={e => {
          e.persist()
          nextClick(initialValues)
        }}
      >
        Next
      </Button>
    </Field>
  </Section>
)
