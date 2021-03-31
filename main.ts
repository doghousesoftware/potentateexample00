input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(0)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.pause(2000)
    servos.P0.stop()
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(180)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        # # # # #
        `)
    basic.pause(2000)
    servos.P0.stop()
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
})
