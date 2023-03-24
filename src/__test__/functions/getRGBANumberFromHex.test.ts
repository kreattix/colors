import { getRGBANumberFromHex } from '../../functions'

describe('check getRGBANumberFromHex functions', () => {
  it('should return rgb value', () => {
    const check1 = getRGBANumberFromHex('#456')
    expect(check1.red).toBe(68)
    expect(check1.green).toBe(85)
    expect(check1.blue).toBe(102)
    expect(check1.alpha).toBe(1)
  })
  it('should return NAN for blue', () => {
    const check1 = getRGBANumberFromHex('#45')
    expect(check1.red).toBe(68)
    expect(check1.green).toBe(85)
    expect(check1.blue).toBe(NaN)
    expect(check1.alpha).toBe(1)
  })
})
