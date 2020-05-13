const Deck = require('./Deck')

const Fabulous = {
  lady: '',

  warned: [],

  Deck: Deck.slice(),

  maxInsp: 2,

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
      this.Deck = Deck.slice()
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
  },

  fullReset () {
    this.reset()
    this.Deck = Deck.slice()
    this.maxInsp = 2
  }
}

module.exports = Fabulous
