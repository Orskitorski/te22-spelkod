import Input from "./Input.js"
import SceneManager from "./SceneManager.js"
import Background from "./Background.js"
import Character from "./Character.js"
import Dialogue from "./Dialogue.js"
import Buttons from "./Buttons.js"

export default class Game { // skapar klassen
    constructor(canvas) { // klassens constructor
        this.canvas = canvas
        this.width = canvas.width
        this.height = canvas.height
        this.input = new Input(this)
        
        console.log("ny instans av game", this.width)
        this.sceneManager = new SceneManager(this)
        this.background = new Background(this)
        this.character = new Character(this)
        this.dialogue = new Dialogue(this)
        this.buttons = new Buttons(this)
        this.dialogue.create(this.sceneManager.activeScene)  
    }

    update(deltaTime) {

    }

    draw(ctx) {
        this.background.draw(ctx)
        this.character.draw(ctx)
    }
}