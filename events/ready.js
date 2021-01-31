const pkg = require("../package.json");
const axios = require("axios");
const { PREFIX, BOTNAME } = require("../config.json");

module.exports = async (client) => {
  const version = pkg.version;

  const users = client.users.cache.size;
  const channels = client.channels.cache.size;
  const guilds = client.guilds.cache.size;

  console.log(
    `${client.user.username} Preparing to serve ${users} users, in ${channels} channels, on ${guilds} guilds...`
  );

  client.setInterval(async () => {
    let userFormat = client.util.nFormatter(users);
    let guildFormat = client.util.nFormatter(client.guilds.cache.size);

    let status = [
      `with ${userFormat} users`,
      `${BOTNAME} v${version}`,
      `in ${guildFormat} server 🎉`,
      //`Help me buy a VPS, please | ${prefix}donate`,
      "Ara ara ara",
      `with downloader | ${PREFIX}dl 177013`,
    ];
    let rand = client.util.getRandInt(status.length);

    client.user.setActivity(status[rand], { type: "PLAYING" });
  }, 6e4);
};
