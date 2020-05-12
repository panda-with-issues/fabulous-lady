/**
 * Imgs must have the same name of card name because of the attachement method I used in Bot.js
 * The largest dimension of the image must be <= 600px
 */

const Deck = [
  {
    name: 'abuso d\'ufficio del rettorato',
    src: './src/abuso d\'ufficio del rettorato.jpeg'
  },
  {
    name: 'Achille Lauro',
    src: './src/Achille Lauro.jpeg'
  },
  {
    name: 'Animal Crossing',
    src: './src/Animal Crossing.jpeg'
  },
  {
    name: 'birra',
    src: './src/birra.jpeg'
  },
  {
    name: 'botox',
    src: './src/botox.jpeg'
  },
  {
    name: 'bretelle',
    src: './src/bretelle.jpeg'
  },
  {
    name: 'calciatrice',
    src: './src/calciatrice.jpeg'
  },
  {
    name: 'camionista', // donna
    src: './src/camionista.jpeg'
  },
  {
    name: 'campo di cactus',
    src: './src/campo di cactus.jpeg'
  },
  {
    name: 'capelli blu',
    src: './src/capelli blu.jpeg'
  },
  {
    name: 'caschetto della Carrà',
    src: './src/caschetto della Carrà.jpeg'
  },
  {
    name: 'ceretta',
    src: './src/ceretta.jpeg'
  },
  {
    name: 'CFU',
    src: './src/CFU.jpeg'
  },
  {
    name: 'Charlie\'s Angels',
    src: './src/Charlie\'s Angels.jpeg'
  },
  {
    name: 'Cher',
    src: './src/Cher.jpeg'
  },
  {
    name: 'ciseteropatriarcato',
    src: './src/ciseteropatriarcato.jpeg'
  },
  {
    name: 'collezione di sex toys',
    src: './src/collezione di sex toys.jpeg'
  },
  {
    name: 'comune eco-lesbo',
    src: './src/comune eco-lesbo.jpeg'
  },
  {
    name: 'comunità ursina',
    src: './src/comunità ursina.jpeg'
  },
  {
    name: 'coppetta mestruale',
    src: './src/coppetta mestruale.jpeg'
  },
  {
    name: 'cosmopolitan',
    src: './src/cosmopolitan.jpeg'
  },
  {
    name: 'Costantino Della Gherardesca',
    src: './src/Costantino Della Gherardesca.jpeg'
  },
  {
    name: 'cotta etero',
    src: './src/cotta etero.jpeg'
  },
  {
    name: 'cross-dressing',
    src: './src/cross-dressing.jpeg'
  },
  {
    name: 'cruising',
    src: './src/cruising.jpeg'
  },
  {
    name: 'De Luca',
    src: './src/De Luca.jpeg'
  },
  {
    name: 'discoteca',
    src: './src/discoteca.jpeg'
  },
  {
    name: 'dominatrice scatenata',
    src: './src/dominatrice scatenata.jpeg'
  },
  {
    name: 'drama queen',
    src: './src/drama queen.jpeg'
  },
  {
    name: 'Elettra Lamborghini',
    src: './src/Elettra Lamborghini.jpeg'
  },
  {
    name: 'Elsa',
    src: './src/Elsa.jpeg'
  },
  {
    name: 'ennesima diretta instagram',
    src: './src/ennesima diretta instagram.jpeg'
  },
  {
    name: 'etero curioso',
    src: './src/etero curioso.jpeg'
  },
  {
    name: 'flash mob',
    src: './src/flash mob.jpeg'
  },
  {
    name: 'forbici',
    src: './src/forbici.jpeg'
  },
  {
    name: 'furrycon',
    src: './src/furrycon.jpeg'
  },
  {
    name: 'gatti',
    src: './src/gatti.jpeg'
  },
  {
    name: 'gay radar',
    src: './src/gay radar.jpeg'
  },
  {
    name: 'genitore 1 e genitore 2',
    src: './src/genitore 1 e genitore 2.jpeg'
  },
  {
    name: 'il genere del giorno',
    src: './src/il genere del giorno.jpeg'
  },
  {
    name: 'Il Papillon di Ellen Degeneres',
    src: './src/Il Papillon di Ellen Degeneres.jpeg'
  },
  {
    name: 'Immanuel Casto e Romina Falconi',
    src: './src/Immanuel Casto e Romina Falconi.jpeg'
  },
  {
    name: 'Iris',
    src: './src/Iris.jpeg'
  },
  {
    name: 'IVA sugli assorbenti',
    src: './src/IVA sugli assorbenti.jpeg'
  },
  {
    name: 'Lady Gaga',
    src: './src/Lady Gaga.jpeg'
  },
  {
    name: 'Lilli Gruber',
    src: './src/Lilli Gruber.jpeg'
  },
  {
    name: 'Little Fountains',
    src: './src/Little Fountains.jpeg'
  },
  {
    name: 'lubrificante',
    src: './src/lubrificante.jpeg'
  },
  {
    name: 'Madonna',
    src: './src/Madonna.jpeg'
  },
  {
    name: 'manette',
    src: './src/manette.jpeg'
  },
  {
    name: 'manifestazione transfemminista',
    src: './src/manifestazione transfemminista.jpeg'
  },
  {
    name: 'mbeb', // maschio bianco etero basic
    src: './src/mbeb.jpeg'
  },
  {
    name: 'Milan Fashion Week',
    src: './src/Milan Fashion Week.jpeg'
  },
  {
    name: 'moglie da prigione',
    src: './src/moglie da prigione.jpeg'
  },
  {
    name: 'MYSS KETA',
    src: './src/MYSS KETA.jpeg'
  },
  {
    name: 'Netflix',
    src: './src/Netflix.jpeg'
  },
  {
    name: 'orgia al campo scout',
    src: './src/orgia al campo scout.jpeg'
  },
  {
    name: 'oroscopo',
    src: './src/oroscopo.jpeg'
  },
  {
    name: 'Palazzo di Toppo-Wassermann',
    src: './src/Palazzo di Toppo-Wassermann.jpeg'
  },
  {
    name: 'panda',
    src: './src/panda.jpeg'
  },
  {
    name: 'parco del Cormor',
    src: './src/parco del Cormor.jpeg'
  },
  {
    name: 'Paris Hilton',
    src: './src/Paris Hilton.jpeg'
  },
  {
    name: 'parrucchiere',
    src: './src/parrucchiere.jpeg'
  },
  {
    name: 'popper',
    src: './src/popper.jpeg'
  },
  {
    name: 'power rangers',
    src: './src/power rangers.jpeg'
  },
  {
    name: 'pride',
    src: './src/pride.jpeg'
  },
  {
    name: 'profilo TERF',
    src: './src/profilo TERF.jpeg'
  },
  {
    name: 'prove sull\'esistenza della bisessualità',
    src: './src/prove sull\'esistenza della bisessualità.jpeg'
  },
  {
    name: 'rave party',
    src: './src/rave party.jpeg'
  },
  {
    name: 'reading',
    src: './src/reading.jpeg'
  },
  {
    name: 'regina Elisabetta',
    src: './src/regina Elisabetta.jpeg'
  },
  {
    name: 'rettore',
    src: './src/rettore.jpeg'
  },
  {
    name: 'Rocky Horror Picture Show',
    src: './src/Rocky Horror Picture Show.jpeg'
  },
  {
    name: 'RuPaul\'s Drag Race',
    src: './src/RuPaul\'s Drag Race.jpeg'
  },
  {
    name: 'Selvaggia Lucarelli',
    src: './src/Selvaggia Lucarelli.jpeg'
  },
  {
    name: 'seminarista sfranta',
    src: './src/seminarista sfranta.jpeg'
  },
  {
    name: 'suora ardente',
    src: './src/suora ardente.jpeg'
  },
  {
    name: 'sushi',
    src: './src/sushi.jpeg'
  },
  {
    name: 'tiranna di Iris',
    src: './src/tiranna di Iris.jpeg'
  },
  {
    name: 'travestimento fatto in casa',
    src: './src/travestimento fatto in casa.jpeg'
  },
  {
    name: 'tutorial di Clio Makeup',
    src: './src/tutorial di Clio Makeup.jpeg'
  },
  {
    name: 'unghie lunghe',
    src: './src/unghie lunghe.jpeg'
  },
  {
    name: 'unicorno',
    src: './src/unicorno.jpeg'
  },
  {
    name: 'Valeria Marini',
    src: './src/Valeria Marini.jpeg'
  },
  {
    name: 'vestiti arancioni',
    src: './src/vestiti arancioni.jpeg'
  },
  {
    name: 'volontariato al banchetto',
    src: './src/volontariato al banchetto.jpeg'
  },
  {
    name: 'zia bigotta',
    src: './src/zia bigotta.jpeg'
  }
]

console.log(Deck.length)

module.exports = Deck
