const { ActivityHandler, ActivityTypes } = require('botbuilder');
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
        const card = Fabulous.draw()
        const reply = { type: ActivityTypes.Message }
        reply.text = `**${name}**, la mia parola per te è **${card.name}**`
        reply.attachments = [await this.getImg(card)]
        await context.sendActivity(reply)
      }

      else if (msg[0] === '!adunata') {
          const name = context.activity.from.name
          Fabulous.lady = name
          await context.sendActivity(`Attenzione inutili servitor*, Sua Sfavillanza, la **Favolosah Signora ${name}**, richiede la vostra presenza!`)
      }

      else if (msg[0] === '!occhiataccia' && context.activity.from.name === Fabulous.lady) {
          const person = msg[msg.length - 1]
          if (Fabulous.hasWarning(person)) {
              Fabulous.reset()
              await context.sendActivity(`Uh oh, ${person} aveva già un'occhiataccia... **La colpa è tutta sua!**`)
          } else {
              Fabulous.warn(person)
              await context.sendActivity(`Attenzione **${person}**, Sua Sfavillanza ${Fabulous.lady} sospetta di te...`)
          }
      }

      else if (msg[0] === '!stato') {
          const warned = Fabulous.warned.map(person => {
              return '**' + person + '**'
          })
          await context.sendActivity(`Le persone sospettate sono ${warned.join(', ')}.`)
      }

      else if (msg[0] === '!aiuto') {
          // tanks for this markdown
          await context.sendActivity('I comandi disponibili sono:**!adunata**: comincia un nuovo turno. Chi dà il comando interpreta la Favolosah Signora;\n **!ispirami**: intercede presso la Dea Arcobaleno per offrire uno spunto da usare per la propria scusa;\n **!occhiataccia [per giocatore]**: assegna un\'occhiataccia all* giocator* indicat*. Il round termina quando un* giocator* prende la seconda occhiataccia;\n **!stato**: mostra quali giocatori hanno già un\'occhiataccia;\n **!aiuto**: mostra questo messaggio')
          await context.sendActivity( //TODO: Splittare le stringhe, debuggare !stato, aggiungere un counter per le ispirazioni
      }
      await next()
    })
  }

    async getImg (card, context) {
        const imageData = fs.readFileSync(path.join(__dirname, card.src));
        const base64Image = Buffer.from(imageData).toString('base64');
        return {
            name: card.name + '.jpeg',
            contentType: 'image/jpeg',
            contentUrl: `data:image/jpeg;base64,${ base64Image }`
        };
    }
}

module.exports.Bot = Bot
