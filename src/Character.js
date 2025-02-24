import Layer from './Layer'

export default class Character {
    constructor(game) {
        this.game = game
        this.width = 1280
        this.height = 720

        this.ch = new Image()
        this.ch.src = this.game.sceneManager.activeScene.character
        this.dialogue = new Image()
        this.dialogue.src = "./images/dialogue_window.png"

        this.backgroundLayers = [
            new Layer(this.game, this.width, this.height, 0, this.ch, 0, 0),
            new Layer(this.game, 640, 180, 0, this.dialogue, 0, 540),
        ]
    }

    change(scene) {
        this.ch.src = this.game.sceneManager.activeScene.character
        this.backgroundLayers = [
            new Layer(this.game, this.width, this.height, 0, this.ch, 0, 0),
            new Layer(this.game, 640, 180, 0, this.dialogue, 0, 540),
        ]
    }
    
    update(deltaTime) {
        this.backgroundLayers.forEach(layer => {
            layer.update(deltaTime)
        })
    }
    
    draw(ctx) {
        this.backgroundLayers.forEach(layer => {
            layer.draw(ctx)
        })
    }
}