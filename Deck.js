class Deck {
  constructor () {
    this.deck = [
      {
        name: 'Unicorno',
        src: './src/unicorno.jpg'
      }
    ]
    this.discards = []
  }

  draw () {
    if (!this.deck.length) {
      this.deck = this.discards
      this.discards = []
    }
    const i = Math.floor(Math.random() * this.deck.length)
    const card = this.deck.splice(i, 1)
    this.discards.push(card)
    return card
  }
}

module.exports = Deck
