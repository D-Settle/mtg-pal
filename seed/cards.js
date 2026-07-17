module.exports = [
  {
    name: "Sol Ring",
    manaCost: "{1}",
    typeLine: "Artifact",
    supertypes: [],
    cardTypes: ["Artifact"],
    subtypes: [],
    oracleText:
      "{T}: Add {C}{C}.",
    colors: [],
    colorIdentity: [],
    rarity: "Uncommon",
    imageUrl: "https://cards.scryfall.io/display/front/9/1/91fdb56b-54d5-4272-8319-505ff987fe9b.webp?1783903215"
  },
  {
    name: "Iron Spider, Stark Upgrade",
    manaCost: "{3}",
    typeLine: "Legendary Artifact Creature — Spider Hero",
    supertypes: ["Legendary"],
    cardTypes: ["Artifact", "Creature"],
    subtypes: ["Spider", "Hero"],
    oracleText:
      "Vigilance.\n{T}: Put a +1/+1 counter on each artifact creature and/or Vehicle you control.\n{2}: Remove two +1/+1 counters from among artifacts you control: Draw a card.",
    colors: [],
    colorIdentity: [],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/9/1/91fdb56b-54d5-4272-8319-505ff987fe9b.webp?1783903215"
  },
  {
    name: "Command Tower",
    manaCost: "",
    typeLine: "Land",
    supertypes: [],
    cardTypes: ["Land"],
    subtypes: [],
    oracleText:
      "{T}: Add one mana of any color in your commander's color identity.",
    colors: [],
    colorIdentity: ["W", "U", "B", "R", "G"],
    rarity: "Common",
    imageUrl: "https://cards.scryfall.io/display/front/0/5/0548fb60-c843-4f8f-a029-6f10efc63a41.webp?1783903206"
  },

  // Mono-white

  {
    name: "Anti-Venom, Horrifying Healer",
    manaCost: "{W}{W}{W}{W}{W}",
    typeLine: "Legendary Creature — Symbiote Hero",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Symbiote", "Hero"],
    oracleText:
      "When Anti-Venom enters, if he was cast, return target creature card from your graveyard to the battlefield.  If damage would be dealt to Anti-Venom, prevent that damage and put that many +1/+1 counters on him",
    colors: ["W"],
    colorIdentity: ["W"],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/5/6/560384fe-7be0-4b93-a515-2fe687ab2492.webp?1783905365"
  },
  {
    name: "With Great Power...",
    manaCost: "{3}{W}",
    typeLine: "Enchantment",
    supertypes: [],
    cardTypes: ["Enchantment"],
    subtypes: ["Aura"],
    oracleText:
      "Enchant creature you control.\nEnchanted creature gets +2/+2 for each Aura and Equipment attached to it.\nAll damage that would be dealt to you is dealt to enchanted creature instead.",
    colors: ["W"],
    colorIdentity: ["W"],
    rarity: "Rarity",
    imageUrl: "https://cards.scryfall.io/display/front/f/7/f717c096-e161-426e-a8d7-c93b117e16b9.webp?1783905357"
  },

  // Mono-blue

  {
    name: "Counterspell",
    manaCost: "{U}{U}",
    typeLine: "Instant",
    supertypes: [],
    cardTypes: ["Instant"],
    subtypes: [],
    oracleText:
      "Counter target spell",
    colors: ["U"],
    colorIdentity: ["U"],
    rarity: "Uncommon",
    imageUrl: "https://cards.scryfall.io/display/front/4/f/4f616706-ec97-4923-bb1e-11a69fbaa1f8.webp?1783909630"
  },
  {
    name: "Rhystic Study",
    manaCost: "{2}{U}",
    typeLine: "Enchantment",
    supertypes: [],
    cardTypes: ["Enchantment"],
    subtypes: [],
    oracleText:
      "Whenever an opponent casts a spell, you may draw a card unless that player pays {1}.",
    colors: ["U"],
    colorIdentity: ["U"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/9/f/9f37c5b6-a59c-45cd-9a99-e9357fe9ea1b.webp?1783919146"
  },

  // Mono-black

  {
    name: "Doctor Doom, Unrivaled",
    manaCost: "{2}{B}{B}",
    typeLine: "Legendary Creature — Human Sorcerer Villain",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Human", "Sorcerer", "Villain"],
    oracleText:
      "Lifelink.\n{T}: You draw a card and lose 1 life.  Then if your library has no cards in it, you win the game. (You win even if you have 0 life or didn't draw a card.)",
    colors: ["B"],
    colorIdentity: ["B"],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/2/9/2973e855-fe93-41a1-a62e-4699ef2c3d1d.webp?1783903062"
  },
  {
    name: "Reassembling Skeleton",
    manaCost: "{1}{B}",
    typeLine: "Creature — Skeleton Warrior",
    supertypes: [],
    cardTypes: ["Creature"],
    subtypes: ["Skeleton", "Warrior"],
    oracleText:
      "{1}{B}: Return this card from your graveyard to the battlefield tapped.",
    colors: ["B"],
    colorIdentity: ["B"],
    rarity: "Uncommon",
    imageUrl: "https://cards.scryfall.io/display/front/4/d/4d431445-d7db-4ce1-b422-41494d9be1b4.webp?1783907080"
  },

  // Mono-red

  {
    name: "Lightning Bolt",
    manaCost: "{R}",
    typeLine: "Instant",
    supertypes: [],
    cardTypes: ["Instant"],
    subtypes: [],
    oracleText:
      "Lightning Bolt deals 3 damage to any target.",
    colors: ["R"],
    colorIdentity: ["R"],
    rarity: "Uncommon",
    imageUrl: "https://cards.scryfall.io/display/front/7/6/7673784e-db4b-43a1-8d55-1bb9fc1e284f.webp?1783903008"
  },
  {
    name: "Impact Tremors",
    manaCost: "{1}{R}",
    typeLine: "Enchantment",
    supertypes: [],
    cardTypes: ["Enchantment"],
    subtypes: [],
    oracleText: "Whenever a creature you control enters, this enchantent deals 1 damage to each opponent",
    colors: ["R"],
    colorIdentity: ["R"],
    rarity: "Common",
    imageUrl: "https://cards.scryfall.io/display/front/d/0/d0b7cecf-b51b-4d30-b7e9-cd7976271e07.webp?1783908891"
  },

  // Mono-green

  {
    name: "The Unbeatable Squirrel Girl",
    manaCost: "{1}{G}{G}{G}",
    typeLine: "Legendary Creature — Squirrel Human Hero",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Squirrel", "Human", "Hero"],
    oracleText:
      "Do You Like Squirrels — Whenever The Unbeatable Squirrel Girl enters or attacks, creat a 1/1 green Squirrel creature token.\nI LOVE Squirrels — {1}{G}{G}{G}: Create X 1/1 green Squirrel creature tokens, where X is the number of Squirrels you control.",
    colors: ["G"],
    colorIdentity: ["G"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/d/8/d8b94ebb-0b3a-4e68-8c0c-3a61ac32f3ef.webp?1783902911"
  },
  {
    name: "Go Nuts",
    manaCost: "{G}",
    typeLine: "Sorcery",
    supertypes: [],
    cardTypes: ["Sorcery"],
    subtypes: [],
    oracleText:
      "Teamwork {3} (As an additional cost to cast this spell, you may tap any number of creatures you control with total power 3 or more.)\nChoose one.  If this spell was cast using teamwork, chose both instead.\n•Put a +1/+1 counter on target creature.\n•Target creature you control fights target creature an opponent controls",
    colors: ["G"],
    colorIdentity: ["G"],
    rarity: "Common",
    imageUrl: "https://cards.scryfall.io/display/front/1/5/152a7b5b-2d95-45d3-8fd9-0ca1d5a79f8b.webp?1783902918"
  },

  // Two-color

  {
    name: "Sensational Spider-Man",
    manaCost: "{1}{W}{U}",
    typeLine: "Legendary Creature — Spider Human Hero",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Spider", "Human", "Hero"],
    oracleText: "Whenever Sensational Spider-Man attacks, tap target creature defending player controls and put a stun counter on it.  Then you may remove up to three stun counters from among all permanents.  Draw cards equal to the number of stun counters removed this way.",
    colors: ["W", "U"],
    colorIdentity: ["W", "U"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/7/a/7a938fa9-cba2-4773-9be9-db1e37aa001f.webp?1783905366"
  },
  {
    name: "Black Widow, Double Agent",
    manaCost: "{1}{W}{B}",
    typeLine: "Legendary Creature — Human Hero Villain",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Human", "Hero", "Villain"],
    oracleText:
      "Deathtouch\nWhenever a creature you control attacks alone, it gains first strike and menace until end of turn. (it can't be blocked except by two or more creatures.)",
    colors: ["W", "B"],
    colorIdentity: ["W", "B"],
    rarity: "Uncommon",
    imageUrl: "https://cards.scryfall.io/display/front/a/a/aa8dbbb9-36a5-48e0-9e30-aeed0fb5d522.webp?1783902905"
  },
  {
    name: "Boros Cluestone",
    manaCost: "{3}",
    typeLine: "Artifact",
    supertypes: [],
    cardTypes: ["Artifact"],
    subtypes: [],
    oracleText:
    "{T}: Add {R} or {W}\n{R}{W}, {T}: Sacrifice Boros Cluestone:\nDraw a card.",
    colors: [],
    colorIdentity: ["R", "W"],
    rarity: "Common",
    imageUrl: "https://cards.scryfall.io/display/front/3/0/3084f7ac-6b9b-48ad-b39c-3d7b7fb79422.webp?1783934715"
  },
  {
    name: "Black Panther, Wakandan King",
    manaCost: "{G}{W}",
    typeLine: "Legendary Creature — Human Noble Hero",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Human", "Noble", "Hero"],
    oracleText:
      "First strike\nSurvey the Realm — Whenever Black Panther or another creature you control enters, put a +1/+1 counter on target land you control.\nMine Vibranium — {3}: Move all +1/+1 counter from target land you control onto target creature.  If one or more +1/+1 counters are moved this way, you gain that much life and draw a card.",
    colors: ["G", "W"],
    colorIdentity: ["G", "W"],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/a/1/a1b11ef2-2285-40eb-b11c-223c159e3d1f.webp?1783903308"
  },
  {
    name: "Yuriko, the Tiger's Shadow",
    manaCost: "{1}{U}{B}",
    typeLine: "Legendary Creature — Human Ninja",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Human", "Ninja"],
    oracleText:
      "Commander ninjusu {U}{B} ({U}{B}, Return an unblocked attacker you control to hand: Put this card onto the battlefield from your hand or the command zone tapped and attacking.)\nWhenever a Ninja you control deals combat damage to a player, reveal the top card of your library and put that card into your hand.  Each opponent loses life equal to that card's mana value.",
    colors: ["U", "B"],
    colorIdentity: ["U", "B"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/f/e/fe9be3e0-076c-4703-9750-2a6b0a178bc9.webp?1783915606"
  },
  {
    name: "Vision Quest",
    manaCost: "{X}{U}{R}",
    typeLine: "Sorcery",
    supertypes: [],
    cardTypes: ["Sorcery"],
    subtypes: [],
    oracleText:
      "Search your library and/or graveyard for an artifact creature card with mana value X or less and put it onto the battlefield with X additional +1/+1 counters on it.  If X is 4 or greater, it gains haste until end of turn.  If you search your library this way, shuffle.",
    colors: ["U", "R"],
    colorIdentity: ["U", "R"],
    rarity: "Uncommon",
    imageUrl: "https://cards.scryfall.io/display/front/c/0/c01afea6-645d-4d4f-bdaa-90794a628bcd.webp?1783902895"
  },
  {
    name: "Ant-Man, Reformed Rogue",
    manaCost: "{2}{U/G}",
    typeLine: "Legendary Creature — Human Rogue Hero",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Human", "Rogue", "Hero"],
    oracleText:
      "Whenever you cast a green spell, Ant-Man gets +1/0 and gains trample until end of turn.\nWhenever you cast a blue spell, Ant-Man gets -1/0 until end of turn and can't be blocked this turn.\nWhenever Ant-Man deals combat damage to a player, draw a card.",
    colors: ["U", "G"],
    colorIdentity: ["U", "G"],
    rarity: "Uncommon",
    imageUrl: "https://cards.scryfall.io/display/front/7/7/777bc602-3c8d-43a1-812f-2103dc26b635.webp?1783903034"
  },
  {
    name: "Rakdos Augermage",
    manaCost: "{B}{B}{R}",
    typeLine: "Creature — Human Wizard",
    supertypes: [],
    cardTypes: ["Creature"],
    subtypes: ["Human", "Wizard"],
    oracleText:
      "First strike\n{T}: Reveal your hand and discard a card of target opponent's choice.  Then that player reveals his or her hand and discards a card of your choice.  Play this ability only any time you could play a sorcery.",
    colors: ["B", "R"],
    colorIdentity: ["B", "R"],
    rarity: "Uncommon",
    imageUrl: "https://cards.scryfall.io/display/front/b/5/b5507ec6-430e-41bf-8ac8-42a79f11012d.webp?1783943395"
  },
  {
    name: "Hazel of the Rootbloom",
    manaCost: "{2}{B}{G}",
    typeLine: "Legendary Creature — Squirrel Druid",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Squirrle", "Druid"],
    oracleText:
      "{T}, Pay 2 life, Tap X untapped tokens you control: Add X mana in any combination of colors.\nAt the beginning of your end step, create a token thats a copy of target token you control.  If that token is a Squirrel, instead create two tokens that are copies of it.",
    colors: ["B", "G"],
    colorIdentity: ["B", "G"],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/1/2/1269ca79-907e-4932-9e77-a9a5d2929060.webp?1783910738"
  },
  {
    name: "Wolverine, Best There is",
    manaCost: "{1}{R}{G}",
    typeLine: "Legendary Creature — Mutant Berserker Hero",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Mutant", "Berserker", "Hero"],
    oracleText:
      "Unrival Lethality — Double all damage Wolverine would deal.\nAt the beginning of each end step, if Wolverine dealt damage to another creature this turn, put a +1/+1 counter on him.\n{1}{G}: Regenerate Wolverine.",
    colors: ["R", "G"],
    colorIdentity: ["R", "G"],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/9/9/9976c1a8-ef3d-4911-854d-f53394fd709d.webp?1783903304"
  },

  // Three-color

  {
    name: "Esper Charm",
    manaCost: "{W}{U}{B}",
    typeLine: "Instant",
    supertypes: [],
    cardTypes: ["Instant"],
    subtypes: [],
    oracleText:
      "Choose one —\n•Destory target enchantment.\n•Draw two cards.\n•Target player discards two cards.",
    colors: ["W", "U", "B"],
    colorIdentity: ["W", "U", "B"],
    rarity: "Uncommon",
    imageUrl: "https://cards.scryfall.io/display/front/6/2/62add4fe-c19e-40bd-82f6-cb1307a331b1.webp?1783934275"
  },
  {
    name: "Jeskai Ascendancy",
    manaCost: "{U}{R}{W}",
    typeLine: "Enchantment",
    supertypes: [],
    cardTypes: ["Enchantment"],
    subtypes: [],
    oracleText:
      "Whenever you cast a noncreature spell, creatures you control get +1/+1 until end of turn.  Untap those creatures.\nWhenever you cast a noncreature spell, you may draw a card.  If you do, discard a card.",
    colors: ["U", "R", "W"],
    colorIdentity: ["U", "R", "W"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/9/a/9a8399fc-4cba-44c5-888e-2cfc0f6739f6.webp?1783921825"
  },
  {
    name: "Thalen, Grove Arbiter",
    manaCost: "{1}{G}{W}{U}",
    typeLine: "Legendary Creature — Bird",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Bird"],
    oracleText:
      "Whenever one or more Birds you control attack, look at that many cards from the top of your library.  You may put one of them into your hand.  Then put any number of land cards from among them onto the battlefield tapped and the rest into your graveyard.\nLandfall — Whenever a land you control enters, Choco gets +1/0 until end of turn.",
    colors: ["G", "W", "U"],
    colorIdentity: ["G", "W", "U"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/4/0/409c305a-52dc-4538-8e72-efcd568eaf49.webp?1783906575"
  },
  {
    name: "Queen Marchesa",
    manaCost: "{1}{R}{W}{B}",
    typeLine: "Legendary Creature — Human Assassin",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Human", "Assassin"],
    oracleText:
      "Deathtouch, haste\nWhen Queen Marchesa enters the battlefield, you become the monarch.\nAt the beginning of your upkeep, if an opponent is the monarch, create a 1/1 Assassin creature token with deathtouch and haste.",
    colors: ["W", "B", "R"],
    colorIdentity: ["W", "B", "R"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/0/f/0fdae05f-7bdc-45fb-b9b9-e5ec3766f965.webp?1783911896"
  },
  {
    name: "The Necrobloom",
    manaCost: "{1}{W}{B}{G}",
    typeLine: "Legendary Creature — Plant",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Plant"],
    oracleText:
      "Landfall — Whenever a land enter the battlefield under your control, create a 0/1 green Plant creature token.  If you control seven or more lands with different names, create a 2/2 black Zombie creature token instead.\nLand card in your graveyard have dredge 2. (You may return a land card from your graveyard to your hand and mill two card instead of drawing a card.)",
    colors: ["W", "B", "G"],
    colorIdentity: ["W", "B", "G"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/8/f/8fcf68cf-0dac-4b29-90d5-c18c685182e6.webp?1783911249"
  },
  {
    name: "Dogmeat, Every Loyal",
    manaCost: "{R}{G}{W}",
    typeLine: "Legendary Creature — Dog",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Dog"],
    oracleText:
      "When Dogmeat enters the battlefield, mill five cards, then return an Aura or Equipment card from your graveyard to your hand.\nWhenever a creature you control that's enchanted or equipped attacks, create a Junk token. (It's an artifact with '{T}, Sacrifice this artifcat: Exile the top card of your library.  You may play that card this turn.  Activate only as a sorcery.)",
    colors: ["W", "R", "G"],
    colorIdentity: ["W", "R", "G"],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/8/6/86b45e3e-8460-4678-87d1-d74479936c83.webp?1783912422"
  },
  {
    name: "Doctor Doom, King of Latveria",
    manaCost: "{1}{U}{B}{R}",
    typeLine: "Legendary Creature — Human Noble Villain",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Human", "Noble", "Villain"],
    oracleText:
      "Whenever you discard one or more land cards, each opponent loses 2 life.\nAt the beginning of combat on your turn, target Villain you control gains menace until end of turn.  It connives. (Draw a card, then discard a card.  If you discarded a nonland card, put a +1/+1 counter on that creature.)",
    colors: ["U", "B", "R"],
    colorIdentity: ["U", "B", "R"],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/0/9/099ed408-9178-4403-8b2d-479ca3cbda9b.webp?1783903303"
  },
  {
    name: "Muldrotha, the Gravetide",
    manaCost: "{3}{B}{G}{U}",
    typeLine: "Legendary Creature — Elemental Avatar",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Elemental", "Avatar"],
    oracleText:
      "During each of your turns, you may play a land a cast a permanent spell of each permanent type from your graveyard. (If a card has multiple permanent types, choose one as you play it.)",
    colors: ["U", "B", "G"],
    colorIdentity: ["U", "B", "G"],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/7/0/705b4d97-2f50-47f7-9053-d748f4337553.webp?1783904538"
  },
  {
    name: "Miirym, Sentinel Wyrm",
    manaCost: "{3}{G}{B}{R}",
    typeLine: "Legendary Creature — Dragon Spirit",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Dragon", "Spirit"],
    oracleText:
      "Flying, ward {2}\nWhenever another nontoken Dragon enters the battlefield under your control, create a token thats a copy of it, except the token isn't legendary if that Dragon is legendary.",
    colors: ["U", "R", "G"],
    colorIdentity: ["U", "R", "G"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/a/9/a934590b-5c70-4f07-af67-fbe817a99531.webp?1783922689"
  },
  {
    name: "Xira, the Golden Sting",
    manaCost: "{1}{B}{R}{G}",
    typeLine: "Legendary Creature — Insect Assassin",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Insect", "Assassin"],
    oracleText:
      "Flying, haste\nWhenever Xira, the Golden String attacks, put an egg counter on another target creature without an egg counter on it.  When that creature dies, if it has an egg counter, draw a card and create a 1/1 black Insect creature token with flying.",
    colors: ["B", "R", "G"],
    colorIdentity: ["B", "R", "G"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/4/8/48e60dff-8ac0-4e70-a7a8-a177e9e6847b.webp?1783921457"
  },

  // Four-color

  {
    name: "Breya, Etherium Shaper",
    manaCost: "{W}{U}{B}{R}",
    typeLine: "Legendary Artifact Creature — Human",
    supertypes: ["Legendary"],
    cardTypes: ["Artifact","Creature"],
    subtypes: ["Human"],
    oracleText:
      "When Breya, Etherium Shaper enters the battlefield, create two 1/1 blue thopter artifact creature tokens with flying.\n{2}, Sacrifice two artifacts: Choose one —\n•Breya deals 3 damage to target player or planeswalker.\n•Target creature gets -4/-4 until end of turn.\n•You gain 5 life.",
    colors: ["W", "U", "B", "R"],
    colorIdentity: ["W", "U", "B", "R"],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/8/b/8bf3929c-957f-4ea2-a27d-7d53979844af.webp?1783911211"
  },
  {
    name: "Atraxa, Praetors' Voice",
    manaCost: "{G}{W}{U}{B}",
    typeLine: "Legendary Creature — Angel Horror",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Angel", "Horror"],
    oracleText:
      "Flying, vigilance, deathtouch, lifelink\nAt the beginning of your end step, proliferate. (Choose any number of permanents and/or players, then give each another counter of each kind already there.)",
    colors: ["W", "U", "B", "G"],
    colorIdentity: ["W", "U", "B", "G"],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/d/0/d0d33d52-3d28-4635-b985-51e126289259.webp?1783930136"
  },
  {
    name: "The Fantastic Four",
    manaCost: "{R}{G}{W}{U}",
    typeLine: "Legendary Creature — Human Hero",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Human", "Hero"],
    oracleText:
      "When The Fantastic Four enter and whenever you cast a spell with power, toughness, or mana vlue 4, choose one that hasn't been chosen this turn.\n•Create a 0/4 colorless Wall creature token with defender.\n•The Fantastic Four deal 3 damage to each opponent.\n•Put two +1/+1 counters on target creature.\n•Draw a card.",
    colors: ["R", "G", "W", "B"],
    colorIdentity: ["R", "G", "W", "B"],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/d/7/d78cb67a-ed8a-4e76-8506-04c274318b56.webp?1783903031"
  },
  {
    name: "Saskia the Unyielding",
    manaCost: "{B}{R}{G}{W}",
    typeLine: "Legendary Creature — Human Soldier",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Human", "Soldier"],
    oracleText:
      "Vigiliance, haste\nAs Saskia the Unyielding enters the battlefield, choose a player.\nWhenever a creature you control deals combat damage to a player, it deals that much damage to the chosen player.",
    colors: ["B", "R", "G", "W"],
    colorIdentity: ["B", "R", "G", "W"],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/5/b/5b483db6-b614-4af1-820a-42a4ee0c8707.webp?1783937083"
  },
  {
    name: "Glint-Eye Nephilim",
    manaCost: "{U}{B}{R}{G}",
    typeLine: "Creature — Nephilim",
    supertypes: [],
    cardTypes: ["Creature"],
    subtypes: ["Nephilim"],
    oracleText:
      "Whenever Glint-Eye Nephilim deals combat damage to a player, draw that many cards.\n{1}, Discard a card: Glint-Eye Nephilim gets +1/+1 until end of turn.",
    colors: ["U", "B", "R", "G"],
    colorIdentity: ["U", "B", "R", "G"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/a/4/a4f00d2b-d616-455a-bf9b-5bd82b690121.webp?1783921412"
  },

  // Five-color

  {
    name: "Cosmic Spider-Man",
    manaCost: "{W}{U}{B}{R}{G}",
    typeLine: "Legendary Creature — Spider Human Hero",
    supertypes: ["Legendary"],
    cardTypes: ["Creature"],
    subtypes: ["Spider", "Human", "Hero"],
    oracleText:
      "Flying, first strike, trample, lifelink, haste\nAt the beginning of combat on your turn, other Spiders you control gain flying, first strike, trample, lifelink, and haste until end of turn.",
    colors: ["W", "U", "B", "R", "G"],
    colorIdentity: ["W", "U", "B", "R", "G"],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/f/8/f82f4013-7308-4917-9042-19a5909f2134.webp?1783905318"
  },

  // Planeswalkers and battles

  {
    name: "Tezzeret, Cruel Captain",
    manaCost: "{3}",
    typeLine: "Legendary Planeswalker — Tezzeret",
    supertypes: ["Legendary"],
    cardTypes: ["Planeswalker"],
    subtypes: ["Tezzeret"],
    oracleText:
      "Whenever an artifact you control enters, put a loyalty counter on Tezzeret.\n0: Untap target artifact or creature.  If it's an artifact creature, put a +1/+1 counter on it.\n-3: Search your library for an artifact card with mana value 1 or less, reveal it, put it into your hand, then shuffle.\n-7: You get an emblem with 'At the beginning of combat on your turn, put three +1/+1 counters on target artifact you control.  If it's not a creature, it becomes a 0/0 Robot artifact creature.",
    colors: [],
    colorIdentity: [],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/0/2/02e8e540-8aa3-4e6a-9a11-c3949cab5f0f.webp?1783906001"
  },
  {
    name: "Tezzeret, Agent of Bolas",
    manaCost: "{2}{U}{B}",
    typeLine: "Planeswalker — Tezzeret",
    supertypes: [],
    cardTypes: ["Planeswalker"],
    subtypes: ["Tezzeret"],
    oracleText:
      "+1: Look at the top five cards of your library.  You may reveal an artifact card from among them and put it into your hand.  Put the rest on the bottom of your library in any order.\n-1: Target artifact becomes a 5/5 artifact creature.\n-4: Target player loses X life and you gain X life, where X is twice the number of artifacts you control.",
    colors: ["U", "B"],
    colorIdentity: ["U", "B"],
    rarity: "Common",
    imageUrl: "https://cards.scryfall.io/display/front/0/f/0f3c8470-1cc8-4383-8782-c022867d46e8.webp?1783941371"
  },
  {
    name: "Chandra, Acolyte of Flame",
    manaCost: "{1}{R}{R}",
    typeLine: "Legendary Planeswalker — Chandra",
    supertypes: ["Legendary"],
    cardTypes: ["Planeswalker"],
    subtypes: ["Chandra"],
    oracleText:
      "0: Put a loyalty counter on each red planeswalker you control.\n0: create two 1/1 Elemental creature tokens.  They gain haste.  Sacrifice them at the beginning of the next end step.\n2: You may cast target instant or sorcery card with converted mana cost 3 or less from your graveyard.  If that card would be put into your graveyard this turn, exile it instead.",
    colors: ["R"],
    colorIdentity: ["R"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/2/c/2cabfcfe-012e-4cab-bba2-24052eac0946.webp?1783932984"
  },
  {
    name: "Kaito, Bane of Nightmares",
    manaCost: "{2}{U}{B}",
    typeLine: "Legendary Planeswalker — Kaito",
    supertypes: ["Legendary"],
    cardTypes: ["Planewalker"],
    subtypes: ["Kaito"],
    oracleText:
      "Ninjutsu {1}{U}{B} ({1}{U}{B}, Return an unblocked attacker you control to hand:  Put this card onto the battlefield from your hand tapped and attacking.)\nDuring your turn, as long as Kaito has one or more loyalty counters on him, he's a 3/4 Ninja creature and has hexproof.\n+1: You get an emblem with 'Ninjas you control get +1/+1.'\n0: Surveil 2.  Then draw a card for each opponent who lost life this turn.\n-2: Tap target creature.  Put two stun counters in it.",
    colors: ["U", "B"],
    colorIdentity: ["U", "B"],
    rarity: "Mythic",
    imageUrl: "https://cards.scryfall.io/display/front/5/5/55a14f30-4ff9-4472-90a6-c3139f1c18e5.webp?1783909443"
  },

  // Additional card-type tests

  {
    name: "Lightning Greaves",
    manaCost: "{2}",
    typeLine: "Artifact — Equipment",
    supertypes: [],
    cardTypes: ["Artifact"],
    subtypes: ["Equipment"],
    oracleText: "Equipped creature has haste and shroud. (It can't be the target of spells or abilities.)\nEquip {0}",
    colors: [],
    colorIdentity: [],
    rarity: "Uncommon",
    imageUrl: "https://cards.scryfall.io/display/front/b/6/b61634ae-05be-4b56-8ebb-9d4ade902e42.webp?1783903217"
  },
  {
    name: "Blade of Selves",
    manaCost: "{2}",
    typeLine: "Artifact — Equipment",
    supertypes: [],
    cardTypes: ["Artifact"],
    subtypes: ["Equipment"],
    oracleText:
      "Equipped creature has myriad. (Whenever it attacks, for each opponent other than defending player, you may create a token copy that's tapped and attacking that player or a planeswalker they control.  Exile the tokens at the end of combat.)\nEquip {4}",
    colors: [],
    colorIdentity: [],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/d/0/d0ca6a34-724f-47bb-b12d-c4998ffc3bf7.webp?1783907016"
  },
  {
    name: "The Irencrag",
    manaCost: "{2}",
    typeLine: "Legendary Artifact",
    supertypes: ["Legendary"],
    cardTypes: ["Artifact"],
    subtypes: [],
    oracleText: "{T}: Add {C}\nWhenever a legendary creature enters the battlefield under your control, you may have The Irencrag become a legendary Equipment artifact named Everflame, Heroes' Legacy.  If you do, it gains equip {3} and 'Equipped creature gets +3/+3' and loses all other abilities.",
    colors: [],
    colorIdentity: [],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/8/0/8051c5ec-54a6-45a8-8945-fb93c5feaa39.webp?1783915058"
  },
  {
    name: "Brigid's Command",
    manaCost: "{1}{G}{W}",
    typeLine: "Kindred Sorcery — Kithkin",
    supertypes: ["Kindred"],
    cardTypes: ["Sorcery"],
    subtypes: ["Kithkin"],
    oracleText:
      "Choose two—\n•Create a token that's a copy of target Kithkin you control.\n•Target player creates a 1/1 green and white Kithkin creature token.\n•Target creature you control gets +3/+3 until end of turn.\n•Target creature you control fights target creature an opponent controls.",
    colors: ["G", "W"],
    colorIdentity: ["G", "W"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/c/f/cf034777-3da7-4d5c-9213-5e9d235c315a.webp?1783904415"
  },
  {
    name: "Plains",
    manaCost: "",
    typeLine: "Basic Land — Plains",
    supertypes: ["Basic"],
    cardTypes: ["Land"],
    subtypes: ["Plains"],
    oracleText: "",
    colors: [],
    colorIdentity: [],
    rarity: "Common",
    imageUrl: "https://cards.scryfall.io/display/front/5/f/5f9b6584-ad27-410d-b6f1-c25c91630aea.webp?1783902990"
  },
  {
    name: "Island",
    manaCost: "",
    typeLine: "Basic Land — Island",
    supertypes: ["Basic"],
    cardTypes: ["Land"],
    subtypes: ["Island"],
    oracleText: "",
    colors: [],
    colorIdentity: [],
    rarity: "Common",
    imageUrl: "https://cards.scryfall.io/display/front/5/a/5a74175b-2418-4226-8435-1490532e644f.webp?1783902875"
  },
  {
    name: "Swamp",
    manaCost: "",
    typeLine: "Basic Land — Swamp",
    supertypes: ["Basic"],
    cardTypes: ["Land"],
    subtypes: ["Swamp"],
    oracleText: "",
    colors: [],
    colorIdentity: [],
    rarity: "Common",
    imageUrl: "https://cards.scryfall.io/display/front/7/4/74414c62-4b68-4e1b-9241-feff3231b9ee.webp?1783902875"
  },
  {
    name: "Mountain",
    manaCost: "",
    typeLine: "Basic Land — Mountain",
    supertypes: ["Basic"],
    cardTypes: ["Land"],
    subtypes: ["Mountain"],
    oracleText: "",
    colors: [],
    colorIdentity: [],
    rarity: "Common",
    imageUrl: "https://cards.scryfall.io/display/front/4/2/426b0211-3d5d-4e53-bcf6-21823c655ffd.webp?1783902988"
  },
  {
    name: "Forest",
    manaCost: "",
    typeLine: "Basic Land — Forest",
    supertypes: ["Basic"],
    cardTypes: ["Land"],
    subtypes: ["Forest"],
    oracleText: "",
    colors: [],
    colorIdentity: [],
    rarity: "Common",
    imageUrl: "https://cards.scryfall.io/display/front/2/2/22463284-2478-4b1e-9a37-6dd2383266cf.webp?1783902875"
  },
  

  // Lands with colored identities

  {
    name: "Stark Industries",
    manaCost: "",
    typeLine: "Land",
    supertypes: [],
    cardTypes: ["Land"],
    subtypes: [],
    oracleText:
      "This land enters tapped.\nWhen this land enters, you gain 1 life\n{T}: Add {U} or {R}.",
    colors: [],
    colorIdentity: ["U", "R"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/f/e/fe3609d8-71a2-49d9-a3fa-25e0906a1a0e.webp?1783902882"
  },
  {
    name: "Blazemire Verge",
    manaCost: "",
    typeLine: "Land",
    supertypes: [],
    cardTypes: ["Land"],
    subtypes: [],
    oracleText: "{T}: Add {B}.\n{T}: Add {R}. Activate only if you control a Swamp or a Mountain.",
    colors: [],
    colorIdentity: ["B", "R"],
    rarity: "Rare",
    imageUrl: "https://cards.scryfall.io/display/front/d/1/d151c8e2-d715-470d-868a-f45191db9fa0.webp?1783909431"
  },
];