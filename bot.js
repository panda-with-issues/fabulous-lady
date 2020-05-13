/**
 * This bot allow to play "Sì, Favolosah Signora" on Skype.
 * "Sì, Favolosah Signora" is a simplified, lbtqia*-oriented version of the famous game "Aye, Dark Overlord" designed for italian speakers.
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
 
const { ActivityHandler, ActivityTypes } = require('botbuilder')
const fs = require('fs')
const path = require('path')
const Fabulous = require('./Fabulous')

class Bot extends ActivityHandler {
  constructor () {
    super()
    this.onMessage(async (context, next) => {
      const msg = context.activity.text.split(' ')
      if (msg[0] === '!ispirami') {
        const name = context.activity.from.name
        if (Fabulous.canAskInspiration(name)) {
          Fabulous.updateInspired(name)
          const card = Fabulous.draw()
          const reply = { type: ActivityTypes.Message }
          reply.text = `**${name}**, la mia parola per te è **${card.name}**`
          reply.attachments = [await this.getImg(card)]
          await context.sendActivity(reply)
        } else {
          await context.sendActivity('Sashé, la Dea Arcobaleno sembra non rispondere alle tue preghiere :(')
        }
      }

      else if (msg[0] === '!adunata') {
        const name = context.activity.from.name
        Fabulous.lady = name
        await context.sendActivity(`Attenzione inutili servitor*, Sua Sfavillanza, la **Favolosah Signora ${name}**, richiede la vostra presenza!`)
      }

      else if (msg[0] === '!occhiataccia' && context.activity.from.name === Fabulous.lady) {
        const person = msg[msg.length - 1]
        if (person !== '!occhiataccia' && person !== '') {
          if (!Fabulous.hasWarning(person)) {
            Fabulous.warn(person)
            await context.sendActivity(`Attenzione **${person}**, Sua Sfavillanza ${Fabulous.lady} sospetta di te...`)
          } else if (Fabulous.warned[person] < Fabulous.maxWarns - 1) {
            Fabulous.warn(person)
            await context.sendActivity(`Uh oh, **${person}**, la Favolosah Signora si sta innervosendo! Hai già **${Fabulous.warned[person]}** occhiatacce`)
          } else {
            Fabulous.reset()
            await context.sendActivity(`Basta, è charo a tutti che **la colpa è tutta e sola di ${person}!**`)
          }
        }
      }

      else if (msg[0] === '!reset') {
        Fabulous.fullReset()
        await context.sendActivity('Tutti i parametri riportati allo stato iniziale')
      }

      else if (msg[0] === '!stato') {
        const warnedArr = []
        for (const person in Fabulous.warned) {
          const num = Fabulous.warned[person]
          const str = `**${person}** con **${num}** ${num === 1 ? 'occhiataccia' : 'occhiatacce'}`
          warnedArr.push(str)
        }
        const warned = warnedArr.join(', ')
        let reply
        switch (warnedArr.length) {
          case 0:
            reply = 'Non ci sono persone sospettate.'
            break
          case 1:
            reply = `L'unica persona sospettata è ${warned}.`
            break
          default:
            reply = `Le persone sospettate sono:  
            ${warned}.`
        }

        await context.sendActivity(reply)
      }

      else if (msg[0] === '!aiuto') {
        await context.sendActivity(`I comandi disponibili sono:  
        **!adunata**: comincia un nuovo turno. Chi dà il comando interpreta la Favolosah Signora;  
        **!ispirami**: intercede presso la Dea Arcobaleno per offrire uno spunto da usare per la propria scusa;  
        **!occhiataccia [...giocatore]**: assegna un'occhiataccia all* giocator* indicat*. Il round termina quando un* giocator* prende la seconda occhiataccia;  
        **!reset**: riporta tutti i valori allo stato iniziale e interrompe qualsiasi attività in atto  
        **!setMaxInsp [...n]**: imposta a num il massimo numero di ispirazioni che un giocatore può richiedere;  
        **!setMaxWarns [...n]** imposta a num il numero massimo di occhiatacce che un giocatore può ricevere. All'n-esima occhiataccia, la partita finisce  
        **!stato**: mostra quali giocatori hanno già un'occhiataccia;  
        **!aiuto**: mostra questo messaggio  
        Per maggiori informazioni o per contribuire a FavolosahSignora, visita il repo su GitHub: https://github.com/panda-with-issues/fabulous-lady`)
      }

      else if (msg[0] === '!setMaxInsp') { // default to 2
        const num = Number.parseInt(msg[msg.length - 1])
        if (!isNaN(num)) {
          Fabulous.maxInsp = num
          await context.sendActivity(`Ora si può chiedere Ispirazione massimo ${num} volte`)
        }
      }

      else if (msg[0] === '!setMaxWarns') { // default to 2
        const num = Number.parseInt(msg[msg.length - 1])
        if (!isNaN(num)) {
          Fabulous.maxWarns = num
          await context.sendActivity(`Ora si possono ricevere massimo ${num} occhiatacce`)
        }
      }

      await next()
    })
  }

  async getImg (card, context) {
    // This is boilerplate, just changed here an there things to fit my project
    const imageData = fs.readFileSync(path.join(__dirname, card.src))
    const base64Image = Buffer.from(imageData).toString('base64')
    return {
      name: card.name + '.jpeg',
      contentType: 'image/jpeg',
      contentUrl: `data:image/jpeg;base64,${base64Image}`
    }
  }
}

module.exports.Bot = Bot
