import { getRGBANumberFromRGBA } from '../../functions'

describe('check getRGBANumberFromHex functions', () => {
  it('should return rgba value', () => {
    const check1 = getRGBANumberFromRGBA('rgba(10,23,12,0.4)')
    expect(check1.red).toBe(10)
    expect(check1.green).toBe(23)
    expect(check1.blue).toBe(12)
    expect(check1.alpha).toBe(0.4)
  })
  it('should return NAN for blue', () => {
    const check1 = getRGBANumberFromRGBA('rgba(10,23)')
    expect(check1.red).toBe(10)
    expect(check1.green).toBe(23)
    expect(check1.blue).toBe(NaN)
    expect(check1.alpha).toBe(NaN)
  })
})
