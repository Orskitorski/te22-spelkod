import Layer from './Layer'
import Input from './Input'

export default class Background {
    constructor(game, activeScene) {
        this.game = game
        this.activeScene = activeScene
        this.width = 1280
        this.height = 720

        
        this.bedroom = new Image()
        this.bedroom.src = "src/assets/bedroom_background.png"
        this.cafe = new Image()
        this.cafe.src = "src/assets/cafe_background.png"

        if (this.activeScene == "bedroom") {
            this.bg = this.bedroom
        }
        else {
            this.bg = this.cafe
        }

        this.backgroundLayers = [
            new Layer(this.game, this.width, this.height, 0, this.bg, 0, 0),
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