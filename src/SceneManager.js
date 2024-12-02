import scenes from "./scenes.js"

export default class SceneManager {
    constructor() {
        this.scenes = scenes
    }

    setScene(scene) {
        this.activeScene = scene
    }
}