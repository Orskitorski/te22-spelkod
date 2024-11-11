import GameObject from "./GameObject";

export default class Player extends GameObject {
    constructor(x, y, width, height, color, speed, game) {
        super(x, y, width, height, color)
        this.game = game
        this.speed = speed

        this.speedX = 0
        this.maxSpeedX = speed
        this.speedY = 0
        this.maxSpeedY = speed

    }

    update(deltaTime) {

        if (this.game.input.keys.has("ArrowLeft")) {
            this.speedX -= this.maxSpeedX
        }
        if (this.game.input.keys.has("ArrowRight")) {
            this.speedX += this.maxSpeedX
        }

        if (this.y >= 320) {
            this.speedY = 0
            this.y = 320
            if (this.game.input.keys.has("ArrowUp")) {
                this.speedY -= 10
            }
            if (this.game.input.keys.has("ArrowRight") && this.game.input.keys.has("ArrowLeft") || !this.game.input.keys.has("ArrowRight") && !this.game.input.keys.has("ArrowLeft") || this.speedX > 0 && this.game.input.keys.has("ArrowLeft") || this.speedX < 0 && this.game.input.keys.has("ArrowRight")) {
                this.speedX *= 0.8
                if (this.speedX < 0.01 && this.speedX > -0.01) {
                    this.speedX = 0
                }
            }
        }
        else {
            this.speedY += 1
        }

        this.x += this.speedX
        this.y += this.speedY

        /*

        if (this.game.input.keys.has("ArrowUp")) {
            this.speedY -= this.maxSpeedY
        }
        if (this.game.input.keys.has("ArrowDown")) {
            this.speedY += this.maxSpeedY
        }
        
        if (!this.game.input.keys.has("ArrowUp") && !this.game.input.keys.has("ArrowDown")) {
            this.speedY = 0
        }
        
        

        this.y += this.speedY

        */

        /*
        if (this.game.input.keys.has("ArrowLeft")) {
            this.x -= this.speed
        }

        if (this.game.input.keys.has("ArrowRight")) {
            this.x += this.speed
        }

        if (this.game.input.keys.has("ArrowUp")) {
            this.y -= this.speed
        }

        if (this.game.input.keys.has("ArrowDown")) {
            this.y += this.speed
        }
        */
    }
}