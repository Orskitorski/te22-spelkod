export const scenes = [
    {
        id: 1,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf.png",
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
        character: "./images/rudolf.png",
        dialogue: [
            { text: "I've been waiting for you.", speaker: "Rudolf:" },
            { text: "Don't be shy. Make yourself at home.", speaker: "Rudolf:" },
            { text: "Tell me... what are you *really* looking for?", speaker: "Rudolf:" }
        ],
        choices: [
            { description: "Express your desires", target: 5 },
            { description: "Try to leave", target: 6 },
            { description: "Ask questions about him", target: 7 },
            { description: "Suggest going out to grab a snack", target: 20 }
        ]
    },
    {
        id: 3,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf.png",
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
        character: "./images/rudolf.png",
        dialogue: [
            { text: "Aw, come on. Don't be like that.", speaker: "Rudolf:" },
            { text: "I thought you were different.", speaker: "Rudolf:" },
            { text: "It's just a little fun. What's the harm?", speaker: "Rudolf:" },
        ],
        choices: [
            { description: "Fight him", target: 9 },
            { description: "Change the subject", target: 2 }
        ]
    },
    {
        id: 5,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf.png",
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
        character: "./images/rudolf.png",
        dialogue: [
            { text: "You run to the door and try to open it.", speaker: "" },
            { text: "The door is locked. Rudolf chuckles behind you.", speaker: "" },
            { text: "Nice try.", speaker: "Rudolf:" },
            { text: "Let's continue, shall we?", speaker: "Rudolf:" }
        ],
        choices: [
            { description: "Try to act like nothing happened", target: 2 },
            { description: "Kill yourself", target: 13 }
        ]
    },
    {
        id: 7,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf.png",
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
        character: "./images/rudolf.png",
        dialogue: [
            { text: "It feels strangely compelling.", speaker: "" },
            { text: "You sense something... waiting on the other side.", speaker: "" },
            { text: "Do you dare to try and open it?", speaker: "" }
        ],
        choices: [
            { description: "Try to force it open", target: 6 },
            { description: "Look for a key", target: 16 }
        ]
    },
    {
        id: 9,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf_horror.png",
        dialogue: [
            { text: "Rudolf lunges at you.", speaker: "" },
            { text: "You're not strong enough.", speaker: "Rudolf:" },
            { text: "Give up.", speaker: "Rudolf:" },
            { text: "This is my world now.", speaker: "Rudolf:" },
            { text: '"Death by Rudolf" Ending', speaker: "" }
        ],
        choices: [] // Death by Rudolf ending
    },
    {
        id: 10,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf.png",
        dialogue: [
            { text: "Are you sure you're willing to pay it?", speaker: "Rudolf:" },
            { text: "The cost is... your humanity.", speaker: "Rudolf:" },
            { text: "Do we have a deal?", speaker: "Rudolf:" }
        ],
        choices: [
            { description: "Accept", target: 14 },
            { description: "Reject", target: 9 }
        ]
    },
    {
        id: 11,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf.png",
        dialogue: [
            { text: "It will consume you.", speaker: "Rudolf:" },
            { text: "It will destroy you.", speaker: "Rudolf:" },
            { text: "But... it will be real. For a moment.", speaker: "Rudolf:" }
        ],
        choices: [
            { description: "Accept", target: 15 },
            { description: "Reject", target: 9 }
        ]
    },
    {
        id: 12,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf_horror.png",
        dialogue: [
            { text: "You're trapped here with me. Forever.", speaker: "Rudolf:" },
            { text: "But don't worry... I'll make it fun.", speaker: "Rudolf:" },
            { text: "In my own special way.", speaker: "Rudolf:" },
            { text: '"Trapped" Ending', speaker: "Rudolf:" },
        ],
        choices: [] // Trapped ending
    },
    {
        id: 13,
        location: "Rudolf's room",
        background: "./images/black.png",
        character: "./images/rudolf.png",
        dialogue: [
            { text: "You quickly grab a pen you'd been carrying from your pocket and stab yourself in the jugular.", speaker: "" },
            { text: "You try to scream as you quickly start to bleed out.", speaker: "" },
            { text: "You fall to the floor and your body lies there limp while Rudolf looms over you.", speaker: "" },
            { text: "He smiles.", speaker: "" },
            { text: '"Cowards way out" ending', speaker: "" }
        ],
        choices: [] // KYS ending
    },
    {
        id: 14,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf_horror.png",
        dialogue: [
            { text: "You accept Rudolfs deal.", speaker: "" },
            { text: "All of a sudden you feel lighter and any doubts you had leave alongside your humanity.", speaker: "" },
            { text: "Let us go do some mischeif.", speaker: "Rudolf:" },
            { text: '"Inhuman" Ending', speaker: "" }
        ],
        choices: [] // Inhuman Ending
    },
    {
        id: 15,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf.png",
        dialogue: [
            { text: "You tell Rudolf you love him.", speaker: "" },
            { text: "I'm glad you feel that way.", speaker: "Rudolf:" },
            { text: "The two of you embrace.", speaker: "" },
            { text: '"Love" Ending', speaker: "" }
        ],
        choices: [] // Love Ending
    },
    {
        id: 16,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf.png",
        dialogue: [
            { text: "You continue to small talk with Rudolf while looking around the room.", speaker: "" },
            { text: '"There has got to be a key somewhere around here." you think to yourself.', speaker: "" },
            { text: "Rudolf is starting to get suspicious.", speaker: "" }
        ],
        choices: [
            { description: "Keep looking", target: 17 },
            { description: "Give up the search", target: 2 }
        ]
    },
    {
        id: 17,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf.png",
        dialogue: [
            { text: "You continue to discreetly look for a key to the door.", speaker: "" },
            { text: "You see something glisten in the light from the window.", speaker: "" },
            { text: "It's a key!", speaker: "" },
            { text: "You grab the key and run to the door, eager to escape Rudolf.", speaker: "" },
            { text: "Rudolf has no time to react as the key slots neatly into the lock and turns without much force.", speaker: "" },
        ],
        choices: [
            { description: "Run into the room.", target: 18 },
        ]
    },
    {
        id: 18,
        location: "Rudolf's secret room",
        background: "./images/basement.png",
        character: "",
        dialogue: [
            { text: "...", speaker: "" },
            { text: "The room is dark and has a very odd smell.", speaker: "" },
            { text: "What did you think you would find in there?", speaker: "Rudolf:" },
            { text: "A shiver runs down your spine.", speaker: "" },
        ],
        choices: [
            { description: "Turn around", target: 19 },
            { description: "Kill yourself before Rudolf gets to you", target: 13 },
        ]
    },
    {
        id: 19,
        location: "Rudolf's secret room",
        background: "./images/basement.png",
        character: "./images/rudolf_horror.png",
        dialogue: [
            { text: "Now you're mine...", speaker: "Rudolf:" },
            { text: "Rudolf shuts the door behind him and the two of you are left in the dark.", speaker: "" },
            { text: '"Kidnapped" Ending', speaker: "" },
        ],
        choices: [] // Kidnapped Ending
    },
    {
        id: 20,
        location: "Rudolf's room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf.png",
        dialogue: [
            { text: "Ok, I know where we can go!", speaker: "Rudolf:" },
            { text: "We can go to the cafe!", speaker: "Rudolf:" },
        ],
        choices: [
            { description: "Follow Rudolf to the cafe", target: 21 },
        ]
    },
    {
        id: 21,
        location: "Cafe",
        background: "./images/Cafe.png",
        character: "./images/rudolf.png",
        dialogue: [
            { text: "This is the local cafe!", speaker: "Rudolf:" },
            { text: "It's very cozy.", speaker: "Rudolf:" },
            { text: "You feel a pleasant smell of baked goods.", speaker: "" },
        ],
        choices: [
            { description: "Go back to Rudolfs place", target: 2 },
            { description: "Buy some cupcakes", target: 22 },
            { description: "Talk", target: 23 },
        ]
    },
    {
        id: 22,
        location: "Cafe",
        background: "./images/Cafe.png",
        character: "./images/rudolf.png",
        dialogue: [
            { text: "You and Rudolf walk up to the front desk.", speaker: "" },
            { text: "What flavour of cupcake du you want?", speaker: "Rudolf:" },
            { text: "Rudolf looks at you with an uneasy smile.", speaker: ""},
        ],
        choices: [
            { description: "Chocolate", target: 24 },
            { description: "Vanilla", target: 24 },
            { description: "Strawberry", target: 24 },
        ]
    },
    {
        id: 23,
        location: "Cafe",
        background: "./images/Cafe.png",
        character: "./images/rudolf.png",
        dialogue: [
            { text: "You and Rudolf start to converse about anything and everything.", speaker: "" },
            { text: "The entire time Rudolf keeps intense eye contact.", speaker: ""},
        ],
        choices: [
            { description: "Order some cupcakes", target: 22 },
            { description: "Go back to Rudolfs place", target: 25 },
        ]
    },
    {
        id: 24,
        location: "Cafe",
        background: "./images/Cafe.png",
        character: "./images/rudolf.png",
        dialogue: [
            { text: "Good choice!", speaker: "Rudolf:" },
            { text: "We'll have two of those please.", speaker: "Rudolf:" },
            { text: "The cashier takes the order and hurries away to grab the cupcakes.", speaker: ""},
            { text: "Eventually they come back, Rudolf grabs the cupcakes and the two of you leave.", speaker: ""},
        ],
        choices: [
            { description: "Go back to Rudolfs place", target: 25 },
        ]
    },
    {
        id: 25,
        location: "Rudolfs room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf.png",
        dialogue: [
            { text: "It's getting quite late.", speaker: "Rudolf:" },
            { text: "I had a good time today.", speaker: "Rudolf:" },
            { text: "Would you be willing to meet again some time?", speaker: "Rudolf:"},
        ],
        choices: [
            { description: "Yes", target: 26 },
            { description: "No", target: 27 },
            { description: "Sex?", target: 28 },
        ] 
    },
    {
        id: 26,
        location: "Rudolfs room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf.png",
        dialogue: [
            { text: "Ok, I'll be in touch!", speaker: "Rudolf:" },
            { text: "You walk out of the door with a spring in your step", speaker: "" },
            { text: "You look back and see Rudolf standing at the door.", speaker: ""},
            { text: "He smiles.", speaker: ""},
            { text: '"Good" Ending', speaker: ""},
        ],
        choices: [] // Good Ending
    },
    {
        id: 27,
        location: "Rudolfs room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf_sad.png",
        dialogue: [
            { text: "The happy expression melts off Rudolfs face.", speaker: "" },
            { text: "Oh... Ok.", speaker: "Rudolf:" },
            { text: "I guess it wasn't meant to be...", speaker: "Rudolf:"},
            { text: "You walk out of Rudolfs home and you don't look back.", speaker: ""},
            { text: '"Rejection" Ending', speaker: ""},
        ],
        choices: [] // Rejection Ending
    },
    {
        id: 28,
        location: "Rudolfs room",
        background: "./images/bedroom_background.png",
        character: "./images/rudolf.png",
        dialogue: [
            { text: "Ok.", speaker: "Rudolf:" },
            { text: '"Sex" Ending', speaker: ""},
        ],
        choices: [] // Sex Ending
    },
];