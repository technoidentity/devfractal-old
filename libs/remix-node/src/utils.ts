import type { LoaderArgs } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import type { FormErrors } from '@df/remix-core'
import { formErrors } from '@df/remix-core'
import type { Result } from '@df/result'
import { isFail } from '@df/result'
import invariant from 'tiny-invariant'
import { z } from 'zod'

type Request = LoaderArgs['request']

export function badRequest<T extends object>(data: FormErrors<T>) {
  return json(data, { status: 400 })
}

export function badRequestFromResult<T extends object>(
  result: Result<string, T>,
) {
  invariant(isFail(result), 'badRequestFromResult expects a fail result')

  return badRequest<T>({ formError: result.error })
}

export function actionResult<T>(
  result: Result<string, T>,
  options?: { redirectUrl: string },
) {
  return isFail(result)
    ? badRequest({ formError: result.error })
    : options === undefined
    ? json({})
    : redirect(options.redirectUrl)
}

// export function getSpec<Spec extends z.ZodRawShape | z.ZodTypeAny>(
//   spec: Spec,
// ): z.ZodObject<GetRawShape<Spec>> {
//   return spec instanceof z.ZodType ? spec : z.object(spec)
// }

export async function safeFormData<Output, Input>(
  spec: z.ZodType<Output, z.ZodTypeDef, Input>,
  request: Request,
) {
  const values = Object.fromEntries(await request.clone().formData())
  return spec.safeParse(values)
}

export async function safeAction<Spec extends z.AnyZodObject, R>(
  formDataSpec: Spec,
  { request }: LoaderArgs,
  fn: (values: z.infer<typeof formDataSpec>) => R,
) {
  const result = await safeFormData(formDataSpec, request)
  if (!result.success) {
    return badRequest({ fieldErrors: formErrors(result.error) })
  }

  return fn(result.data)
}

export async function safeActions<
  U extends string,
  T extends Readonly<[U, ...U[]]>,
  Actions extends Record<
    z.infer<z.ZodEnum<z.Writeable<T>>>,
    (args: LoaderArgs) => unknown
  >,
>(spec: z.ZodEnum<z.Writeable<T>>, args: LoaderArgs, actions: Actions) {
  const formData = await args.request.clone().formData()
  const actionKey = spec.parse(formData.get('_action'))
  invariant(actionKey in actions, `${actionKey} not supported`)

  return actions[actionKey](args)
}

const HTTPMethods = z.enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
type HTTPMethods = z.infer<typeof HTTPMethods>

export async function methods<
  Actions extends Partial<Record<HTTPMethods, (args: LoaderArgs) => unknown>>,
>(args: LoaderArgs, actions: Actions) {
  const method = HTTPMethods.parse(args.request.method)
  const fn = actions[method]
  invariant(fn !== undefined, `${method} not supported`)

  return fn(args)
}

export function safeParams<Spec extends z.ZodTypeAny>(
  spec: Spec,
  params: LoaderArgs['params'],
) {
  return spec.parse(params)
}

export function onlyMethod<Spec extends z.AnyZodObject, R>(
  args: LoaderArgs,
  spec: Spec,
  fn: (values: z.infer<typeof spec>) => Promise<Result<string, R>>,
  options?: { redirectUrl: string },
) {
  return safeAction(spec, args, async values =>
    actionResult(await fn(values), options),
  )
}

export function method<Spec extends z.AnyZodObject, R>(
  spec: Spec,
  fn: (values: z.infer<Spec>) => Promise<Result<string, R>>,
) {
  return (args: LoaderArgs) => onlyMethod(args, spec, fn)
}
