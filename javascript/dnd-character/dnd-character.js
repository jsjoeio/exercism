export function abilityModifier(n) {
  return n < 3
    ? throw Error ('Ability scores must be at least 3')
    : n > 18
      ? throw Error ('Ability scores can be at most 18')
      : Math.floor((n - 10) / 2)
}

export class Character {
  constructor() {
    this.strength = Character.rollAbility()
    this.dexterity = Character.rollAbility()
    this.constitution = Character.rollAbility()
    this.intelligence = Character.rollAbility()
    this.wisdom = Character.rollAbility()
    this.charisma = Character.rollAbility()
    this.hitpoints = 10 + abilityModifier(this.constitution)
  }

  static rollAbility() {
    let diceRolls = []
    for (let i = 0; i < 4;  i++) {
      const randomNum = Math.floor(Math.random() * (Math.floor(6) - Math.ceil(1) + 1)) + Math.ceil(1)
      diceRolls.push(randomNum)
    }
    const lowestNum = Math.min(...diceRolls);
    return diceRolls.filter(n => n !== lowestNum).reduce((accum, currentValue) => accum += currentValue)
  }
}