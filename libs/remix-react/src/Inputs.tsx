import type {
  AutocompleteProps,
  CheckboxProps,
  ChipProps,
  ColorInputProps,
  FileInputProps,
  InputProps,
  MultiSelectProps,
  NumberInputProps,
  PasswordInputProps,
  RadioGroupProps,
  RatingProps,
  SegmentedControlProps,
  SelectProps,
  SliderProps,
  SwitchProps,
  TextareaProps,
  TextInputProps,
} from '@mantine/core'
import {
  Autocomplete as MantineAutocomplete,
  Checkbox,
  Chip as MantineChip,
  ColorInput,
  FileInput,
  Input,
  MultiSelect,
  NumberInput,
  PasswordInput,
  Radio,
  Rating as MantineRating,
  SegmentedControl as MantineSegmentedControl,
  Select as MantineSelect,
  Slider as MantineSlider,
  Switch as MantineSwitch,
  Textarea,
  TextInput,
} from '@mantine/core'
import type {
  DatePickerInputProps as DatePickerProps,
  TimeInputProps,
} from '@mantine/dates'
import { DatePickerInput as MantineDatePicker, TimeInput } from '@mantine/dates'
import type { GetRawShape } from '@df/spec'
import type { FormSpec, ZodDateRange } from '@df/validator'
import type { ConditionalKeys } from 'type-fest'
import { z } from 'zod'
import { useFormContext } from './FormContext'

type Named<T, Name = string> = T & Readonly<{ name: Name }>

export const Str = <Spec extends FormSpec>(props: Named<TextInputProps>) => {
  const { form, errMsg, spec } = useFormContext<Spec>()

  return (
    <TextInput
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    />
  )
}

export const Content = (props: Named<TextareaProps>) => {
  const { form, errMsg, spec } = useFormContext()

  return (
    <Textarea
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    />
  )
}

export const Password = (props: Named<PasswordInputProps>) => {
  const { form, errMsg, spec } = useFormContext()

  return (
    <PasswordInput
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    />
  )
}

export const Number = (props: Named<NumberInputProps>) => {
  const { form, errMsg, spec } = useFormContext()

  return (
    <NumberInput
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    />
  )
}

export const Bool = (props: Named<CheckboxProps>) => {
  const { form, errMsg } = useFormContext()

  return (
    <Checkbox
      label="Remember me"
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    />
  )
}

export const Rating = (props: Named<RatingProps>) => {
  const { form } = useFormContext()
  return (
    <MantineRating
      {...props}
      {...form.getInputProps(props.name)}
      // @TODO: error={errMsg?.(props.name)}
    />
  )
}

export const Enum = ({
  children,
  ...props
}: Named<RadioGroupProps> & { values?: readonly string[] }) => {
  const { form, errMsg, spec } = useFormContext()

  return (
    <Radio.Group
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    >
      {props.values
        ? props.values.map(v => <Radio key={v} value={v} />)
        : children}
    </Radio.Group>
  )
}

export const EnumList = (props: Named<MultiSelectProps>) => {
  const { form, errMsg, spec } = useFormContext()

  return (
    <MultiSelect
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    />
  )
}

export const Select = (props: Named<SelectProps>) => {
  const { form, errMsg, spec } = useFormContext()

  const fp = form.getInputProps(props.name)
  const formProps = { ...fp, value: fp.value?.toString() }

  return (
    <MantineSelect
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...formProps}
      error={errMsg?.(props.name)}
    />
  )
}

export const Switch = (props: Named<SwitchProps>) => {
  const { form, errMsg } = useFormContext()

  return (
    <MantineSwitch
      {...props}
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    />
  )
}

export const Chip = (props: Named<ChipProps>) => {
  const { form } = useFormContext()

  return (
    <MantineChip
      {...props}
      {...form.getInputProps(props.name)}
      // @TODO: error={errMsg?.(props.name)}
    />
  )
}

export const SegmentedControl = (props: Named<SegmentedControlProps>) => {
  const { form } = useFormContext()

  return (
    <MantineSegmentedControl
      {...props}
      {...form.getInputProps(props.name)}
      // @TODO: error={errMsg?.(props.name)}
    />
  )
}

export const Slider = (props: Named<SliderProps>) => {
  const { form } = useFormContext()

  return (
    <MantineSlider
      {...props}
      {...form.getInputProps(props.name)}
      // @TODO: error={errMsg?.(props.name)}
    />
  )
}

export const File = (props: Named<FileInputProps>) => {
  const { form, errMsg, spec } = useFormContext()

  return (
    <FileInput
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    />
  )
}

export const Color = (props: Named<ColorInputProps>) => {
  const { form, errMsg, spec } = useFormContext()

  return (
    <ColorInput
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    />
  )
}

export const DatePicker = (props: Named<DatePickerProps>) => {
  const { form, errMsg, spec } = useFormContext()

  return (
    <MantineDatePicker
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    />
  )
}

export const DateRangePicker = (props: Named<DatePickerProps<'range'>>) => {
  const { form, spec, errMsg } = useFormContext()

  return (
    <MantineDatePicker
      type="range"
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    />
  )
}
export const Autocomplete = (props: Named<AutocompleteProps>) => {
  const { form, errMsg, spec } = useFormContext()

  return (
    <MantineAutocomplete
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    />
  )
}

export const Time = (props: Named<TimeInputProps>) => {
  const { form, errMsg, spec } = useFormContext()

  return (
    <TimeInput
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    />
  )
}

export const DynamicEnumList = (props: Named<MultiSelectProps>) => {
  const { form, errMsg, spec } = useFormContext()

  return (
    <MultiSelect
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...form.getInputProps(props.name)}
      error={errMsg?.(props.name)}
    />
  )
}

export const DynamicSelect = (props: Named<SelectProps>) => {
  const { form, errMsg, spec } = useFormContext()

  const fp = form.getInputProps(props.name)
  const formProps = { ...fp, value: fp.value?.toString() }

  return (
    <MantineSelect
      withAsterisk={!(spec[props.name] instanceof z.ZodOptional)}
      {...props}
      {...formProps}
      error={errMsg?.(props.name)}
    />
  )
}

export type HiddenProps = InputProps

export const Hidden = (props: Named<HiddenProps>) => {
  const { form } = useFormContext()

  return <Input type="hidden" {...props} {...form.getInputProps(props.name)} />
}

export type ActionProps = Omit<InputProps, 'value'> &
  Readonly<{ action: string }>

export const Action = ({ action, ...props }: ActionProps) => {
  return <Input {...props} type="hidden" name="_action" value={action} />
}

// type EnumKeys<Spec extends FormSpec> = ConditionalKeys<
//   GetRawShape<Spec>,
//   | z.ZodEnum<any>
//   | z.ZodNativeEnum<any>
//   | z.ZodDefault<z.ZodEnum<any>>
//   | z.ZodDefault<z.ZodNativeEnum<any>>
// >
type EnumArrayKeys<Spec extends FormSpec> = ConditionalKeys<
  GetRawShape<Spec>,
  z.ZodArray<z.ZodString>
>

type KeyByZod<Spec extends FormSpec, Z extends z.ZodTypeAny> = ConditionalKeys<
  GetRawShape<Spec>,
  | Z
  | z.ZodEffects<Z, any, any>
  | z.ZodDefault<Z>
  | z.ZodOptional<Z>
  | z.ZodOptional<Z | z.ZodDefault<Z>>
  | z.ZodOptional<z.ZodDefault<Z>>
>

type ZodNamed<Spec extends FormSpec, Props, Z extends z.ZodTypeAny> = Named<
  Props,
  KeyByZod<Spec, Z>
>

type StrNamed<Spec extends FormSpec, Props> = ZodNamed<Spec, Props, z.ZodString>
type NumNamed<Spec extends FormSpec, Props> = ZodNamed<Spec, Props, z.ZodNumber>
type BoolNamed<Spec extends FormSpec, Props> = ZodNamed<
  Spec,
  Props,
  z.ZodBoolean
>
type DateNamed<Spec extends FormSpec, Props> = ZodNamed<Spec, Props, z.ZodDate>
type EnumNamed<Spec extends FormSpec, Props> = Named<
  Props,
  KeyByZod<Spec, z.ZodEnum<any>> | KeyByZod<Spec, z.ZodNativeEnum<any>>
>

// type EnumNamed<T> =
// type PickNumOrStr = FieldPickByZod<z.ZodNumber> | FieldPickByZod<z.ZodString>
// type PickEnum =
//   | FieldPickByZod<z.ZodEnum<any>>
//   | FieldPickByZod<z.ZodNativeEnum<any>>

export type InputsType<Spec extends FormSpec> = {
  Str: (props: StrNamed<Spec, TextInputProps>) => JSX.Element
  Content: (props: StrNamed<Spec, TextareaProps>) => JSX.Element
  Password: (props: StrNamed<Spec, PasswordInputProps>) => JSX.Element
  Number: (props: NumNamed<Spec, NumberInputProps>) => JSX.Element
  Bool: (props: BoolNamed<Spec, CheckboxProps>) => JSX.Element
  Rating: (props: NumNamed<Spec, RatingProps>) => JSX.Element
  Select: (props: EnumNamed<Spec, SelectProps>) => JSX.Element
  Switch: (props: BoolNamed<Spec, SwitchProps>) => JSX.Element
  Chip: (props: BoolNamed<Spec, ChipProps>) => JSX.Element
  Slider: (props: NumNamed<Spec, SliderProps>) => JSX.Element
  Color: (props: StrNamed<Spec, ColorInputProps>) => JSX.Element
  DatePicker: (props: DateNamed<Spec, DatePickerProps>) => JSX.Element
  Autocomplete: (props: StrNamed<Spec, AutocompleteProps>) => JSX.Element
  SegmentedControl: (
    props: EnumNamed<Spec, SegmentedControlProps>,
  ) => JSX.Element
  Enum: (
    props: EnumNamed<Spec, RadioGroupProps> & {
      values?: readonly string[]
    },
  ) => JSX.Element

  Action: (props: ActionProps) => JSX.Element
  Hidden: (props: Named<HiddenProps>) => JSX.Element

  File: (
    props: Named<FileInputProps, ConditionalKeys<z.infer<Spec>, File>>,
  ) => JSX.Element

  EnumList: (props: Named<MultiSelectProps, EnumArrayKeys<Spec>>) => JSX.Element
  DynamicEnumList: (
    props: Named<
      MultiSelectProps,
      KeyByZod<
        Spec,
        z.ZodArray<z.ZodString | z.ZodDefault<z.ZodString>, 'many'>
      >
    >,
  ) => JSX.Element
  DynamicSelect: (
    props: Named<
      SelectProps,
      KeyByZod<Spec, z.ZodString> | KeyByZod<Spec, z.ZodNumber>
    >,
  ) => JSX.Element
  DateRangePicker: (
    props: ZodNamed<Spec, DatePickerProps<'range'>, ZodDateRange>,
  ) => JSX.Element
  Time: (
    props: Named<
      TimeInputProps,
      ConditionalKeys<
        GetRawShape<Spec>,
        z.ZodArray<z.ZodString> | z.ZodArray<z.ZodNumber>
      >
    >,
  ) => JSX.Element

  // Calendar: <Multiple extends boolean = false>(
  //   props: Named<
  //     CalendarProps<Multiple>,
  //     ConditionalKeys<GetRawShape<Spec>, Date[] | Date>
  //   >,
  // ) => JSX.Element
}

export const Inputs: InputsType<any> = {
  Action,
  Autocomplete,
  Bool,
  Chip,
  Color,
  Content,
  DatePicker,
  DateRangePicker,
  DynamicEnumList,
  DynamicSelect,
  Enum,
  EnumList,
  File,
  Hidden,
  Number,
  Password,
  Rating,
  SegmentedControl,
  Select,
  Slider,
  Str,
  Switch,
  Time,
  // Calendar,
}
