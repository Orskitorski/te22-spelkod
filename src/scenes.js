export default class Scenes {
    constructor(game) {
        this.game = game
        const scene = [
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
                        description: "Ask him what his favourite snack is"
                    }
                ]
            },
        ]
    }
}