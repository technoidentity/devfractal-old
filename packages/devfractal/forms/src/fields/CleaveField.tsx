import { Field, FieldConfig, FieldProps } from 'formik'
import React from 'react'
import { CleaveInput, CleaveInputProps } from '../components'
import { OmitForm } from '../types'

type CleaveInputInnerProps<V> = FieldProps<V> & OmitForm<CleaveInputProps>

function CleaveInputInner<V>({
  form,
  field,
  ...props
}: CleaveInputInnerProps<V>): JSX.Element {
  return (
    <CleaveInput
      {...props}
      onChange={evt => form.setFieldValue(field.name, evt.currentTarget.value)}
      name={field.name}
      onBlur={field.onBlur}
      value={field.value}
    />
  )
}

export type CleaveInputFieldProps = CleaveInputProps & FieldConfig

export const CleaveInputField: React.FC<CleaveInputFieldProps> = props => (
  <Field {...props} component={CleaveInputInner} />
)

export interface CleaveTimeFieldProps
  extends Omit<CleaveInputFieldProps, 'options'> {
  readonly timePattern?: CleaveInputFieldProps['options']['timePattern']
}

export const CleaveTimeField: React.FC<CleaveTimeFieldProps> = ({
  timePattern = ['h', 'm'],
  ...props
}) => <CleaveInputField {...props} options={{ time: true, timePattern }} />

export interface CleaveDateFieldProps
  extends Omit<CleaveInputFieldProps, 'options'> {
  readonly datePattern?: CleaveInputFieldProps['options']['datePattern']
  readonly delimiter?: CleaveInputFieldProps['options']['delimiter']
}

export const CleaveDateField: React.FC<CleaveDateFieldProps> = ({
  datePattern = ['y', 'm', 'd'],
  delimiter = '/',
  ...props
}) => (
  <CleaveInputField
    {...props}
    options={{ date: true, datePattern, delimiter }}
  />
)

export interface CleavePhoneFieldProps
  extends Omit<CleaveInputFieldProps, 'options'> {
  readonly phoneRegionCode: CleaveInputFieldProps['options']['phoneRegionCode']
}

export const CleavePhoneField: React.FC<CleavePhoneFieldProps> = ({
  phoneRegionCode = 'IN',
  ...props
}) => <CleaveInputField {...props} options={{ phone: true, phoneRegionCode }} />

export interface CleaveNumeralFieldProps
  extends Omit<CleaveInputFieldProps, 'options'> {
  readonly numeralThousandsGroupStyle: CleaveInputFieldProps['options']['numeralThousandsGroupStyle']
}

export const CleaveNumeralField: React.FC<CleaveNumeralFieldProps> = ({
  numeralThousandsGroupStyle = 'thousand',
  ...props
}) => (
  <CleaveInputField
    {...props}
    options={{ numeral: true, numeralThousandsGroupStyle }}
  />
)

export interface CleaveCreditCardProps
  extends Omit<CleaveInputFieldProps, 'options'> {
  readonly onCreditCardTypeChanged?: CleaveInputFieldProps['options']['onCreditCardTypeChanged']
}

export const CleaveCreditCardField: React.FC<CleaveCreditCardProps> = ({
  onCreditCardTypeChanged,
  ...props
}) => (
  <CleaveInputField
    options={{ creditCard: true, onCreditCardTypeChanged }}
    {...props}
  />
)
