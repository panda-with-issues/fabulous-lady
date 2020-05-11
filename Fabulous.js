const Fabulous = {
  lady: '',

  warned: [],

  deck: [
    {
      name: 'unicorno',
      src: './src/unicorno.jpeg'
    }
  ],
  discards: [],

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
    if (!this.deck.length) {
      this.deck = this.discards
      this.discards = []
    }
    const i = Math.floor(Math.random() * this.deck.length)
    const card = this.deck.splice(i, 1)[0]
    this.discards.push(card)
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
