import GameObject from "./GameObject";

export default class Player extends GameObject {
    constructor(x, y, width, height, color, speed, game) {
        super(x, y, width, height, color)
        this.game = game
        this.speed = speed

        this.image = new Image()
        this.image.src = "./src/assets/Soldier.png"

        this.frameWidth = 100
        this.frameHeight = 100
        this.frameX = 0
        this.frameY = 0
        this.flip = false
        this.maxFrames = 6
        this.timer = 0
        this.fps = 20
        this.interval = 1000 / this.fps

        this.speedX = 0
        this.maxSpeedX = speed
        this.speedY = 0
        this.maxSpeedY = speed


    }

    update(deltaTime) {

        if (this.game.input.keys.has("ArrowLeft")) {
            this.speedX -= this.maxSpeedX
            this.flip = true
            this.frameY = 1
            this.maxFrames = 8
        }

        if (this.game.input.keys.has("ArrowRight")) {
            this.speedX += this.maxSpeedX
            this.flip = false
            this.frameY = 1
            this.maxFrames = 8
        }

        if (this.speedY != 0) {
            this.frameY = 0
            this.maxFrames = 1
        }

        if (this.y >= 200) {
            this.speedY = 0
            this.y = 200
            if (this.game.input.keys.has("ArrowUp")) {
                this.speedY -= 15
            }
            if (this.game.input.keys.has("ArrowRight") && this.game.input.keys.has("ArrowLeft") || !this.game.input.keys.has("ArrowRight") && !this.game.input.keys.has("ArrowLeft") || this.speedX > 0 && this.game.input.keys.has("ArrowLeft") || this.speedX < 0 && this.game.input.keys.has("ArrowRight")) {
                this.speedX *= 0.8
                this.frameY = 0
                this.maxFrames = 6
                if (this.speedX < 0.01 && this.speedX > -0.01) {
                    this.speedX = 0
                }
            }
        }
        else {
            this.speedY += 1
        }

        if (this.game.input.keys.has(" ")) {
            this.frameY = 2
            this.maxFrames = 6
        }

        this.x += this.speedX
        this.y += this.speedY
        

        if (this.timer > this.interval) {
            this.frameX++
            this.timer = 0
        } else {
            this.timer += deltaTime
        }

        if (this.frameX >= this.maxFrames) {
            this.frameX = 0
        }

        if (this.game.input.keys.has("ArrowDown")) {
            this.frameY = 6
            this.frameX = 2
        }
    }
    
    draw(ctx) {
        if (this.flip) {
            ctx.save()
            ctx.scale(-1, 1)
        }
        ctx.drawImage(this.image, this.frameWidth * this.frameX, this.frameHeight * this.frameY, this.frameWidth, this.frameHeight, this.flip ? this.x * -1 - this.width : this.x, this.y, this.width, this.height) // source x, y, w, h, destination, x, y, w, h
        if (this.flip) {
            ctx.restore()
        }
    }
}