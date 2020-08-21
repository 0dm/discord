const index = require('..//index.js');
module.exports = {
    name: 'showconfig',
    description: 'show configuration',
    execute(bot,msg,args,guildConf){
        let configProps = Object.keys(guildConf).map(prop => {
            return `${prop}: ${guildConf[prop]}\n`
        });
        //Depracated     msg.channel.send(`Server Config: \`\`\`${configProps}\`\`\``);
      msg.channel.send({
          embed: {
              title: "Config :wrench:",
              description: [
                  `${configProps}`
              ].join("\n"),
              color: 6816001,
              footer: {
                  text: "Requested by " + msg.author.tag,
                  icon_url: msg.author.avatarURL()
              },
              timestamp: new Date()
          }
      }).catch(() => msg.edit("error: give me embed permissions pls"));
    },
};