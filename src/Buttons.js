

export default class Buttons{
    constructor (game, SceneManager, Background) {
        this.sceneManager = SceneManager
        this.background = Background
        this.game = game
        this.canvas = this.game.canvas
        this.x = 0
        this.y = 0
    }

    create() {
        const box = document.createElement("div")
        box.classList.add("choiceBox")
        const option1 = document.createElement("button")
        const option2 = document.createElement("button")

        option1.textContent = "Go to the bedroom ~"
        option2.textContent = "Go to the cafe"

        option1.addEventListener("click", () => {
            console.log("1")
            this.sceneManager.change(1)
            this.background.change(1)
        })

        option2.addEventListener("click", () => {
            console.log("2")
            this.sceneManager.change(2)
            this.background.change(2)
        })

        box.appendChild(option1)
        box.appendChild(option2)
        this.canvas.parentNode.appendChild(box)
    }
}