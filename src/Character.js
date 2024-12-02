import Layer from './Layer'

export default class Character {
    constructor(game) {
        this.game = game
        this.width = 1280
        this.height = 720

        this.ch = new Image()
        this.ch.src = "src/assets/rudolf röd mule transparent.png"

        this.backgroundLayers = [
            new Layer(this.game, this.width, this.height, 0, this.ch, 0, 0),
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