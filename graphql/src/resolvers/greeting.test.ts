import { greeting } from './greeting'

describe('greeting', () => {
  it('returns "Hello, World!" when given no query arguments', () => {
    const result = greeting({}, {})

    expect(result).toBe('Hello, World!')
  })

  it('use the given "name" argument in the greeting', () => {
    const resultA = greeting({}, { name: 'Johnny' })

    expect(resultA).toBe('Hello, Johnny!')

    const resultB = greeting({}, { name: 'Mr. Graph' })

    expect(resultB).toBe('Hello, Mr. Graph!')
  })
})
