import Layer from './Layer'
import Input from './Input'

export default class Background {
    constructor(game) {
        this.game = game
        this.width = 1280
        this.height = 720

        
        this.bedroom = new Image()
        this.bedroom.src = "src/assets/bedroom_background.png"
        this.cafe = new Image()
        this.cafe.src = "src/assets/cafe_background.png"

        this.bg = this.bedroom

        this.backgroundLayers = [
            new Layer(this.game, this.width, this.height, 0, this.bg, 0, 0),
        ]
    }

    change(scene) {
        if (scene == 1) {
            this.bg = this.bedroom
        }
        else if (scene == 2) {
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