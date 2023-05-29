import { Color } from '..'

describe('check Color Class', () => {
  it('should check class funstions', () => {
    const color = Color('#333')
    expect(color.hex).toBe('#333333')
    expect(color.rgb).toBe('rgb(51,51,51)')
    expect(color.rgba).toBe('rgba(51,51,51,1)')
    expect(color.hsl).toBe('hsl(0, 0%, 20%)')
    expect(color.hsla).toBe('hsla(0, 0%, 20%, 1)')
    expect(color.lighten(10).hex).toBe('#383838')
    expect(color.darken(10).hexa).toBe('#2e2e2eff')
    expect(color.negate().hexa).toBe('#ccccccff')
  })
  it('should check saturation', () => {
    const color = Color('#456')
    expect(color.saturation).toBe(20)
  })
  it('should check for max as red', () => {
    const color = Color('rgb(50,10,10)')
    expect(color.hsl).toBe('hsl(0, 66.7%, 11.8%)')
  })
  it('should check for max as green', () => {
    const color = Color('rgb(15,255,12)')
    expect(color.hsl).toBe('hsl(119, 100%, 52.4%)')
  })
  it('should check for max as blue', () => {
    const color = Color('rgb(10,10,50)')
    expect(color.hsl).toBe('hsl(240, 66.7%, 11.8%)')
  })
  it('should check for lighten and darken with alpha', () => {
    const color = Color('hsla(10,10%,50%, 0)')
    expect(color.darken(10).hexa).toBe('#7e6b6800')
    expect(color.lighten(10).hexa).toBe('#97858100')
  })
  it('should return shades', () => {
    const shades = Color('#f44336').shades
    expect(shades[500]).toBe('#f44336')
  })

  describe('get luminance()', () => {
    it('should return correct luminance value for RGB color', () => {
      const color = Color('#F5A623')
      expect(color.luminance).toBe(174.687)
    })
  })

  describe('get contrast()', () => {
    it('should return black contrasting color for a light color', () => {
      const color = Color('#FFFFFF')
      expect(color.contrast).toBe('#000000')
    })
    it('should return white contrasting color for a dark color', () => {
      const color = Color('#000000')
      expect(color.contrast).toBe('#ffffff')
    })
  })

  it('should set threshold to specified value', () => {
    const color = Color('#F5A623')
    color.setThreshold(100)
    expect(color.threshold).toBe(100)
  })

  it('should set threshold to default value if no value is specified', () => {
    const color = Color('#F5A623')
    color.setThreshold()
    expect(color.threshold).toBe(128)
  })
})
