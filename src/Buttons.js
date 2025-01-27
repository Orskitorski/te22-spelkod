export default class Buttons{
    constructor (Game) {
        this.game = Game
        this.canvas = this.game.canvas
        this.x = 0
        this.y = 0
        this.box = document.createElement("div")
        this.box.classList.add("choiceBox")
    }

    create(scene) {
        scene.choices.forEach(element => {
            console.log(element)
            this.choiceButton = document.createElement("button")
            this.choiceButton.textContent = element.description
            this.choiceButton.addEventListener("click", () => {
                this.game.sceneManager.change(element.target)
                this.game.background.change(element.target)
                this.change(this.game.sceneManager.activeScene)
            })
            this.box.appendChild(this.choiceButton)
        })

        this.canvas.parentNode.appendChild(this.box)
    }

    change(scene) {
        while (this.box.hasChildNodes()) {
            this.box.removeChild(this.box.firstChild)
        }

        scene.choices.forEach(element => {
            this.choiceButton = document.createElement("button")
            this.choiceButton.textContent = element.description
            this.choiceButton.addEventListener("click", () => {
                this.game.sceneManager.change(element.target)
                this.game.background.change(element.target)
                this.change(this.game.sceneManager.activeScene)
            })
            this.box.appendChild(this.choiceButton)
        })
    }
}