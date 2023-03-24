import { MODELS } from './enum'
import {
  VALID_HEXA_COLOR,
  VALID_HEX_COLOR,
  VALID_HUEA_COLOR,
  VALID_HUE_COLOR,
  VALID_RGBA_COLOR,
  VALID_RGB_COLOR,
} from './regex'

export const matchPattern = (Validator: RegExp, color: string) => {
  return color.match(Validator) && Validator.test(color)
}

export const getColorModel = (color: string) => {
  if (matchPattern(VALID_HEX_COLOR, color)) {
    return MODELS.HEX
  } else if (matchPattern(VALID_HEXA_COLOR, color)) {
    return MODELS.HEXA
  } else if (matchPattern(VALID_RGB_COLOR, color)) {
    return MODELS.RGB
  } else if (matchPattern(VALID_RGBA_COLOR, color)) {
    return MODELS.RGBA
  } else if (matchPattern(VALID_HUEA_COLOR, color)) {
    return MODELS.HUEA
  } else if (matchPattern(VALID_HUE_COLOR, color)) {
    return MODELS.HUE
  } else {
    return MODELS.INVALID
  }
}

export const getRGBANumberFromHex = (color: string) => {
  if (color.length <= 4) {
    color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`
  }
  const red = Number('0x' + color[1] + color[2])
  const green = Number('0x' + color[3] + color[4])
  const blue = Number('0x' + color[5] + color[6])
  const alpha = Number(1)
  return { red, green, blue, alpha }
}

export const getRGBANumberFromHexA = (color: string) => {
  if (color.length <= 5) {
    color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}${color[4]}${color[4]}`
  }
  const red = Number('0x' + color[1] + color[2])
  const green = Number('0x' + color[3] + color[4])
  const blue = Number('0x' + color[5] + color[6])
  const alpha = Number('0x' + color[7] + color[8]) / 255

  return { red, green, blue, alpha }
}

export const getRGBANumberFromRGB = (color: string) => {
  const colorList = color.replaceAll('rgb(', '').replaceAll(')', '').split(',')

  const red = Number(colorList[0])
  const green = Number(colorList[1])
  const blue = Number(colorList[2])
  const alpha = 1
  return { red, green, blue, alpha }
}

export const getRGBANumberFromRGBA = (color: string) => {
  const colorList = color.replaceAll('rgba(', '').replaceAll(')', '').split(',')

  const red = Number(colorList[0])
  const green = Number(colorList[1])
  const blue = Number(colorList[2])
  const alpha = Number(colorList[3])
  return { red, green, blue, alpha }
}

export const getRGBANumberFromHUE = (color: string) => {
  const colorList = color.replaceAll('hsl(', '').replaceAll(')', '').replaceAll('%', '').split(',')

  const hue = Number(colorList[0])
  const saturation = Number(colorList[1]) / 100
  const lightness = Number(colorList[2]) / 100

  //   color intensity
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation

  //   x for the second largest component
  const x = chroma * (1 - Math.abs(((hue / 60) % 2) - 1))

  //   match the lightness
  const m = lightness - chroma / 2

  let r = 0,
    g = 0,
    b = 0
  if (0 <= hue && hue < 60) {
    r = chroma
    g = x
    b = 0
  } else if (60 <= hue && hue < 120) {
    r = x
    g = chroma
    b = 0
  } else if (120 <= hue && hue < 180) {
    r = 0
    g = chroma
    b = x
  } else if (180 <= hue && hue < 240) {
    r = 0
    g = x
    b = chroma
  } else if (240 <= hue && hue < 300) {
    r = x
    g = 0
    b = chroma
  } else if (300 <= hue && hue < 360) {
    r = chroma
    g = 0
    b = x
  }

  const red = Number(Math.round((r + m) * 255))
  const green = Number(Math.round((g + m) * 255))
  const blue = Number(Math.round((b + m) * 255))
  const alpha = 1
  return { red, green, blue, alpha }
}

export const getRGBANumberFromHUEA = (color: string) => {
  const hue = getRGBANumberFromHUE(color.replaceAll('hsla(', 'hsl('))
  const colorList = color.replaceAll('hsla(', '').replaceAll(')', '').replaceAll('%', '').split(',')

  hue.alpha = Number(colorList[3])
  return hue
}

export const getRGBAValue = (color: string) => {
  const model = getColorModel(color)
  switch (model) {
    case MODELS.HEX:
      return getRGBANumberFromHex(color)
    case MODELS.HEXA:
      return getRGBANumberFromHexA(color)
    case MODELS.RGB:
      return getRGBANumberFromRGB(color)
    case MODELS.RGBA:
      return getRGBANumberFromRGBA(color)
    case MODELS.HUE:
      return getRGBANumberFromHUE(color)
    case MODELS.HUEA:
      return getRGBANumberFromHUEA(color)
    default:
      return { red: 0, green: 0, blue: 0, alpha: 1 }
  }
}
