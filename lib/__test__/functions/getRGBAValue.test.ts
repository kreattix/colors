import { getRGBAValue } from '../../functions'

describe('check getRGBAValue functions', () => {
  it('should return hex value', () => {
    const check1 = getRGBAValue('#246')
    expect(check1.red).toBe(34)
    expect(check1.green).toBe(68)
    expect(check1.blue).toBe(102)
    expect(check1.alpha).toBe(1)
  })
  it('should return hexa value', () => {
    const check1 = getRGBAValue('#2463')
    expect(check1.red).toBe(34)
    expect(check1.green).toBe(68)
    expect(check1.blue).toBe(102)
    expect(check1.alpha).toBe(0.2)
  })
  it('should return rgb value', () => {
    const check1 = getRGBAValue('rgb(10,23,12)')
    expect(check1.red).toBe(10)
    expect(check1.green).toBe(23)
    expect(check1.blue).toBe(12)
    expect(check1.alpha).toBe(1)
  })
  it('should return rgba value', () => {
    const check1 = getRGBAValue('rgba(10,23,12,0.5)')
    expect(check1.red).toBe(10)
    expect(check1.green).toBe(23)
    expect(check1.blue).toBe(12)
    expect(check1.alpha).toBe(0.5)
  })
  it('should return rgb value', () => {
    const check1 = getRGBAValue('hsl(10,23%,12%)')
    expect(check1.red).toBe(38)
    expect(check1.green).toBe(26)
    expect(check1.blue).toBe(24)
    expect(check1.alpha).toBe(1)
  })
  it('should return rgba value', () => {
    const check1 = getRGBAValue('hsla(10,23%,12%,0.5)')
    expect(check1.red).toBe(38)
    expect(check1.green).toBe(26)
    expect(check1.blue).toBe(24)
    expect(check1.alpha).toBe(0.5)
  })
  it('should return default value', () => {
    const check1 = getRGBAValue('hsla(10,23%,12%)')
    expect(check1.red).toBe(0)
    expect(check1.green).toBe(0)
    expect(check1.blue).toBe(0)
    expect(check1.alpha).toBe(1)
  })
  it('should identify html', () => {
    const result = getRGBAValue('red')
    expect(result.red).toBe(255)
  })
})
