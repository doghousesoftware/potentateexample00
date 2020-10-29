basic.forever(function () {
// read the potentiometer with P0 connected to middle and 
// red connected to right side pin
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
