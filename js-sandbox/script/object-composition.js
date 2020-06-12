// https://medium.com/code-monkey/object-composition-in-javascript-2f9b9077b5e6

const canCast = (state) => ({
  cast: (spell) => {
    console.log(`${state.name} casts ${spell}!`);
    state.mana--;
  }
})

const canFight = (state) => ({
  fight: () => {
    console.log(`${state.name} slashes at the foe!`);
    state.stamina--;
  }
})

const fighter = (name) => {
  let state = {
    name,
    health: 100,
    stamina: 100
  }

  return Object.assign(state, canFight(state));
}

const mage = (name) => {
  let state = {
    name,
    health: 100,
    mana: 100
  }

  return Object.assign(state, canCast(state));
}

scorcher = mage('Scorcher')
scorcher.cast('fireball');    // Scorcher casts fireball!
console.log(scorcher.mana)    // 99

slasher = fighter('Slasher')
slasher.fight();              // Slasher slashes at the foe!
console.log(slasher.stamina)  // 99


const paladin = (name) => {
  let state = {
    name,
    health: 100,
    mana: 100,
    stamina: 100
  }

  return Object.assign(state, canCast(state), canFight(state));
}

roland = paladin('Roland');
roland.fight();               // Roland slashes at the foe!
roland.cast('Holy Light');    // Roland casts Holy Light!
console.log('Roland mana is', roland.mana)