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
  }
}

module.exports = Fabulous
