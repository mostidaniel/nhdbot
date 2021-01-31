const { MessageEmbed } = require("discord.js");
const { PREFIX, BOTNAME, SERVER_INV } = require("../config.json");

exports.run = async (client, msg, args, color) => {
  const app = await client.fetchApplication();

  if (!args[0]) {
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle(BOTNAME+" Help Page")
      .setDescription(
        BOTNAME+` can help you to directly read doujinshi on nHentai from your Discord channel, you can invite me with [This Link](https://discordapp.com/oauth2/authorize?client_id=805014850878963725&scope=bot&permissions=8) or [Join my Server](https://discord.gg/${SERVER_INV})`
      )
      .addField(
        "Command list",
        `- ${PREFIX}random -- Get random doujinshi
- ${PREFIX}read \`<ID>\` -- Read doujinshi by the Id you provided
- ${PREFIX}lang \`<english/japanese/chinese>\` -- Get random doujinshi by the language you provided. You can use alias language too.\nExample: \`<ch/en/jp>\`
- ${PREFIX}download \`<Book ID>\` -- Download doujin in zip file
- ${PREFIX}favorite \`[add/delete]\` \`<ID>\` (no args to see the list) -- Save your favorite doujin ID
- ${PREFIX}parody \`<Parody> [Language]\` -- Get random doujinshi by parody you provided
- ${PREFIX}tag \`<Tag> [Language]\` -- Get random doujinshi by tag you provided
- ${PREFIX}search \`<Query> [Language]\` -- Search nHentai site
- ${PREFIX}donate -- Showing donate page`
      )
      .setFooter(`${BOTNAME} V${client.version} || <> = required, [] = optional`)
      .addField(
        "Changelogs",
        `- Forked from nana-old.`
      )
      .setTimestamp();
    msg.channel.send(embed);
  } else {
    let cmd = args[0];
    if (
      client.commands.has(cmd) ||
      client.commands.get(client.aliases.get(cmd))
    ) {
      let command =
        client.commands.get(cmd) ||
        client.commands.get(client.aliases.get(cmd));
      if (command.conf.owner)
        return msg.channel.send(
          `Sorry **${msg.author.username}**, I can't find command \`${cmd}\`.`
        );
      let name = `${client.config.PREFIX} ${command.help.name}`;
      let desc = command.help.description;
      let aliases = command.conf.aliases;
      let usage = command.help.usage;
      let usages = Array.isArray(usage) ? usage : [usage];

      let embed = new MessageEmbed()
        .setAuthor(
          client.user.username + " Help Description",
          client.user.displayAvatarURL
        )
        .setTitle(
          aliases[0]
            ? `${name} ❱ ${client.config.PREFIX} ${aliases.join(
                ` ❱ ${client.config.PREFIX} `
              )}`
            : name
        )
        .setDescription(desc)
        .setColor(color)
        .addField(
          "Usage",
          usages[0]
            ? `${client.config.PREFIX} ${usages.join(
                `\n${client.config.PREFIX} `
              )}`
            : usages
        );
      return msg.channel.send(embed);
    }
    if (
      !client.commands.has(cmd) ||
      !client.commands.get(client.aliases.get(cmd))
    ) {
      msg.channel.send(
        `Sorry **${msg.author.username}**, I can't find command \`${cmd}\`.`
      );
    }
  }
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: "help",
  description: "Display bot command list",
  usage: "help"
};
