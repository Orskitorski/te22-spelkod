
import GameObject from "./GameObject.js"
import Input from "./Input.js"
import Player from "./Player.js"
//import SceneManager from "./SceneManager.js"
import Background from "./Background.js"
import Character from "./Character.js"

export default class Game { // skapar klassen
    constructor(width, height) { // klassens constructor
        this.width = width
        this.height = height
        this.input = new Input(this)
        this.player = new Player(0, 0, 300, 300, "blue", 0.2, this)
        console.log("ny instans av game", this.width)
        this.background = new Background(this)
        this.character = new Character(this)

        //this.sceneManager = new SceneManager(0, 0, 300, 300, )
        //this.sceneManager.setScene("Bedroom")
    }

    update(deltaTime) {
        this.player.update(deltaTime)
    }

    draw(ctx) {
        this.background.draw(ctx)
        this.character.draw(ctx)
        this.player.draw(ctx)
    }
}