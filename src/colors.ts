import { Color } from '.'
import { COLORS } from './enum'

class Colors {
  static get red() {
    return Color(COLORS.red).shades
  }
  static get pink() {
    return Color(COLORS.pink).shades
  }
  static get purple() {
    return Color(COLORS.purple).shades
  }
  static get violet() {
    return Color(COLORS.violet).shades
  }
  static get indigo() {
    return Color(COLORS.indigo).shades
  }
  static get blue() {
    return Color(COLORS.blue).shades
  }
  static get lightBlue() {
    return Color(COLORS.lightBlue).shades
  }
  static get cyan() {
    return Color(COLORS.cyan).shades
  }
  static get teal() {
    return Color(COLORS.teal).shades
  }
  static get green() {
    return Color(COLORS.green).shades
  }
  static get lightGreen() {
    return Color(COLORS.lightGreen).shades
  }
  static get lime() {
    return Color(COLORS.lime).shades
  }
  static get yellow() {
    return Color(COLORS.yellow).shades
  }
  static get amber() {
    return Color(COLORS.amber).shades
  }
  static get orange() {
    return Color(COLORS.orange).shades
  }
  static get deepOrange() {
    return Color(COLORS.deepOrange).shades
  }
  static get brown() {
    return Color(COLORS.brown).shades
  }
  static get gray() {
    return Color(COLORS.gray).shades
  }
  static get blueGray() {
    return Color(COLORS.blueGray).shades
  }
  static get white() {
    return '#ffffff'
  }
  static get black() {
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
      900: '#222222',
    }
  }
}

export default Colors
