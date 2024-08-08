import {
  VALID_HEXA_COLOR,
  VALID_HEX_COLOR,
  VALID_HUEA_COLOR,
  VALID_HUE_COLOR,
  VALID_RGBA_COLOR,
  VALID_RGB_COLOR
} from '../../constants'
import { matchPattern } from '../../functions'

describe('check matchPattern functions', () => {
  const checkPattern = (pattern: RegExp) => {
    const checkHexShort = matchPattern(pattern, '#333')
    const checkHexLong = matchPattern(pattern, '#333')
    const checkHexaShort = matchPattern(pattern, '#3333')
    const checkHexaLong = matchPattern(pattern, '#33333333')
    const checkHsl = matchPattern(pattern, 'hsl(40,40%,30%)')
    const checkHsla = matchPattern(pattern, 'hsla(40,40%,30%,0.6)')
    const checkRgb = matchPattern(pattern, 'rgb(19,29,38)')
    const checkRgba = matchPattern(pattern, 'rgba(19,29,38,0.5)')
    return {
      checkHexShort,
      checkHexLong,
      checkHexaShort,
      checkHexaLong,
      checkHsl,
      checkHsla,
      checkRgb,
      checkRgba
    }
  }
  it('should identify hex only', () => {
    const result = checkPattern(VALID_HEX_COLOR)
    expect(result.checkHexLong).toBeTruthy()
    expect(result.checkHexShort).toBeTruthy()
    expect(result.checkHexaLong).toBeFalsy()
    expect(result.checkHexaShort).toBeFalsy()
    expect(result.checkHsl).toBeFalsy()
    expect(result.checkHsla).toBeFalsy()
    expect(result.checkRgb).toBeFalsy()
    expect(result.checkRgba).toBeFalsy()
  })
  it('should identify hexa only', () => {
    const result = checkPattern(VALID_HEXA_COLOR)
    expect(result.checkHexLong).toBeFalsy()
    expect(result.checkHexShort).toBeFalsy()
    expect(result.checkHexaLong).toBeTruthy()
    expect(result.checkHexaShort).toBeTruthy()
    expect(result.checkHsl).toBeFalsy()
    expect(result.checkHsla).toBeFalsy()
    expect(result.checkRgb).toBeFalsy()
    expect(result.checkRgba).toBeFalsy()
  })
  it('should identify hsl only', () => {
    const result = checkPattern(VALID_HUE_COLOR)
    expect(result.checkHexLong).toBeFalsy()
    expect(result.checkHexShort).toBeFalsy()
    expect(result.checkHexaLong).toBeFalsy()
    expect(result.checkHexaShort).toBeFalsy()
    expect(result.checkHsl).toBeTruthy()
    expect(result.checkHsla).toBeFalsy()
    expect(result.checkRgb).toBeFalsy()
    expect(result.checkRgba).toBeFalsy()
  })
  it('should identify hsla only', () => {
    const result = checkPattern(VALID_HUEA_COLOR)
    expect(result.checkHexLong).toBeFalsy()
    expect(result.checkHexShort).toBeFalsy()
    expect(result.checkHexaLong).toBeFalsy()
    expect(result.checkHexaShort).toBeFalsy()
    expect(result.checkHsl).toBeFalsy()
    expect(result.checkHsla).toBeTruthy()
    expect(result.checkRgb).toBeFalsy()
    expect(result.checkRgba).toBeFalsy()
  })
  it('should identify rgb only', () => {
    const result = checkPattern(VALID_RGB_COLOR)
    expect(result.checkHexLong).toBeFalsy()
    expect(result.checkHexShort).toBeFalsy()
    expect(result.checkHexaLong).toBeFalsy()
    expect(result.checkHexaShort).toBeFalsy()
    expect(result.checkHsl).toBeFalsy()
    expect(result.checkHsla).toBeFalsy()
    expect(result.checkRgb).toBeTruthy()
    expect(result.checkRgba).toBeFalsy()
  })
  it('should identify rgba only', () => {
    const result = checkPattern(VALID_RGBA_COLOR)
    expect(result.checkHexLong).toBeFalsy()
    expect(result.checkHexShort).toBeFalsy()
    expect(result.checkHexaLong).toBeFalsy()
    expect(result.checkHexaShort).toBeFalsy()
    expect(result.checkHsl).toBeFalsy()
    expect(result.checkHsla).toBeFalsy()
    expect(result.checkRgb).toBeFalsy()
    expect(result.checkRgba).toBeTruthy()
  })
})
