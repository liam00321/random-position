controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.setPosition(randint(15, 145), randint(15, 105))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(randint(15, 145), randint(15, 105))
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 . . . . . . . . . 
    . . 3 3 3 3 3 3 . . . . . . . . 
    . . 3 3 3 3 3 3 3 . . . . . . . 
    . 3 3 3 3 3 3 3 3 3 3 . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . . . . . 3 3 . . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 9 9 9 9 . . . . 
    . . . . . . 9 9 9 9 9 9 9 9 . . 
    . . . . . 9 9 9 9 9 9 9 9 9 . . 
    . . . . . 9 9 9 9 9 9 9 9 9 . . 
    . . . . 9 9 9 9 9 9 9 9 9 9 9 . 
    . . . . 9 9 9 9 9 9 9 9 9 9 . . 
    . . . . 9 9 9 9 9 9 9 9 9 9 . . 
    . . . . 9 9 9 9 9 9 9 9 9 9 . . 
    . . . . 9 9 9 9 9 9 9 9 9 . . . 
    . . . . 9 9 9 9 9 9 9 9 9 . . . 
    . . . . 9 9 9 9 9 9 9 9 9 . . . 
    . . . . 9 9 9 9 9 9 9 9 9 . . . 
    . . . . 9 9 9 9 9 9 9 9 9 . . . 
    . . . . . 9 9 9 9 9 9 9 . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(randint(15, 145), randint(15, 105))
mySprite2.setPosition(randint(15, 145), randint(15, 105))
