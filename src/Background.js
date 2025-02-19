import Layer from './Layer'

export default class Background {
    constructor(game) {
        this.game = game
        this.width = 1280
        this.height = 720

        
        this.bg = new Image()
        console.log(this.game.sceneManager.activeScene)
        this.bg.src = this.game.sceneManager.activeScene.background

        this.backgroundLayers = [
            new Layer(this.game, this.width, this.height, 0, this.bg, 0, 0),
        ]
    }

    change(scene) {
        this.bg.src = this.game.sceneManager.activeScene.background
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