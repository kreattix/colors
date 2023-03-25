import { Color } from '.'

class Colors {
  static get red() {
    return Color('#f32d1f').shades
  }
  static get pink() {
    return Color('#E91E63').shades
  }
  static get purple() {
    return Color('#9C27B0').shades
  }
  static get violet() {
    return Color('#673AB7').shades
  }
  static get indigo() {
    return Color('#3F51B5').shades
  }
  static get blue() {
    return Color('#2196F3').shades
  }
  static get lightBlue() {
    return Color('#1eb6fd').shades
  }
  static get cyan() {
    return Color('#08e2ff').shades
  }
  static get teal() {
    return Color('#2ba59c').shades
  }
  static get green() {
    return Color('#4CAF50').shades
  }
  static get lightGreen() {
    return Color('#8BC34A').shades
  }
  static get lime() {
    return Color('#CDDC39').shades
  }
  static get yellow() {
    return Color('#ffe922').shades
  }
  static get amber() {
    return Color('#FFC107').shades
  }
  static get orange() {
    return Color('#FF9800').shades
  }
  static get deepOrange() {
    return Color('#FF5722').shades
  }
  static get brown() {
    return Color('#875f51').shades
  }
  static get gray() {
    return Color('#8b8b8b').shades
  }
  static get blueGray() {
    return Color('#6d8b9a').shades
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
