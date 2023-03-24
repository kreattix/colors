export const VALID_HEX_NUMBER = new RegExp(`[\\da-f]{1,2}`).source
export const VALID_RGB_NUMBER = new RegExp(`((0|1)\\d{2}|2[0-4]\\d{1}|25[0-5]|\\d{1,2})`).source
export const VALID_HUE_NUMBER = new RegExp(`((0|1|2)\\d{2}|3[0-5]\\d{1}|360|\\d{1,2})`).source
export const VALID_PERCENTAGE = new RegExp(`(100|\\d{1,2}|\\d{1,2}\\.\\d{1,2})%`).source
export const VALID_ALPHA = new RegExp('(0.\\d{1,5}|0|1)').source
export const VALID_HEX_COLOR = new RegExp(
  `^#${VALID_HEX_NUMBER}${VALID_HEX_NUMBER}${VALID_HEX_NUMBER}$`,
  'gi',
)
export const VALID_HEXA_COLOR = new RegExp(
  `^#${VALID_HEX_NUMBER}${VALID_HEX_NUMBER}${VALID_HEX_NUMBER}${VALID_HEX_NUMBER}$`,
  'gi',
)
export const VALID_RGB_COLOR = new RegExp(
  `^rgb\\(${VALID_RGB_NUMBER},${VALID_RGB_NUMBER},${VALID_RGB_NUMBER}\\)$`,
  'gi',
)
export const VALID_RGBA_COLOR = new RegExp(
  `^rgba\\(${VALID_RGB_NUMBER},${VALID_RGB_NUMBER},${VALID_RGB_NUMBER},${VALID_ALPHA}\\)$`,
  'gi',
)
export const VALID_HUE_COLOR = new RegExp(
  `^hsl\\(${VALID_HUE_NUMBER},${VALID_PERCENTAGE},${VALID_PERCENTAGE}\\)$`,
  'gi',
)
export const VALID_HUEA_COLOR = new RegExp(
  `^hsla\\(${VALID_HUE_NUMBER},${VALID_PERCENTAGE},${VALID_PERCENTAGE},${VALID_ALPHA}\\)$`,
  'gi',
)
