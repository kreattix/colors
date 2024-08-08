import { getCompiledColorCode } from '../../functions'

describe('getCompiledColorCode', () => {
  it('should return compiled color code', () => {
    const color = 'red'
    const expectedColorCode = 'red'
    expect(getCompiledColorCode(color)).toBe(expectedColorCode)
  })

  it('should return default color code for invalid input', () => {
    const color = ''
    const expectedColorCode = '#000000'
    expect(getCompiledColorCode(color)).toBe(expectedColorCode)
  })
})
