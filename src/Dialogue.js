export default class Dialogue {
    constructor (Game) {
        this.game = Game
        this.canvas = this.game.canvas
        this.x = 0
        this.y = 0
        this.box = document.createElement("div")
        this.dialogue = document.createElement("p")
        this.character = document.createElement("p")
    }

    create(scene) {
        this.box.classList.add("textBox")
        this.dialogue.textContent = scene.description
        this.character.textContent = scene.speaker
        this.box.appendChild(this.character)
        this.box.appendChild(this.dialogue)
        this.canvas.parentNode.appendChild(this.box)
    }

    change() {
        this.dialogue.textContent = this.game.sceneManager.activeScene.description
        this.character.textContent = this.game.sceneManager.activeScene.speaker
    }
}