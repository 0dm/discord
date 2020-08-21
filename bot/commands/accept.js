const Discord = require('discord.js');
module.exports = {
    name: 'accept',
    description: 'accept your fate.',
    execute(bot,msg,args,guildConf){
        msg.channel.send({
            embed: {
                title: msg.author.tag + " is hopping on :white_check_mark: ",
                description: [
                   msg.author.tag + " will accept their fate"
                ].join("\n"),
                color: 56319,
                footer: {
                    text: "Accepted by " + msg.author.tag,
                    icon_url: msg.author.avatarURL()
                },
                timestamp: new Date()
            }
        }).catch(() => msg.edit("error: give me embed permissions pls"));
    },
};