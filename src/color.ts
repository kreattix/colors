import { getRGBAValue } from './functions'

class Color {
  color: string
  rgbNumber: { [key in 'red' | 'green' | 'blue' | 'alpha']: number }
  threshold: number

  constructor(color: string) {
    this.threshold = 140
    this.color = color.replace(/\s/g, '')
    this.rgbNumber = getRGBAValue(this.color)
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
    return this.rgbNumber.alpha
  }

  get hex() {
    const hex = [
      '#',
      ('0' + this.red.toString(16)).slice(-2),
      ('0' + this.green.toString(16)).slice(-2),
      ('0' + this.blue.toString(16)).slice(-2),
    ]
    return hex.join('')
  }

  get hexa() {
    const hex = [
      '#',
      ('0' + this.red.toString(16)).slice(-2),
      ('0' + this.green.toString(16)).slice(-2),
      ('0' + this.blue.toString(16)).slice(-2),
      ('0' + Math.round(this.alpha * 255).toString(16)).slice(-2),
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
    return this.luminance > this.threshold ? new Color('#000').hex : new Color('#fff').hex
  }

  get shades() {
    return {
      50: this.lighten(60).hex,
      100: this.lighten(48).hex,
      200: this.lighten(36).hex,
      300: this.lighten(24).hex,
      400: this.lighten(12).hex,
      500: this.hex,
      600: this.darken(12).hex,
      700: this.darken(24).hex,
      800: this.darken(36).hex,
      900: this.darken(48).hex,
    }
  }

  get pallete() {
    const shades = this.shades
    return {
      main: shades[500],
      hover: shades[400],
      active: shades[600],
      light: shades[100],
      dark: shades[800],
      contrast: this.contrast,
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
    this.rgbNumber.red = 255 - this.rgbNumber.red
    this.rgbNumber.green = 255 - this.rgbNumber.green
    this.rgbNumber.blue = 255 - this.rgbNumber.blue
    return this
  }

  lighten(ratio: number) {
    const newlightness = Math.min(
      99,
      Math.min(100, this.lightness + (this.lightness / 100) * ratio),
    )

    return new Color(
      `hsla(${this.hue},${this.saturation}%,${newlightness.toFixed(2)}%,${
        this.alpha < 1 ? this.alpha.toFixed(2) : this.alpha
      })`,
    )
  }

  darken(ratio: number) {
    const newlightness = Math.max(0, Math.min(100, this.lightness - (this.lightness / 100) * ratio))

    return new Color(
      `hsla(${this.hue},${this.saturation}%,${newlightness.toFixed(2)}%,${
        this.alpha < 1 ? this.alpha.toFixed(2) : this.alpha
      })`,
    )
  }
}

const BaseColor = (color: string) => new Color(color)

export default BaseColor
