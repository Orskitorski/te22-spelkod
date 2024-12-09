
export default class Dialogue {
    constructor (game) {
        this.game = game
        this.canvas = this.game.canvas
        this.x = 0
        this.y = 0
    }

    create(speaker, text) {
        const box = document.createElement("div")
        box.classList.add("textBox")
        const character = document.createElement("p")
        const dialogue = document.createElement("p")
        dialogue.textContent = text
        character.textContent = speaker
        box.appendChild(character)
        box.appendChild(dialogue)
        this.canvas.parentNode.appendChild(box)
    }
}