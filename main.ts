input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    eimer.move(-1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    eimer.move(1)
})
let eimer: game.LedSprite = null
let wasser = game.createSprite(2, 0)
eimer = game.createSprite(2, 4)
game.setLife(5)
game.setScore(0)
basic.forever(function () {
    if (wasser.get(LedSpriteProperty.Y) < 4) {
    	
    } else {
    	
    }
})
