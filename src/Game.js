import GameObject from "./GameObject.js"

export default class Game { // skapar klassen
    constructor(width, height) { // klassens constructor
        this.width = width
        this.height = height
        console.log("ny instans av game", this.width)
        this.box = new GameObject(0, 0, 200, 200, "purple", 1)
        this.box2 = new GameObject(654, 200, 200, 200, "green", -1)
    }

    update(deltaTime) {
        this.box.update(deltaTime)
        this.box2.update(deltaTime)
    }

    draw(ctx) {
        this.box.draw(ctx)
        this.box2.draw(ctx)
    }
}