import { Color } from '..'

describe('check matchPattern functions', () => {
  it('should identify hex only', () => {
    const color = Color('#333')
    expect(color.hex).toBe('#333333')
    expect(color.rgb).toBe('rgb(51,51,51)')
    expect(color.hsl).toBe('hsl(0, 0%, 20%)')
    expect(color.lighten(10).hex).toBe('#383838')
  })
})
