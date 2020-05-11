const Fabulous = {
  lady: '',

  warned: [],

  Deck: require('./Deck'),

  maxInsp: 999,

  inspired: {},

  canAskInspiration (person) {
    const persons = Object.keys(this.inspired)
    if (persons.includes(person)) {
      return this.inspired[person] < this.maxInsp
    } else {
      return true
    }
  },

  updateInspired (person) {
    if (this.inspired[person]) {
      this.inspired[person] += 1
    } else {
      this.inspired[person] = 1
    }
  },

  draw () {
    if (!this.Deck.length) {
      this.Deck = require('./Deck')
    }
    const i = Math.floor(Math.random() * this.Deck.length)
    const card = this.Deck.splice(i, 1)[0]
    return card
  },

  hasWarning (person) {
    return this.warned.includes(person)
  },

  warn (person) {
    this.warned.push(person)
  },

  reset () {
    this.lady = ''
    this.warned = []
    this.inspired = {}
  }
}

module.exports = Fabulous
