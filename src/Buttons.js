export default class Buttons{
    constructor (Game) {
        this.game = Game
        this.canvas = this.game.canvas
        this.x = 0
        this.y = 0
    }

    create(scene) {
        const box = document.createElement("div")
        box.classList.add("choiceBox")

        scene.choices.forEach(element => {
            console.log(element)
            const choiceButton = document.createElement("button")
            choiceButton.textContent = element.description
            choiceButton.addEventListener("click", () => {
                this.game.sceneManager.change(element.target)
                this.game.background.change(element.target)
                this.game.dialogue.change()
            })
            box.appendChild(choiceButton)
        });

        this.canvas.parentNode.appendChild(box)

        // const option1 = document.createElement("button")
        // const option2 = document.createElement("button")

        // // option1.textContent = this.game.sceneManager.activeScene
        // // option2.textContent = "Go to the cafe"

        // option1.addEventListener("click", () => {
        //     console.log("1")
        //     this.sceneManager.change(1)
        //     this.dialogue.change("Rudolf:", "Changed")
        // })

        // option2.addEventListener("click", () => {
        //     console.log("2")
        //     this.sceneManager.change(2)
        //     this.background.change(2)
        // })

        // box.appendChild(option1)
        // box.appendChild(option2)
        // this.canvas.parentNode.appendChild(box)
    }

    change() {
        
    }
}