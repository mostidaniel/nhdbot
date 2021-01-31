const Discord = require("discord.js");
const pkg = require("../package.json");
const { BOTNAME, OWNERS } = require("../config.json");

exports.run = async (client, msg, args, color) => {
  const app = await client.fetchApplication();

  let embed = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(
      `**${msg.member.user.tag}** Welcome to donation page, you can support Nana's creator on [Arxist](https://arxist.com/tip/masami) or [Patreon](https://patreon.com/masami) and you can send a message to <@${OWNERS}> for support inquiries.\n\n**Thank You**`
    )
    .setFooter(`© ${pkg.author} | ${BOTNAME} ${pkg.version}`);
  msg.channel.send(embed);
};

exports.conf = {
  aliases: ["donation"]
};

exports.help = {
  name: "donate",
  description: "Help Nana's creator buy a VPS",
  usage: "donate"
};
