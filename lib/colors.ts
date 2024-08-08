import { Color } from '.'
import { COLORS } from './constants'

export const Colors = {
  get red() {
    return Color(COLORS.red).shades
  },
  get pink() {
    return Color(COLORS.pink).shades
  },
  get purple() {
    return Color(COLORS.purple).shades
  },
  get deepPurple() {
    return Color(COLORS.deepPurple).shades
  },
  get indigo() {
    return Color(COLORS.indigo).shades
  },
  get blue() {
    return Color(COLORS.blue).shades
  },
  get lightBlue() {
    return Color(COLORS.lightBlue).shades
  },
  get cyan() {
    return Color(COLORS.cyan).shades
  },
  get teal() {
    return Color(COLORS.teal).shades
  },
  get green() {
    return Color(COLORS.green).shades
  },
  get lightGreen() {
    return Color(COLORS.lightGreen).shades
  },
  get lime() {
    return Color(COLORS.lime).shades
  },
  get yellow() {
    return Color(COLORS.yellow).shades
  },
  get amber() {
    return Color(COLORS.amber).shades
  },
  get orange() {
    return Color(COLORS.orange).shades
  },
  get deepOrange() {
    return Color(COLORS.deepOrange).shades
  },
  get brown() {
    return Color(COLORS.brown).shades
  },
  get gray() {
    return Color(COLORS.gray).shades
  },
  get blueGray() {
    return Color(COLORS.blueGray).shades
  },
  get white() {
    return '#ffffff'
  },
  get black() {
    return {
      50: '#f7f7f7',
      100: '#eeeeee',
      200: '#c7c7c7',
      300: '#bbbbbb',
      400: '#979797',
      500: '#888888',
      600: '#676767',
      700: '#555555',
      800: '#373737',
      900: '#222222'
    }
  }
}
