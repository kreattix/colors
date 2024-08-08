import { cssStringToObject } from '../../functions'

describe('cssStringToObject', () => {
  it('should convert CSS string to object', () => {
    const cssString = `
        class {
          color: red;
          background-color: blue;
        }
      `
    const expectedObject = { 'background-color': 'blue', color: 'red' }
    expect(cssStringToObject(cssString)).toEqual(expectedObject)
  })
})
