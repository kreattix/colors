import { getRGBANumberFromHUEA } from '../../functions'

describe('check getRGBANumberFromHUEA functions', () => {
  it('should return hsl value for red as max', () => {
    const check1 = getRGBANumberFromHUEA('hsl(10,40%,50%,0.5)')
    expect(check1.red).toBe(179)
    expect(check1.green).toBe(94)
    expect(check1.blue).toBe(77)
    expect(check1.alpha).toBe(0.5)

    const check2 = getRGBANumberFromHUEA('hsl(340,40%,50%,0.4)')
    expect(check2.red).toBe(179)
    expect(check2.green).toBe(77)
    expect(check2.blue).toBe(110)
    expect(check2.alpha).toBe(0.4)
  })
  it('should return hsl value for green as max', () => {
    const check1 = getRGBANumberFromHUEA('hsl(90,40%,50%,1)')
    expect(check1.red).toBe(128)
    expect(check1.green).toBe(179)
    expect(check1.blue).toBe(77)
    expect(check1.alpha).toBe(1)

    const check2 = getRGBANumberFromHUEA('hsl(200,40%,50%,1)')
    expect(check2.red).toBe(77)
    expect(check2.green).toBe(145)
    expect(check2.blue).toBe(179)
    expect(check2.alpha).toBe(1)
  })
  it('should return hsl value for blue as max', () => {
    const check1 = getRGBANumberFromHUEA('hsl(260,40%,50%,1)')
    expect(check1.red).toBe(110)
    expect(check1.green).toBe(77)
    expect(check1.blue).toBe(179)
    expect(check1.alpha).toBe(1)

    const check2 = getRGBANumberFromHUEA('hsl(150,40%,50%,1)')
    expect(check2.red).toBe(77)
    expect(check2.green).toBe(179)
    expect(check2.blue).toBe(128)
    expect(check2.alpha).toBe(1)
  })
})
