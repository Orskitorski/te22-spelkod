import Dialogue from "./Dialogue";

export const scenes = [
    {
        id: 1,
        speaker: "Rudolf:",
        description: "Welcome to my bedroom!",
        dialogue: ["Thank you for visiting me. I get kinda lonely sometimes...", "Oh, you like my room? Thanks!", "Wanna sex?"],
        choices: [
            {
                description: "Go to cafe",
                target: 2,
            },
            {
                description: "Talk",
                target: 1,
            }
        ]
    },
    {
        id: 2,
        speaker: "Rudolf:",
        description: "We are at the cafe",
        dialogue: ["This is the local cafe, it's very cozy!", "HJAHjhejaeehj", "Wanna sex?"],
        choices: [
            {
                description: "Go to the bedroom ~",
                target: 1,
            },
            {
                description: "Talk",
                target: 2,
            }
        ]
    },
]

