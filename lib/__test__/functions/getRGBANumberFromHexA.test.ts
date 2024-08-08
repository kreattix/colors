import { getRGBANumberFromHexA } from '../../functions'

describe('check getRGBANumberFromHex functions', () => {
  it('should return rgba value', () => {
    const check1 = getRGBANumberFromHexA('#4563')
    expect(check1.red).toBe(68)
    expect(check1.green).toBe(85)
    expect(check1.blue).toBe(102)
    expect(check1.alpha).toBe(0.2)
  })
  it('should return NAN for alpha', () => {
    const check1 = getRGBANumberFromHexA('#422')
    expect(check1.red).toBe(68)
    expect(check1.green).toBe(34)
    expect(check1.blue).toBe(34)
    expect(check1.alpha).toBe(NaN)
  })
})
