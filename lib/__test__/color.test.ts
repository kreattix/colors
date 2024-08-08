import { Color } from '..'

describe('check Color Class', () => {
  it('should check class funstions', () => {
    const color = Color('#333')
    expect(color.hex).toBe('#333333')
    expect(color.rgb).toBe('rgb(51,51,51)')
    expect(color.rgba).toBe('rgba(51,51,51,1)')
    expect(color.hsl).toBe('hsl(0, 0%, 20%)')
    expect(color.hsla).toBe('hsla(0, 0%, 20%, 1)')
    expect(color.lighten(10).hex).toBe('#4d4d4d')
    expect(color.darken(10).hexa).toBe('#1a1a1aff')
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
    expect(color.darken(10).hexa).toBe('#705f5c00')
    expect(color.lighten(10).hexa).toBe('#a3928f00')
  })
  it('should return shades', () => {
    const shades = Color('#f44336').shades
    expect(shades[500]).toBe('#f44336')
    expect(shades[400]).toBe('#f6655a')
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
    it('should return changed contrast for light color', () => {
      const color = Color('#FFFFFF')
      color.setContrastForLightColor('#343434')
      expect(color.contrast).toBe('#343434')
    })
    it('should return changed contrast for dark color', () => {
      const color = Color('#000000')
      color.setContrastForDarkColor('#dddddd')
      expect(color.contrast).toBe('#dddddd')
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
    expect(color.threshold).toBe(140)
  })

  it('should correctly adjust hue when it is less than 0', () => {
    const color = Color('rgba(255, 10, 20, 1)') // Pure red color
    const hue = color.hue
    expect(hue).toBe(358) // Red should have a hue of 0

    const color2 = Color('rgba(0, 255, 255, 1)') // Cyan color
    const hue2 = color2.hue
    expect(hue2).toBe(180) // Cyan should have a hue of 180

    const color3 = Color('rgba(0, 0, 255, 1)') // Blue color
    const hue3 = color3.hue
    expect(hue3).toBe(240) // Blue should have a hue of 240
  })

  it('should set the lightness correctly', () => {
    const color = Color('rgba(255, 0, 0, 1)') // Red color
    const newColor = color.setLightness(50) // Set lightness to 50%

    expect(newColor.hsl).toBe('hsl(0, 100%, 50%)')
  })
})
