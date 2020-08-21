const Discord = require('discord.js');
module.exports = {
    name: 'hopon',
    description: 'gets someone to hop on',
    execute(bot,msg,args,guildConf){
        user = msg.mentions.users.first();
        if (!user){
            return msg.reply('Usage:\n' + '`' + guildConf.prefix + 'hopon <user>`')
        }
        if (user != 215190712063492096) { // bot owner, never tell me to hop on ever again Jacob.
            msg.channel.send({
                embed: {
                    title: "Hop on :question:",
                    description: [
                         "hop on <@" + user + ">"
                    ].join("\n"),
                    color: 3066993,
                    footer: {
                        text: [ "Hop on Requested by " + msg.author.tag,
                        "use " + guildConf.prefix + "accept to accept it"
                    ].join("\n"),
                        icon_url: msg.author.avatarURL()
                    }, 
                    timestamp: new Date()
                }
            }).catch(() => msg.edit("error: give me embed permissions pls"));
        } else 
            msg.reply("nah");
    },
};