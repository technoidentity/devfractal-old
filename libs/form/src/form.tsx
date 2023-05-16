/* eslint-disable @typescript-eslint/naming-convention */
import type {
  AutocompleteProps,
  CheckboxProps,
  ChipProps,
  ColorInputProps,
  FileInputProps,
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
} from "@mantine/core";
import {
  Autocomplete as MantineAutocomplete,
  Checkbox,
  Chip as MantineChip,
  ColorInput,
  FileInput,
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
} from "@mantine/core";
import type {
  DatePickerInputProps as DatePickerProps,
  TimeInputProps,
} from "@mantine/dates";
import {
  // Calendar as MantineCalendar,
  // CalendarProps,
  DatePickerInput as MantineDatePicker,
  TimeInput,
} from "@mantine/dates";
import type { UseFormReturnType } from "@mantine/form";
import { createFormContext, useForm, zodResolver } from "@mantine/form";
import type { GetRawShape } from "@df/spec";
import type { FormSpec } from "@df/validator";
import { capitalize } from "lodash";
import React from "react";
import invariant from "tiny-invariant";
import type { ConditionalKeys } from "type-fest";
import type { z } from "zod";

type FormContext<Spec extends FormSpec> = [
  UseFormReturnType<z.TypeOf<Spec>, (values: z.TypeOf<Spec>) => z.TypeOf<Spec>>,
  () => UseFormReturnType<
    z.TypeOf<Spec>,
    (values: z.TypeOf<Spec>) => z.TypeOf<Spec>
  >
];

const MyContext = React.createContext<FormContext<any> | undefined>(undefined);

const useFormContext = () => {
  const ctx = React.useContext(MyContext);
  invariant(ctx, "use FormProvider");
  return ctx;
};

type Named<T, Name = string> = T & { readonly name: Name };

export const Str = (props: Named<TextInputProps>) => {
  const [form] = useFormContext();

  return <TextInput {...props} {...form.getInputProps(props.name)} />;
};

export const Content = (props: Named<TextareaProps>) => {
  const [form] = useFormContext();

  return <Textarea {...props} {...form.getInputProps(props.name)} />;
};

export const Password = (props: Named<PasswordInputProps>) => {
  const [form] = useFormContext();

  return <PasswordInput {...props} {...form.getInputProps(props.name)} />;
};

export const Number = (props: Named<NumberInputProps>) => {
  const [form] = useFormContext();

  return (
    <NumberInput
      {...props}
      {...form.getInputProps(props.name)}
      label={props.label || capitalize(props.name)}
    />
  );
};

export const Bool = (props: Named<CheckboxProps>) => {
  const [form] = useFormContext();

  return <Checkbox label="Remember me" {...form.getInputProps(props.name)} />;
};

export const Rating = (props: Named<RatingProps>) => {
  const [form] = useFormContext();
  return <MantineRating {...props} {...form.getInputProps(props.name)} />;
};

export const Enum = (
  props: Named<RadioGroupProps> & { values?: readonly string[] }
) => {
  const [form] = useFormContext();

  return (
    <Radio.Group {...props} {...form.getInputProps(props.name)}>
      {props.values ? (
        props.values.map((v: string) => (
          <Radio key={v} value={v} label={capitalize(v)} />
        ))
      ) : (
        <>
          <Radio value="generalPublic" label="General Public" />
          <Radio value="seniorCitizen" label="Senior Citizen" />
          <Radio value="employee" label="Employee" />
        </>
      )}
    </Radio.Group>
  );
};

export const EnumList = (props: Named<MultiSelectProps>) => {
  const [form] = useFormContext();

  return <MultiSelect {...props} {...form.getInputProps(props.name)} />;
};

export const Select = (props: Named<SelectProps>) => {
  const [form] = useFormContext();

  return <MantineSelect {...props} {...form.getInputProps(props.name)} />;
};

export const Switch = (props: Named<SwitchProps>) => {
  const [form] = useFormContext();

  return <MantineSwitch {...props} {...form.getInputProps(props.name)} />;
};

export const Chip = (props: Named<ChipProps>) => {
  const [form] = useFormContext();

  return (
    <MantineChip {...props} {...form.getInputProps(props.name)}></MantineChip>
  );
};

// export const Calendar = <Multiple extends z.ZodBoolean>(
//   props: Named<CalendarProps<Multiple>>,
// ) => {
//   const [form] = useFormContext()

//   return <MantineCalendar {...props} {...form.getInputProps(props.name)} />
// }

export const SegmentedControl = (props: Named<SegmentedControlProps>) => {
  const [form] = useFormContext();

  return (
    <MantineSegmentedControl {...props} {...form.getInputProps(props.name)} />
  );
};

export const Slider = (props: Named<SliderProps>) => {
  const [form] = useFormContext();

  return <MantineSlider {...props} {...form.getInputProps(props.name)} />;
};

export const File = (props: Named<FileInputProps>) => {
  const [form] = useFormContext();

  return <FileInput {...props} {...form.getInputProps(props.name)} />;
};

export const Color = (props: Named<ColorInputProps>) => {
  const [form] = useFormContext();

  return <ColorInput {...props} {...form.getInputProps(props.name)} />;
};

export const DatePicker = (props: Named<DatePickerProps>) => {
  const [form] = useFormContext();

  return <MantineDatePicker {...props} {...form.getInputProps(props.name)} />;
};

export const Autocomplete = (props: Named<AutocompleteProps>) => {
  const [form] = useFormContext();

  return <MantineAutocomplete {...props} {...form.getInputProps(props.name)} />;
};

export const Time = (props: Named<TimeInputProps>) => {
  const [form] = useFormContext();

  return <TimeInput {...props} {...form.getInputProps(props.name)} />;
};

type EnumKeys<Spec extends FormSpec> = ConditionalKeys<
  GetRawShape<Spec>,
  z.ZodEnum<any> | z.ZodNativeEnum<any>
>;
type EnumArrayKeys<Spec extends FormSpec> = ConditionalKeys<
  GetRawShape<Spec>,
  z.ZodArray<z.ZodString>
>;
type Inputs<Spec extends FormSpec> = {
  Str: (
    props: Named<
      TextInputProps,
      ConditionalKeys<GetRawShape<Spec>, z.ZodString>
    >
  ) => JSX.Element;
  Content: (
    props: Named<TextareaProps, ConditionalKeys<GetRawShape<Spec>, z.ZodString>>
  ) => JSX.Element;
  Password: (
    props: Named<
      PasswordInputProps,
      ConditionalKeys<GetRawShape<Spec>, z.ZodString>
    >
  ) => JSX.Element;
  Number: (
    props: Named<
      NumberInputProps,
      ConditionalKeys<GetRawShape<Spec>, z.ZodNumber>
    >
  ) => JSX.Element;
  Bool: (
    props: Named<
      CheckboxProps,
      ConditionalKeys<GetRawShape<Spec>, z.ZodBoolean>
    >
  ) => JSX.Element;
  Rating: (
    props: Named<RatingProps, ConditionalKeys<GetRawShape<Spec>, z.ZodNumber>>
  ) => JSX.Element;
  Enum: (
    props: Named<RadioGroupProps, EnumKeys<Spec>> & {
      values?: readonly string[];
    }
  ) => JSX.Element;
  EnumList: (
    props: Named<MultiSelectProps, EnumArrayKeys<Spec>>
  ) => JSX.Element;
  Select: (props: Named<SelectProps, EnumKeys<Spec>>) => JSX.Element;
  Switch: (
    props: Named<SwitchProps, ConditionalKeys<GetRawShape<Spec>, z.ZodBoolean>>
  ) => JSX.Element;
  Chip: (
    props: Named<ChipProps, ConditionalKeys<GetRawShape<Spec>, z.ZodBoolean>>
  ) => JSX.Element;
  Slider: (
    props: Named<SliderProps, ConditionalKeys<GetRawShape<Spec>, z.ZodNumber>>
  ) => JSX.Element;
  File: (
    props: Named<FileInputProps, ConditionalKeys<GetRawShape<Spec>, File>>
  ) => JSX.Element;
  Color: (
    props: Named<
      ColorInputProps,
      ConditionalKeys<GetRawShape<Spec>, z.ZodString>
    >
  ) => JSX.Element;
  DatePicker: (
    props: Named<DatePickerProps, ConditionalKeys<GetRawShape<Spec>, z.ZodDate>>
  ) => JSX.Element;
  Autocomplete: (
    props: Named<
      AutocompleteProps,
      ConditionalKeys<GetRawShape<Spec>, z.ZodString>
    >
  ) => JSX.Element;
  Time: (
    props: Named<
      TimeInputProps,
      ConditionalKeys<GetRawShape<Spec>, [z.ZodDate, z.ZodDate]>
    >
  ) => JSX.Element;
  SegmentedControl: (
    props: Named<
      SegmentedControlProps,
      ConditionalKeys<GetRawShape<Spec>, z.ZodEnum<any> | z.ZodNativeEnum<any>>
    >
  ) => JSX.Element;

  // Calendar: <Multiple extends z.ZodBoolean = false>(
  //   props: Named<
  //     CalendarProps<Multiple>,
  //     ConditionalKeys<GetRawShape<Spec>, Date[] | Date>
  //   >,
  // ) => JSX.Element
};

export function createForm<Spec extends FormSpec>(
  spec: Spec,
  initial?: z.infer<Spec>
) {
  const [Provider, useContext] = createFormContext<z.infer<Spec>>();

  const Form = ({
    onSubmit,
    children,
    initialValues,
  }: {
    onSubmit: (values: z.infer<Spec>) => void;
    children: React.ReactNode;
    initialValues?: z.infer<Spec>;
  }) => {
    const form = useForm({
      initialValues: initialValues || initial,
      validate: zodResolver(spec),
    });

    const value = React.useMemo(() => [form, useContext], [form]);

    return (
      <Provider form={form}>
        <MyContext.Provider value={value as any}>
          <form onSubmit={form.onSubmit(onSubmit)}>{children}</form>
        </MyContext.Provider>
      </Provider>
    );
  };

  const Inputs: Inputs<Spec> = {
    Autocomplete,
    Bool,
    Chip,
    Color,
    Content,
    DatePicker,
    Enum,
    EnumList,
    File,

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
  };
  // eslint-disable-next-line @typescript-eslint/naming-convention
  return { Form, useFormContext: useForm, Inputs };
}
