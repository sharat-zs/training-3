import fizzbuzz from './fizzbuzz'

describe('fizzbuzz', () => {
  it('should return fizz', () => {
    expect(fizzbuzz(3)).toEqual('fizz')
  })

  it('should return buzz', () => {
    expect(fizzbuzz(5)).toEqual('buzz')
  })

  it('should return fizzbuzz', () => {
    expect(fizzbuzz(15)).toEqual('fizzbuzz')
  })

  test('should return undefined', () => {
    expect(fizzbuzz(13)).toBeUndefined()
  })
})
