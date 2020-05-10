const Deck = {
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
    console.log(this.deck)
    console.log(this.discards)
    return card
  }
}

module.exports = Deck
