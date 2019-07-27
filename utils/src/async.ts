import { nop } from './common'

export async function timeout<T>(delay: number, f: () => T = nop): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(f()), delay))
}

export async function interval<T>(
  interval: number,
  f: () => T = nop,
): Promise<T> {
  return new Promise(resolve => setInterval(() => resolve(f()), interval))
}
