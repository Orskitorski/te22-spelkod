import Layer from './Layer'

export default class Character {
    constructor(game) {
        this.game = game
        this.width = 1280
        this.height = 720

        this.rudolf = new Image()
        this.rudolf.src = "src/assets/rudolf.png"
        this.dialogue = new Image()
        this.dialogue.src = "src/assets/dialogue_window.png"

        this.backgroundLayers = [
            new Layer(this.game, this.width, this.height, 0, this.rudolf, -235, 0),
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