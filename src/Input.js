export default class Input {
    constructor(game) {
        this.game = game
        this.keys = new Set()

        console.log(this.game.canvas)

        window.addEventListener("keydown", (event) => {
            this.keys.add(event.key)
        })

        window.addEventListener("keyup", (event) => {
            this.keys.delete(event.key)
        })

        this.game.canvas.addEventListener("click", (event) => {
            this.game.dialogue.change(true)
        })
    }
}