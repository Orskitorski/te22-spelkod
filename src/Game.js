
import GameObject from "./GameObject.js"
import Input from "./Input.js"
import Player from "./Player.js"
import SceneManager from "./SceneManager.js"
import Background from "./Background.js"
import Character from "./Character.js"
import Dialogue from "./Dialogue.js"

export default class Game { // skapar klassen
    constructor(canvas) { // klassens constructor
        this.canvas = canvas
        this.width = canvas.width
        this.height = canvas.height
        this.input = new Input(this)
        this.player = new Player(0, 0, 300, 300, "blue", 0.2, this)
        console.log("ny instans av game", this.width)
        this.sceneManager = new SceneManager(this)
        this.activeScene = this.sceneManager.activeScene
        this.background = new Background(this, this.activeScene)
        this.character = new Character(this)
        this.dialogue = new Dialogue(this)
        this.dialogue.create('Rudolf:', 'Hej, jag heter Rudolf, men du kan kalla mig "Röda Mulen" om du vill ;) <3')
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