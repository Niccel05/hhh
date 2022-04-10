input.onButtonPressed(Button.A, function () {
    Links_Blinker += 1
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C - - - - - - - ", 120)
    basic.pause(100)
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    Blinker_rechts += 1
})
let Pot = 0
let Blinker_rechts = 0
let Links_Blinker = 0
let Links = neopixel.create(DigitalPin.P3, 1, NeoPixelMode.RGB)
let Rechts = neopixel.create(DigitalPin.P8, 1, NeoPixelMode.RGB)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 0, 180))
    if (Links_Blinker == 1) {
        Blinker_rechts = 0
        Links.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(500)
        Links.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(500)
    } else if (Links_Blinker == 2) {
        Links_Blinker = 0
        Links.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    Pot = pins.analogReadPin(AnalogPin.P2)
    if (Pot == 1) {
        Links.showColor(neopixel.colors(NeoPixelColors.Black))
        Links_Blinker = 2
        Pot = 0
    }
})
basic.forever(function () {
    basic.showNumber(Blinker_rechts)
    if (Blinker_rechts == 1) {
        Links_Blinker = 0
        Rechts.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(500)
        Rechts.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(500)
    } else if (Blinker_rechts == 2) {
        basic.showNumber(2)
        Blinker_rechts = 0
        Rechts.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (Pot == 1020) {
        Rechts.showColor(neopixel.colors(NeoPixelColors.Black))
        Blinker_rechts = 2
        Pot = 0
    }
})
