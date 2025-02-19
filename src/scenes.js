export const scenes = [
    {
        id: 1,
        speaker: "Rudolf:",
        description: "Welcome to my... sanctuary.",
        background: "./images/bedroom_background.png",
        dialogue: [
            "Thank you for visiting me. I get kinda lonely sometimes... especially in here.",
            "Oh, you like my room?  It's... personalized.",
            "So... wanna skip the small talk and get straight to the point?"
        ],
        choices: [
            {
                description: "Investigate the room",
                target: 3,
            },
            {
                description: "Play along",
                target: 2,
            },
            {
                description: "Politely decline",
                target: 4,
            }
        ]
    },
    {
        id: 2,
        speaker: "Rudolf:",
        description: "Let's get comfortable.",
        background: "./images/bedroom_background.png",
        dialogue: [
            "I've been waiting for you.",
            "Don't be shy.  Make yourself at home.",
            "Tell me... what are you *really* looking for?"
        ],
        choices: [
            {
                description: "Express your desires",
                target: 5,
            },
            {
                description: "Try to leave",
                target: 6,
            },
            {
                description: "Ask questions about him",
                target: 7,
            }
        ]
    },
    {
        id: 3,
        speaker: "Narrator:",
        description: "The room is sparsely decorated.  A single flickering lightbulb illuminates strange symbols scrawled on the walls.  A faint, metallic scent hangs in the air.",
        background: "./images/bedroom_background.png",
        dialogue: [
            "You feel a chill despite the warmth.",
            "Something feels very wrong here.",
            "You notice a locked door at the back of the room."
        ],
        choices: [
            {
                description: "Confront Rudolf",
                target: 2,
            },
            {
                description: "Try the locked door",
                target: 8,
            }
        ]
    },
    {
        id: 4,
        speaker: "Rudolf:",
        description: "Aw, come on. Don't be like that.",
        background: "./images/bedroom_background.png",
        dialogue: [
            "I thought you were different.",
            "It's just a little fun.  What's the harm?",
            "You're not going anywhere."
        ],
        choices: [
            {
                description: "Fight him",
                target: 9,
            },
            {
                description: "Try to reason with him",
                target: 2,
            }
        ]
    },
    {
        id: 5,
        speaker: "Rudolf:",
        description: "Oh, really? Tell me more...",
        background: "./images/bedroom_background.png",
        dialogue: [
            "I'm listening intently.",
            "I can give you anything you desire.",
            "Just... be careful what you wish for."
        ],
        choices: [
            {
                description: "Wish for power",
                target: 10,
            },
            {
                description: "Wish for love",
                target: 11,
            },
            {
                description: "Wish for escape",
                target: 12,
            }
        ]
    },
    {
        id: 6,
        speaker: "Narrator:",
        description: "The door is locked.  Rudolf chuckles behind you.",
        background: "./images/bedroom_background.png",
        dialogue: [
            "Nice try.",
            "You're mine now.",
            "Let's continue, shall we?"
        ],
        choices: [
            {
                description: "Return to Rudolf",
                target: 2,
            }
        ]
    },
    {
        id: 7,
        speaker: "Rudolf:",
        description: "Me? I'm just a simple guy... with simple tastes.",
        background: "./images/bedroom_background.png",
        dialogue: [
            "I like long walks on the beach... at midnight.",
            "I enjoy collecting... interesting things.",
            "And I *love* having guests over."
        ],
        choices: [
            {
                description: "Press him for more information",
                target: 2,
            },
            {
                description: "Try to change the subject",
                target: 2,
            }
        ]
    },
    {
        id: 8,
        speaker: "Narrator:",
        description: "The locked door seems to hum faintly.",
        background: "./images/bedroom_background.png",
        dialogue: [
            "It feels strangely compelling.",
            "You sense something... waiting on the other side.",
            "Do you dare to try and open it?"
        ],
        choices: [
            {
                description: "Try to force it open",
                target: 9,
            },
            {
                description: "Look for a key",
                target: 2, // Could lead to a new scene where you find a key
            }
        ]
    },
    {
        id: 9,
        speaker: "Narrator:",
        description: "You struggle against Rudolf/the door, but it's no use.",
        background: "./images/bedroom_background.png",
        dialogue: [
            "You're not strong enough.",
            "Give up.",
            "This is my world now."
        ],
        choices: [
          //Game Over or bad ending
        ]
    },
    {
        id: 10,
        speaker: "Rudolf:",
        description: "Power?  It comes at a price...",
        background: "./images/bedroom_background.png",
        dialogue: [
            "Are you sure you're willing to pay it?",
            "The cost is... your humanity.",
            "Do we have a deal?"
        ],
        choices: [
            //Accept or Reject (bad or good ending)
        ]
    },
    {
        id: 11,
        speaker: "Rudolf:",
        description: "Love?  A fleeting illusion...",
        background: "./images/bedroom_background.png",
        dialogue: [
            "It will consume you.",
            "It will destroy you.",
            "But... it will be real. For a moment."
        ],
        choices: [
            //Accept or Reject (bad or good ending)
        ]
    },
    {
        id: 12,
        speaker: "Rudolf:",
        description: "Escape?  There is no escape.",
        background: "./images/bedroom_background.png",
        dialogue: [
            "You're trapped here with me. Forever.",
            "But don't worry... I'll make it fun.",
            "In my own special way."
        ],
        choices: [
            //Game Over or bad ending
        ]
    }
];