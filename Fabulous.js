/**
 * This module is required to bot.js
 *
 * Copyright (C) 2020 Yuuki Gaudiuso
 * gaudiuso.y@gmail.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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
