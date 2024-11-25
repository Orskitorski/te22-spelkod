import scenes from "./scenes.js"

export default class SceneManager {
    constructor() {
        this.activeScene = "Bedroom"
        this.scenes = scenes
    }

    setScene(scene) {
        this.activeScene = scene 
    }
}