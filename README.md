## Kreattix Colors

Basic color library that provides all basic colors with 10 shades each.
It also provide a color class that accept any color and allow you to change its lightness and darkeness then get the updated color in any format you want.

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/npm/v/@kreattix/colors)

## Installation

### using npm

```sh
$ npm install @kreattix/colors
```

### using yarn

```sh
$ yarn add @kreattix/colors
```

### using color shades

```js
import { Colors } from '@kreattix/colors'

...
...

const color = {
    main: Colors.red[500],
    hover: Colors.red[400],
    active: Colors.red[600],
}

...
...
```

### using color class to create your own shade

```js
import { Color, Colors } from '@kreattix/colors'

...
...

const color = Color(Colors.blue[500]) // using color from library
// or
const color = Color('#465657') // using hex value
// or
const color = Color('#465657dd') // using hexa value
// or
const color = Color('rgb(10,30,50)') // using rgb value
// or
const color = Color('rgba(10,30,50,0.8)') // using rgba value
// or
const color = Color('hsl(120,30%,50%)') // using hsl value
// or
const color = Color('hsla(120,30%,50%,0.7)') // using hsla value

...
...

// manipulate color as per your needs

// to lighten the color
const lightColor = color.lighten(10) // it accepts a number as amount of ratio to lighten the color

// to darken the color
const darkColor = color.darken(20) // it accepts a number as amount of ratio to darken the color

// to negate the color
const negatedColor = color.negate()

// to get the luminance of color
const luminance = color.luminance

// to get the contrast color
const contrastColor = color.contrast

// to ser the threshold for contrast color
color.setThreshold(100) // default is 128

// to get the threshold of contrast color
const threshold = color.threshold

...
...

// then you can get the updated color in any format
const lightColorHEX = lightColor.hex
const lightColorRGB = lightColor.rgb
const darkColorHEXA = darkColor.hexa
const darkColorRGBA = darkColor.rgba
const lightColorHSL = lightColor.hsl
const lightColorHSLA = lightColor.hsla

...
...
```

### Available colors

| Colors
| ------------
| red
| pink
| purple
| violet
| indigo
| blue
| lightBlue
| cyan
| teal
| green
| lightGreen
| lime
| yellow
| amber
| orange
| deepOrange
| brown
| gray
| blueGray
| white
| black

## License

MIT
