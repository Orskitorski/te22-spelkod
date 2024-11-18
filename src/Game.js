import Ball from "./Ball.js"
import GameObject from "./GameObject.js"
import Input from "./Input.js"
import Player from "./Player.js"

export default class Game { // skapar klassen
    constructor(width, height) { // klassens constructor
        this.width = width
        this.height = height
        this.input = new Input(this)
        this.player = new Player(0, 0, 300, 300, "blue", 0.2, this)
        console.log("ny instans av game", this.width)
        this.box = new GameObject(0, 0, 200, 200, "purple", 1)
        this.box2 = new GameObject(654, 280, 200, 200, "green", -1)
        this.ball = new Ball(100, 240, 50, 50, "red", 2)
    }

    update(deltaTime) {
        this.box.update(deltaTime)
        this.box2.update(deltaTime)
        this.ball.update(deltaTime)
        this.player.update(deltaTime)
    }

    draw(ctx) {
        this.box.draw(ctx)
        this.box2.draw(ctx)
        this.ball.draw(ctx)
        this.player.draw(ctx)
    }
}