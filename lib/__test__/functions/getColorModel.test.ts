import { getColorModel } from '../../functions'

describe('check getColorModel functions', () => {
  it('should return INVALID COLOR', () => {
    const check1 = getColorModel('#33')
    const check2 = getColorModel('#3333333')
    const check3 = getColorModel('#33333')
    const check4 = getColorModel('33333')
    const check5 = getColorModel('rgb(10,10,10,2)')
    const check6 = getColorModel('rgb(10,10,555)')
    expect(check1).toBe('INVALID COLOR')
    expect(check2).toBe('INVALID COLOR')
    expect(check3).toBe('INVALID COLOR')
    expect(check4).toBe('INVALID COLOR')
    expect(check5).toBe('INVALID COLOR')
    expect(check6).toBe('INVALID COLOR')
  })
  it('should identify hex', () => {
    const check1 = getColorModel('#333')
    const check2 = getColorModel('#333333')
    expect(check1).toBe('HEX')
    expect(check2).toBe('HEX')
  })
  it('should identify hexa', () => {
    const check1 = getColorModel('#3333')
    const check2 = getColorModel('#33333333')
    expect(check1).toBe('HEXA')
    expect(check2).toBe('HEXA')
  })
  it('should identify hsl', () => {
    const check = getColorModel('hsl(10,10%,10%)')
    expect(check).toBe('HUE')
  })
  it('should identify hsla', () => {
    const check = getColorModel('hsla(10,10%,10%,1)')
    expect(check).toBe('HUEA')
  })
  it('should identify rgb', () => {
    const check = getColorModel('rgb(10,23,255)')
    expect(check).toBe('RGB')
  })
  it('should identify rgba', () => {
    const check = getColorModel('rgba(10,23,255,0.5)')
    expect(check).toBe('RGBA')
  })
  it('should identify html', () => {
    const check = getColorModel('red')
    expect(check).toBe('HTML')
  })
})
