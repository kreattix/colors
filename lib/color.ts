import { createRGBAObject, getCompiledColorCode } from './functions'

class BaseColor {
  color: string
  rgbNumber: { [key in 'red' | 'green' | 'blue' | 'alpha']: number }
  threshold: number = 140
  contrastForLightColor: string = '#000000'
  contrastForDarkColor: string = '#ffffff'

  constructor(color: string) {
    this.rgbNumber = createRGBAObject(color)
    this.color = `rgba(${this.rgbNumber.red}, ${this.rgbNumber.green}, ${this.rgbNumber.blue}, ${this.rgbNumber.alpha})`
  }

  get red() {
    return this.rgbNumber.red
  }

  get green() {
    return this.rgbNumber.green
  }

  get blue() {
    return this.rgbNumber.blue
  }

  get alpha() {
    return Number(this.rgbNumber.alpha.toFixed(3))
  }

  get hex() {
    const hex = [
      '#',
      ('0' + this.red.toString(16)).slice(-2),
      ('0' + this.green.toString(16)).slice(-2),
      ('0' + this.blue.toString(16)).slice(-2)
    ]
    return hex.join('')
  }

  get hexa() {
    const hex = [
      '#',
      ('0' + this.red.toString(16)).slice(-2),
      ('0' + this.green.toString(16)).slice(-2),
      ('0' + this.blue.toString(16)).slice(-2),
      ('0' + Math.round(this.alpha * 255).toString(16)).slice(-2)
    ]
    return hex.join('')
  }

  get rgb() {
    return `rgb(${this.red},${this.green},${this.blue})`
  }

  get rgba() {
    return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`
  }

  get hsl() {
    return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`
  }

  get hsla() {
    return `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha})`
  }

  get hue() {
    const { red, green, blue, maxColor, delta } = this.hueInfo

    let hue = 0
    if (delta === 0) hue = 0
    else if (maxColor === red) hue = ((green - blue) / delta) % 6
    else if (maxColor === green) hue = (blue - red) / delta + 2
    else hue = (red - green) / delta + 4

    hue = Math.round(hue * 60)
    if (hue < 0) hue += 360
    return hue
  }

  get lightness() {
    const { minColor, maxColor } = this.hueInfo
    const lightness = (maxColor + minColor) / 2
    return +(lightness * 100).toFixed(1)
  }

  get saturation() {
    const { delta, minColor, maxColor } = this.hueInfo
    const lightness = (maxColor + minColor) / 2
    let saturation = 0
    if (delta !== 0) {
      saturation = delta / (1 - Math.abs(2 * lightness - 1))
    }

    return +(saturation * 100).toFixed(1)
  }

  get luminance() {
    const { red, green, blue } = this.rgbNumber
    return 0.299 * red + 0.587 * green + 0.114 * blue
  }

  get contrast() {
    return this.luminance > this.threshold ? this.contrastForLightColor : this.contrastForDarkColor
  }

  setContrastForLightColor(color: string) {
    this.contrastForLightColor = Color(color).hex
    return this
  }

  setContrastForDarkColor(color: string) {
    this.contrastForDarkColor = Color(color).hex
    return this
  }

  get shades() {
    const diff = 18
    return {
      50: this.tint(diff * 5).hex,
      100: this.tint(diff * 4).hex,
      200: this.tint(diff * 3).hex,
      300: this.tint(diff * 2).hex,
      400: this.tint(diff * 1).hex,
      500: this.hex,
      600: this.shade(diff * 1).hex,
      700: this.shade(diff * 2).hex,
      800: this.shade(diff * 3).hex,
      900: this.shade(diff * 4).hex
    }
  }

  get palette() {
    const shades = this.shades
    return {
      main: shades[500],
      hover: shades[400],
      active: shades[600],
      light: shades[100],
      dark: shades[800],
      contrast: this.contrast
    }
  }

  private get hueInfo() {
    const red = this.red / 255
    const green = this.green / 255
    const blue = this.blue / 255
    const minColor = Math.min(red, green, blue)
    const maxColor = Math.max(red, green, blue)
    const delta = maxColor - minColor
    return { red, green, blue, minColor, maxColor, delta }
  }

  setThreshold(value = this.threshold) {
    this.threshold = value
    return this
  }

  negate() {
    return Color(getCompiledColorCode(`invert(${this.color})`))
  }

  setLightness(amount: number) {
    return Color(
      `hsla(${this.hue},${this.saturation}%,${Math.min(100, Math.max(0, amount)).toFixed(2)}%,${
        this.alpha
      })`
    )
  }

  lighten(ratio: number) {
    return Color(
      getCompiledColorCode(`lighten(${this.color},${Math.min(Math.max(ratio, 0), 99)}%)`)
    )
  }

  darken(ratio: number) {
    return Color(
      getCompiledColorCode(`darken(${this.color},${Math.min(Math.max(ratio, 0), 100)}%)`)
    )
  }
  tint(weight: number) {
    return Color(
      getCompiledColorCode(`mix(#ffffff,${this.color},${Math.min(Math.max(weight, 0), 100)}%)`)
    )
  }
  shade(weight: number) {
    return Color(
      getCompiledColorCode(`mix(#000000,${this.color},${Math.min(Math.max(weight, 0), 100)}%)`)
    )
  }
}

export const Color = (color: string) => new BaseColor(color)
