export default class Scenes {
    constructor(game) {
        this.game = game
        this.scenes = [
            {
                id: 1,
                speaker: "Rudolf",
                description: "You are in Rudolfs bedroom",
                choices: [
                    {
                        description: "Go to cafe",
                        target: 2
                    },
                    {
                        description: "Talk",
                        target: 1
                    }
                ]
            },
            {
                id: 2,
                speaker: "Rudolf",
                description: "You are at cafe",
                choices: [
                    {
                        description: "Go to the bedroom ~",
                        target: 1
                    },
                    {
                        description: "Ask him what his favourite snack is",
                        target: 2
                    }
                ]
            },
        ]
        this.activeScene = 0
    }
}