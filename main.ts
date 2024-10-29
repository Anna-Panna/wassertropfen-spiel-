input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    eimer.move(-1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    eimer.move(1)
})
let eimer: game.LedSprite = null
let wasser = game.createSprite(2, 0)
eimer = game.createSprite(2, 4)
game.setLife(3)
game.setScore(0)
basic.forever(function () {
    if (wasser.get(LedSpriteProperty.Y) < 4) {
        wasser.change(LedSpriteProperty.Y, 1)
    } else {
        if (wasser.isTouching(eimer)) {
            basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
            game.addScore(1)
        } else {
            basic.setLedColors(0xff0080, 0xff0080, 0xff0080)
            game.removeLife(1)
        }
        wasser.set(LedSpriteProperty.X, randint(0, 4))
        wasser.set(LedSpriteProperty.Y, 0)
    }
    basic.pause(500)
})
