
import GameObject from "./GameObject.js"
import Input from "./Input.js"
import Player from "./Player.js"
import SceneManager from "./SceneManager.js"

export default class Game { // skapar klassen
    constructor(width, height) { // klassens constructor
        this.width = width
        this.height = height
        this.input = new Input(this)
        this.player = new Player(0, 0, 300, 300, "blue", 0.2, this)
        console.log("ny instans av game", this.width)
        this.box = new GameObject(0, 0, 200, 200, "purple", 1)

        this.sceneManager = new SceneManager()
        this.sceneManager.setScene("Bedroom")
    }

    update(deltaTime) {
        this.box.update(deltaTime)
        this.player.update(deltaTime)
    }

    draw(ctx) {
        this.box.draw(ctx)
        this.player.draw(ctx)
    }
}