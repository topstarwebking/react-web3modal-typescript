
export const API_URL = "http://localhost:3000";

export const layersOrder = [
    { name: "Background" },
    { name: "Alter" },
    { name: "Grimace" },
    { name: "Mouth" },
    { name: "Eyes" },
    { name: "Headwear" },
    { name: "Outfit" },
]

export const traits = [
    {
        name: 'Background',
        images: [
            'Astar',
            'Beige',
            'Blue'
        ]
    }, 
    {
        name: 'Alter',
        images: [
            'Gold',
            'Human'
        ]
    },
    {
        name: 'Grimace',
        images: [
            'Gold',
            'Gray'
        ]
    },
    {
        name: 'Mouth',
        images: [
            'Buck Teeth',
            'Gangster'
        ]
    },
    {
        name: 'Eyes',
        images: [
            'Angry',
            'Basic'
        ]
    },
    {
        name: 'Headwear',
        images: [
            'Angel',
            'Bandana'
        ]
    },
    {
        name: 'Outfit',
        images: [
            'French',
            'Jacket'
        ]
    }

]

export const defaultImage = {
    Alter: 'Gold',
    Background: 'Fries',
    Eyes: 'Lizard',
    Grimace: 'Gold',
    Headwear: 'French Beret',
    Mouth: 'Clown',
    Outfit: 'Tuxedo'
}