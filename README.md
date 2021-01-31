# nHentai Discord Bot (nHDBot)

nHentai Discord Bot, forked from [nana-old](https://github.com/masami45/nana-old).\
If you want to request help or new features, be sure to [join Discord Server](https://discord.gg/wm6V3cT)!

## Hosted bot
I am hosting the bot for a limited time.\
Please use [this link](https://discordapp.com/oauth2/authorize?client_id=805014850878963725&scope=bot&permissions=8) to invite the bot.

## Self Host
1. Clone this repository.
2. Rename `config.json.example` to `config.json`.
3. Modify the `config.json` file.
4. Do `npm install` or `pnpm install` or `yarn install`.
5. Do `npm start` or `pnpm start` or `yarn start`. (See Q&A below if you wish to set it up with pm2)
6. Need help? [Join Discord Server](https://discord.gg/wm6V3cT) or DM `mostidaniel!#1010`.

## Q&A
**Why can't I install this? It shows up some error.**\
Make sure that you're using Node v12.x or newer.

**How do I set it up with pm2?**\
You can view [this StackOverflow article](https://stackoverflow.com/questions/31579509/can-pm2-run-an-npm-start-script) for more information.

**How do I update this if there is a new release?**\
Just use the `git pull` command in the cloned repository directory.

## Differences between nHDBot and Nana (nana-old)
1. You can customize server invite link and bot name.
2. Custom prefix is reflected in all appropriate places.
