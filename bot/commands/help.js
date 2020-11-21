const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'displays bot commands',
    execute(bot,msg,args){
        msg.channel.send({
            embed: {
                title: "Commands :notebook_with_decorative_cover: ",
                description: [
                    "**Utility**: `info`, `ping`, `calculate`, `search`, `hopon`, `8ball`, `killserver`, `votekick`, `avatar`, `star`",
                    "**Admin**: `kick`, `ban`, `announce`, `wipe`",
                    "**Configuration**: `setconfig`, `showconfig`"
                ].join("\n"),
                color: 56319,
                footer: {
                    text: "Requested by " + msg.author.tag,
                    icon_url: msg.author.avatarURL()
                },
                timestamp: new Date()
            }
        }).catch(() => msg.edit("error: give me embed permissions pls"));
    },
};