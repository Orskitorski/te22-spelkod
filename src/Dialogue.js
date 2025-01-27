export default class Dialogue {
    constructor (Game) {
        this.game = Game
        this.canvas = this.game.canvas
        this.x = 0
        this.y = 0
        this.box = document.createElement("div")
        this.dialogue = document.createElement("p")
        this.character = document.createElement("p")
        this.dialogueIndex = 0
    }

    create(scene) {
        this.box.classList.add("textBox")
        this.dialogue.textContent = scene.dialogue[this.dialogueIndex]
        this.character.textContent = scene.speaker
        this.box.appendChild(this.character)
        this.box.appendChild(this.dialogue)
        this.canvas.parentNode.appendChild(this.box)
    }

    change(buttonTarget, proceedDialogue) {
        if (proceedDialogue) {
            this.dialogueIndex++
            this.dialogue.textContent = this.game.sceneManager.activeScene.dialogue[this.dialogueIndex]
            this.character.textContent = this.game.sceneManager.activeScene.speaker
        }
        else if (!proceedDialogue) {
            this.dialogueIndex = 0
            this.dialogue.textContent = this.game.sceneManager.activeScene.dialogue[this.dialogueIndex]
            this.character.textContent = this.game.sceneManager.activeScene.speaker
        }
        
        if (this.dialogueIndex > (this.game.sceneManager.activeScene.dialogue.length)-1 && proceedDialogue) {
            this.dialogue.textContent = "Sex Ending"
            this.character.textContent = ""
            this.game.buttons.remove()
        }
    }
}