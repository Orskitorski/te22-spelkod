export default class SceneManager {
    constructor(game, scenes) {
        this.activeScene = 1
    }

    change(id) {
        this.activeScene = id
    }
}