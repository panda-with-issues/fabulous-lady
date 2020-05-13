# Fabulous-Lady

Fabolous lady is a bot with functionality that allow to play &#34;Sì, Favolosah Signora&#34; on Skype. "Sì, Favolosah Signora" is a simplified, LGBTQIA*-oriented version of the famous game "Aye, Dark Overlord".

Fabulous-Lady has been created for an event arranged by Associazione Studentesca Universitaria Iris, an LGBTQIA+ students association of University of Udine, Italy. Thus, bot's interface is entirely in Italian, even if I decided to code and write documentation in English for accessibility purpose.

The bot **does not keep tracks of the chats** in which it's added, nor collects data of any type. If this should happen, it wasn't my code faults and the reason is to be searched in Microsoft Azure architecture. Please let me know if you suspect that any data is gathered by the bot.

This bot has been created using [Bot Framework](https://dev.botframework.com).

## Use of Fabolous-Lady

To add Fabulous-Lady to you contacts list, use this [invitation link] (https://join.skype.com/bot/10775a5a-351e-43df-b7eb-166ad67e8556)

Fabolous-Lady will respond only to a restricted, small set of commands and ignore every message that isn't included in that set. Every command must start with `@Favolosah Signora`. If a message sent by user starts with `@Favolosah Signora` but doesn't match with the instructions set, it is simply ignored.

Whenever a task is completed successfully, Fabulous-Lady will send back a message. If no answer is returned, surely the task failed. This could only happen if the command is misspelled or if the arguments provided are invalid.

Please note that Fabulous-Lady intentionally doesn't come with robust input validation, so if you enter an incorrect argument (e.g. a wrong player name) but in a possible valid format, the bot will still accomplish its task. In cases like the insertion of a wrong player name, there is no going back. Hopefully, this shouldn't be game-breaking. Learn more in commands spec.

### List of commands

When a command is followed by brackets with dots, it means that such command accepts an argument. When providing an argument, an arbitrary set of words can follow the command, only the last word will be kept in consideration for instructions purpose. That word must be of the right type and contain the specific information needed to accomplish the task.
> E.g: `@Favolosah Signora occhiataccia a quel maledetto di Matteo` will be interpreted as `@Favolosah Signora occhiataccia Matteo`.

Fabulous-Lady will responde to the following commands:

- `adunata` (translates to *gather*)
  
  Begin a new round. The person who gave the command will be the Fabolous Lady for that turn and will be the only user able to use the `occhiataccia` command.

- `ispirami`: (translates to *inspire me*)

  Send back a word and a picture explanatory of the word. This word must be used from user to tell their story. This command can be used a fixed, limited number of times (default to 3). If a user try to call `ispirami` more than allowed, a failure message will be sent back instead.
  > The max number of times `ispirami` can be called is set by the value of `Fabulous.maxInsp` in `Fabulous.js` module.
  > This value can be changed in-game, without modifying the source code, using the `setMaxInsp` command. Learn more in the command spec.

- `occhiataccia [...player]`: (translates to *withering look*)

  Give to the specified player a withering look. When the same player recieves the second withering look, that player lose, the round ends and game data stored by bot are reset. This reset doesn't includes `Fabulous.Deck`, `maxInsp`, and `maxWarns`.
  >**Attention**: this command can only be used by the user marked as Fabulous Lady -- the one who most recently gave `adunata`. If every other user try to call `occhiataccia`, it will have no effect and will be ignored.

  > Mind that Lady-Fabulous doesn't check player names against chat partecipants nor perform any validation check on the input. Thus everything will be a valid player name. Please double-check the name that you're giving and be consistent in the whole round: *John* and *Jhon* will be two different players with different scores!  
  >The max number of withering looks a player can recieve before losing is set by `Fabulous.maxWarns` in `Fabulous.js` module. 
  >This value can be changed in-game without modifying the source code, using the `setMaxWarns` command. Learn more in the command spec.

- `reset`

  Reset every game data to the initial state and interrupt the round. If changed, `maxInsp` and `maxWarns` will be preserved;

- `setMaxInsp [...n]`

  Set the maximum time a user can use the `ispirami` command. It defaults to 3.
  This command can be given in every moment. If called during a game, it will not end the round.
  > The word passed as argument (*n*) must convert to an *integer*. If an invalid word is passed, Fabulous-Lady will ignore the command.  
  > Values set with this command are persistent during resets and rounds.

- `setMaxWarns [...n]`
  Set the number of withering looks at which a player lose. When a player receives the n-th withering look, they lose and round ends. It defaults to 2.
  > The word passed as argument (*n*) must convert to an *integer*. If an invalid word is passed, Fabulous-Lady will ignore the command.  
  > Values set with this command are persistent during resets and rounds.

- `stato` (translates to *status*)

  Shows the names of players who have received a withering look and their scores.

- `aiuto` (translates to *help*)

  Show a list of commands with a brief description.

## Maintenance

Because of the very specific use intended for this bot, I consider it complete and won't maintain it. If you find any bug, please report it and, according to my spare time, I'll try to fix it. If you like this project and want to expand it, contact me: I'll be glad to hear you and start something together.

If anyone will ever want to translate the bot in other languages, feel free to contact me: I'll give you all my support.

## License

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation version 3 of the License, or any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.

## Development notes

### Prerequisites

- [Node.js](https://nodejs.org) version 10.14.1 or higher

    ```bash
    # determine node version
    node --version
    ```

### To run the bot

- Install modules

    ```bash
    npm install
    ```

- Start the bot

    ```bash
    npm start
    ```

### Testing the bot using Bot Framework Emulator

[Bot Framework Emulator](https://github.com/microsoft/botframework-emulator) is a desktop application that allows bot developers to test and debug their bots on localhost or running remotely through a tunnel.

- Install the Bot Framework Emulator version 4.3.0 or greater from [here](https://github.com/Microsoft/BotFramework-Emulator/releases)

#### Connect to the bot using Bot Framework Emulator

- Launch Bot Framework Emulator
- File -> Open Bot
- Enter a Bot URL of `http://localhost:3978/api/messages`

### Deploy the bot to Azure

To learn more about deploying a bot to Azure, see [Deploy your bot to Azure](https://aka.ms/azuredeployment) for a complete list of deployment instructions.


### Further reading

- [Bot Framework Documentation](https://docs.botframework.com)
- [Bot Basics](https://docs.microsoft.com/azure/bot-service/bot-builder-basics?view=azure-bot-service-4.0)
- [Dialogs](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-concept-dialog?view=azure-bot-service-4.0)
- [Gathering Input Using Prompts](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-prompts?view=azure-bot-service-4.0)
- [Activity processing](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-concept-activity-processing?view=azure-bot-service-4.0)
- [Azure Bot Service Introduction](https://docs.microsoft.com/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0)
- [Azure Bot Service Documentation](https://docs.microsoft.com/azure/bot-service/?view=azure-bot-service-4.0)
- [Azure CLI](https://docs.microsoft.com/cli/azure/?view=azure-cli-latest)
- [Azure Portal](https://portal.azure.com)
- [Language Understanding using LUIS](https://docs.microsoft.com/en-us/azure/cognitive-services/luis/)
- [Channels and Bot Connector Service](https://docs.microsoft.com/en-us/azure/bot-service/bot-concepts?view=azure-bot-service-4.0)
- [Restify](https://www.npmjs.com/package/restify)
- [dotenv](https://www.npmjs.com/package/dotenv)
