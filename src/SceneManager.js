import {scenes} from "./scenes"

export default class SceneManager {
    constructor(game) {
        this.game = game
        this.scenes = scenes
        this.activeSceneId = 1
        this.activeScene = this.get()
    }

    change(id) {
        if (id == this.activeSceneId) {
            this.game.dialogue.change(id, true)
        }
        else {
            this.activeSceneId = id
            this.activeScene = this.get()
            this.game.dialogue.change(id, false)
        }
    }

    get() {
        return this.scenes.find(scene => scene.id === this.activeSceneId)
    }

}