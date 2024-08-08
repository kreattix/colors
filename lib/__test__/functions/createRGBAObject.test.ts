import { createRGBAObject } from '../../functions'

describe('createRGBAObject', () => {
  it('should create RGBA object from color string', () => {
    const color = '#ff5733'
    const expectedObject = {
      red: 255,
      green: 87,
      blue: 51,
      alpha: 1
    }
    expect(createRGBAObject(color)).toEqual(expectedObject)
  })
})
