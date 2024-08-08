import { getRGBANumberFromRGB } from '../../functions'

describe('check getRGBANumberFromHex functions', () => {
  it('should return rgb value', () => {
    const check1 = getRGBANumberFromRGB('rgb(10,23,12)')
    expect(check1.red).toBe(10)
    expect(check1.green).toBe(23)
    expect(check1.blue).toBe(12)
    expect(check1.alpha).toBe(1)
  })
  it('should return NAN for blue', () => {
    const check1 = getRGBANumberFromRGB('rgb(10,23)')
    expect(check1.red).toBe(10)
    expect(check1.green).toBe(23)
    expect(check1.blue).toBe(NaN)
    expect(check1.alpha).toBe(1)
  })
})
