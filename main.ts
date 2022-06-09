controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
})
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("Benvingut!", "Tenim una nova missió")
game.splash("El nostre objectiu és...")
game.splash("Ajudar al nostre amic \"8\" ", "a salvar l'espai")
mySprite = sprites.create(assets.image`8`, SpriteKind.Player)
mySprite.setPosition(80, 120)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(3)
game.onUpdate(function () {
    projectile = sprites.createProjectileFromSide(assets.image`Asteroide`, 0, 50)
    projectile.x += randint(0, scene.screenWidth())
    projectile.setKind(SpriteKind.Enemy)
})
