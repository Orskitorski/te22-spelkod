export default class Dialogue {
    constructor (game) {
        this.game = game
        this.canvas = this.game.canvas
        this.x = 0
        this.y = 0
        this.dialogue = document.createElement("p")
        this.character = document.createElement("p")
    }

    create(speaker, text) {
        const box = document.createElement("div")
        box.classList.add("textBox")
        this.dialogue.textContent = text
        this.character.textContent = speaker
        box.appendChild(this.character)
        box.appendChild(this.dialogue)
        this.canvas.parentNode.appendChild(box)
    }

    change(speaker, text) {
        this.dialogue.textContent = text
        this.character.textContent = speaker
    }
}