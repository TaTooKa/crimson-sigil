const magicItemPrefix = [
                "Indomitable",
                "Furious",
                "Possessed",
                "Animated",
                "Sacred",
                "Divine",
                "Infernal",
                "Demonic",
                "Diamantine",
                "Crystal",
                "Legendary",
                "Mythic",
                "Avenging",
                "Vindictive",
                "Radiant",
                "Shining",
                "Dark",
                "Cursed",
                "Vorpal",
                "Enchanted",
                "Fiery",
                "Icy",
                "Voltaic",
            ];
const magicItemSuffix = [
                "Absorption",
                "Regeneration",
                "Corruption",
                "Obfuscation",
                "Destruction",
                "Protection",
                "Celerity",
                "Amplification",
                "Etherealness",
                "Revelation",
            ];
const meleeWeapons = [
        "Halberd",
        "Lance",
        "Greatsword", 
        "Daiklave",
        "Morningstar",
        "Mace",
        "Dagger",
        "Warhammer",
        "Sword",
        "Short Sword",
        "Long Sword",
        "Broad Sword",
        "Spear",
        "Axe",
        "Great Axe",
        "Whip",
        "Staff",
        "Scepter",
        "Claymore",
        "Zweihänder",
    ];
const rangedWeapons = [
        "Throwing Axe",
        "Throwing Knife",
        "Blowgun",
        "Sling",
        "Shortbow",
        "Boomerang",
        "Crossbow",
        "Javelin",
        "Longbow",
        "Chakram",
    ];
const accessories = [
        "Helm",
        "Gauntlets",
        "Belt",
        "Bracers",
        "Boots",
        "Cloak",
        "Ring",
        "Bracelet",
        "Amulet",
        "Earrings",
        "Circlet",
        "Scarf",
        "Pauldrons",
        "Cape",
        "Necklace",
    ];
const treasureOracleResults = {
    "oracle-treasure-type-result": [
        "Sparse stash of riches (coins or valuables) or useful supplies. Increase your <span class=\"primary\">GEAR</span> by 1.",
        "Sparse stash of riches (coins or valuables) or useful supplies. Increase your <span class=\"primary\">GEAR</span> by 1.",
        "Sparse stash of riches (coins or valuables) or useful supplies. Increase your <span class=\"primary\">GEAR</span> by 1.",
        "Sparse stash of riches (coins or valuables) or useful supplies. Increase your <span class=\"primary\">GEAR</span> by 1.",
        "Sparse stash of riches (coins or valuables) or useful supplies. Increase your <span class=\"primary\">GEAR</span> by 1.",
        "Abundant stash of riches (coins or valuables) or useful supplies. Increase your <span class=\"primary\">GEAR</span> by 2.",
        "Abundant stash of riches (coins or valuables) or useful supplies. Increase your <span class=\"primary\">GEAR</span> by 2.",
        "Abundant stash of riches (coins or valuables) or useful supplies. Increase your <span class=\"primary\">GEAR</span> by 2.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-melee-weapons\">Melee Weapon</a>.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-melee-weapons\">Melee Weapon</a>.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-melee-weapons\">Melee Weapon</a>.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-melee-weapons\">Melee Weapon</a>.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-melee-weapons\">Melee Weapon</a>.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-ranged-weapons\">Ranged Weapon</a>.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-ranged-weapons\">Ranged Weapon</a>.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-ranged-weapons\">Ranged Weapon</a>.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-ranged-weapons\">Ranged Weapon</a>.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-ranged-weapons\">Ranged Weapon</a>.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-armor\">Armor or Accessory</a>.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-armor\">Armor or Accessory</a>.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-armor\">Armor or Accessory</a>.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-armor\">Armor or Accessory</a>.",
        "A worn but usable <a href=\"/oracles/treasure-oracles#equipment-armor\">Armor or Accessory</a>.",
        "A unique <a href=\"/oracles/treasure-oracles#magic-melee-weapon\">Magic Melee Weapon</a>.",
        "A unique <a href=\"/oracles/treasure-oracles#magic-melee-weapon\">Magic Melee Weapon</a>.",
        "A unique <a href=\"/oracles/treasure-oracles#magic-melee-weapon\">Magic Melee Weapon</a>.",
        "A unique <a href=\"/oracles/treasure-oracles#magic-ranged-weapon\">Magic Ranged Weapon</a>.",
        "A unique <a href=\"/oracles/treasure-oracles#magic-ranged-weapon\">Magic Ranged Weapon</a>.",
        "A unique <a href=\"/oracles/treasure-oracles#magic-armor\">Magic Armor or Accessory</a>.",
        "A unique <a href=\"/oracles/treasure-oracles#magic-armor\">Magic Armor or Accessory</a>.",
    ],
    "oracle-equipment-melee-weapons-result": meleeWeapons,
    "oracle-equipment-ranged-weapons-result": rangedWeapons,
    "oracle-equipment-armor-result": accessories,
    "oracle-weapon-features-result": [
        "Carved from granite",
        "Dragonbone hardware",
        "Drips green ichor",
        "Drips ocean water",
        "Faint, ghostly aura",
        "Galaxies swirl on surface",
        "Gem in pommel/handle",
        "Inlaid with gold",
        "Ironwood",
        "Moon motif and silvered",
        "Rune-scribed",
        "Rusted and chipped",
        "Shaped like an animal",
        "Sparks dance on surface",
        "Starmetal",
        "Studded with gemstones",
        "Trails incense",
        "Trails sparkles",
        "Turns blood to rose petals",
        "Whispers in a language",
    ],
    "oracle-armor-features-result": [
        "Blurry, indistinct edges",
        "Bone or metal spikes",
        "Covered in frost",
        "Demonic, horned face",
        "Distant sound of ocean",
        "Dragon scales",
        "Draped in holy symbols",
        "Exudes tree sap",
        "Faint, arcane runes",
        "Festooned with fungi",
        "Gilded metal/gold thread",
        "Large, golden cat eye",
        "Made of scorpion chitin",
        "Oak leaf motif",
        "Oozes blood",
        "Pearl-white fish scales",
        "Scorched, smells burned",
        "Set with crystals",
        "Studded with shark teeth",
        "Turtle shell plating        ",
    ],
    "oracle-magic-melee-weapon-result": {
        "template": [
            "{prefix} {item} of {suffix}",
        ],
        "tables": {
            "prefix": magicItemPrefix,
            "item": meleeWeapons,
            "suffix": magicItemSuffix,
        },
    },
    "oracle-magic-ranged-weapon-result": {
        "template": [
            "{prefix} {item} of {suffix}",
        ],
        "tables": {
            "prefix": magicItemPrefix,
            "item": rangedWeapons,
            "suffix": magicItemSuffix,
        },
    },
    "oracle-magic-armor-result": {
        "template": [
            "{prefix} {item} of {suffix}",
        ],
        "tables": {
            "prefix": magicItemPrefix,
            "item": accessories,
            "suffix": magicItemSuffix,
        },
    },
    "oracle-sentient-item-virtue-result": [
        "Insists on protecting people and creatures it likes",
        "Warns its wielder if it senses impending danger",
        "Gladly translates Primordial languages for its wielder",
        "Senses hiding creatures within near range, but not exact place",
        "Owed a favor by a legendary creature or entity",
        "Commands the respect of the followers of a god",
        "Occasionally remembers useful ancient history",
        "Imparts pleasant dreams and good sleep to its wielder",
        "Coaches its wielder on the right things to say in a situation",
        "Sometimes provides helpful strategic advice",
        "Occasionally notices important details others have missed",
        "Tries to mediate disagreements between conscious items",
        "Calming presence to animals",
        "Has an extremely acute sense of smell",
        "Knows the direction of the nearest running water",
        "Has legitimate prophecies but isn't sure of their meaning",
        "Can undo a great evil or spell",
    ],
    "oracle-sentient-item-flaw-result": [
        "Afraid of the dark",
        "Preferred a past owner and always draws comparisons",
        "Chatters while wielder is trying to concentrate",
        "Tries to get wielder into fights so it \"has something to do\"",
        "Does not want to be separated from wielder for any reason",
        "Objects to gambling or carousing",
        "Accuses everyone of lying; is correct once in a while",
        "Believes its wielder is a pawn in its apocalyptic scheme",
        "Constantly tries to escape its current wielder",
        "Demands its wielder observe its god's strict rituals",
        "Insists on being reunited with its creator, living or dead",
        "Can't stand other conscious magic items",
        "Refuses to be used for \"unimportant\" or \"boring\" tasks",
        "Purposefully goes magically inert when mad at its wielder",
        "Insists on being meticulously cleaned every day",
        "Loves the color purple and despises all other colors",
        "Objects to negotiating or planning",
        "Pretends to know information it doesn't know",
    ],

};

export default treasureOracleResults;