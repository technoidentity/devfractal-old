import { FormikHelpers } from 'formik'

export interface EditorProps<T extends {}> {
  readonly data: T | (() => Promise<T>)
  readonly id: keyof T
  onSubmit?(values: T, actions: FormikHelpers<T>): void
}

export interface PagerProps {
  // first page is 1
  readonly page: number
  readonly maxPages?: number
  onPageChange(n: number): void
}

export interface ViewerViewProps<T extends {}> {
  readonly data: T
}

export interface RowClickEvent<T extends Record<string, any>> {
  readonly value: T
}

export interface TableViewProps<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T = keyof T
> {
  readonly select?: readonly Select[]
  readonly override?: Partial<Record<Select, string>>
  readonly extra?: readonly EK[]
  readonly data: readonly T[]
  onRowClicked?(value: RowClickEvent<T>): void
  children?(key: keyof T | EK, value: T): React.ReactNode
}

export interface CrudComponents<T extends Record<string, any>> {
  EditorView({ data, onSubmit, id }: EditorProps<T>): JSX.Element
  ViewerView({ data }: ViewerViewProps<T>): JSX.Element

  TableView<EK extends string, Select extends keyof T = keyof T>(
    args: TableViewProps<T, EK, Select>,
  ): JSX.Element

  readonly Pager: React.FC<PagerProps>
}
