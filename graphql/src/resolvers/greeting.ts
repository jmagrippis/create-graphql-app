import { QueryGreetingArgs } from '../types'

export const greeting = (
  _: object,
  { name = 'World' }: QueryGreetingArgs
): string => `Hello, ${name}!`
