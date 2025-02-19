export const scenes = [
    {
        id: 1,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        dialogue: [
            { text: "Thank you for visiting me. I get kinda lonely sometimes... especially in here.", speaker: "Rudolf:" },
            { text: "Oh, you like my room? It's... personalized.", speaker: "Rudolf:" },
            { text: "So... wanna skip the small talk and get straight to the point?", speaker: "Rudolf:" }
        ],
        choices: [
            { description: "Investigate the room", target: 3 },
            { description: "Play along", target: 2 },
            { description: "Politely decline", target: 4 }
        ]
    },
    {
        id: 2,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        dialogue: [
            { text: "I've been waiting for you.", speaker: "Rudolf:" },
            { text: "Don't be shy. Make yourself at home.", speaker: "Rudolf:" },
            { text: "Tell me... what are you *really* looking for?", speaker: "Rudolf:" }
        ],
        choices: [
            { description: "Express your desires", target: 5 },
            { description: "Try to leave", target: 6 },
            { description: "Ask questions about him", target: 7 }
        ]
    },
    {
        id: 3,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        dialogue: [
            { text: "The room is sparsely decorated. A single flickering lightbulb illuminates strange symbols scrawled on the walls. A faint, metallic scent hangs in the air.", speaker: "" },
            { text: "You feel a chill despite the warmth.", speaker: "" },
            { text: "Something feels very wrong here.", speaker: "" },
            { text: "You notice a locked door at the back of the room.", speaker: "" }
        ],
        choices: [
            { description: "Talk to Rudolf", target: 2 },
            { description: "Try the locked door", target: 8 }
        ]
    },
    {
        id: 4,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        dialogue: [
            { text: "Aw, come on. Don't be like that.", speaker: "Rudolf:" },
            { text: "I thought you were different.", speaker: "Rudolf:" },
            { text: "It's just a little fun. What's the harm?", speaker: "Rudolf:" },
            { text: "You're not going anywhere.", speaker: "Rudolf:" }
        ],
        choices: [
            { description: "Fight him", target: 9 },
            { description: "Try to reason with him", target: 2 }
        ]
    },
    {
        id: 5,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        dialogue: [
            { text: "Oh, really? Tell me more...", speaker: "Rudolf:" },
            { text: "I'm listening intently.", speaker: "Rudolf:" },
            { text: "I can give you anything you desire.", speaker: "Rudolf:" },
            { text: "Just... be careful what you wish for.", speaker: "Rudolf:" }
        ],
        choices: [
            { description: "Wish for power", target: 10 },
            { description: "Wish for love", target: 11 },
            { description: "Wish for escape", target: 12 }
        ]
    },
    {
        id: 6,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        dialogue: [
            { text: "The door is locked. Rudolf chuckles behind you.", speaker: "" },
            { text: "Nice try.", speaker: "Rudolf:" },
            { text: "You're mine now.", speaker: "Rudolf:" },
            { text: "Let's continue, shall we?", speaker: "Rudolf:" }
        ],
        choices: [
            { description: "Return to Rudolf", target: 2 },
            { description: "Kill yourself", target: 13 }
        ]
    },
    {
        id: 7,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        dialogue: [
            { text: "Me? I'm just a simple guy... with simple tastes.", speaker: "Rudolf:" },
            { text: "I like long walks on the beach... at midnight.", speaker: "Rudolf:" },
            { text: "I enjoy collecting... interesting things.", speaker: "Rudolf:" },
            { text: "And I *love* having guests over.", speaker: "Rudolf:" }
        ],
        choices: [
            { description: "Press him for more information", target: 2 },
            { description: "Try to change the subject", target: 2 }
        ]
    },
    {
        id: 8,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        dialogue: [
            { text: "It feels strangely compelling.", speaker: "" },
            { text: "You sense something... waiting on the other side.", speaker: "" },
            { text: "Do you dare to try and open it?", speaker: "" }
        ],
        choices: [
            { description: "Try to force it open", target: 6 },
            { description: "Look for a key", target: 2 }
        ]
    },
    {
        id: 9,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        dialogue: [
            { text: "You're not strong enough.", speaker: "Rudolf:" },
            { text: "Give up.", speaker: "Rudolf:" },
            { text: "This is my world now.", speaker: "Rudolf:" }
        ],
        choices: [] // Game Over or bad ending
    },
    {
        id: 10,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        dialogue: [
            { text: "Are you sure you're willing to pay it?", speaker: "Rudolf:" },
            { text: "The cost is... your humanity.", speaker: "Rudolf:" },
            { text: "Do we have a deal?", speaker: "Rudolf:" }
        ],
        choices: [] // Accept or Reject (bad or good ending)
    },
    {
        id: 11,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        dialogue: [
            { text: "It will consume you.", speaker: "Rudolf:" },
            { text: "It will destroy you.", speaker: "Rudolf:" },
            { text: "But... it will be real. For a moment.", speaker: "Rudolf:" }
        ],
        choices: [] // Accept or Reject (bad or good ending)
    },
    {
        id: 12,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        dialogue: [
            { text: "You're trapped here with me. Forever.", speaker: "Rudolf:" },
            { text: "But don't worry... I'll make it fun.", speaker: "Rudolf:" },
            { text: "In my own special way.", speaker: "Rudolf:" },
            { text: "Trapped ending", speaker: "" }
        ],
        choices: [] // Game Over or bad ending
    },
    {
        id: 13,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        dialogue: [
            { text: "You stab yourself in the jugular with a pen you'd been carrying in your pocket.", speaker: "" },
            { text: "You fall to the floor, and your body lies there limp while Rudolf looms over your body", speaker: "" },
            { text: "He smiles.", speaker: "" },
            { text: '"Cowards way out" ending', speaker: "" }
        ],
        choices: [] // KYS ending
    }
];