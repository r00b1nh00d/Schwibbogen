let strip = neopixel.create(DigitalPin.P1, 36, NeoPixelMode.RGB)
basic.forever(function () {
    for (let Index = 0; Index <= 36; Index++) {
        strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(Index + 1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(Index + 2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(Index + 3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(Index + 4, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
    }
    for (let Index = 0; Index <= 36; Index++) {
        strip.setPixelColor(36 - Index, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(36 - (Index + 1), neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(36 - (Index + 2), neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(36 - (Index + 3), neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(36 - (Index + 4), neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(100)
    }
})
