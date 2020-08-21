const Discord = require('discord.js');
module.exports = {
    name: 'kick',
    description: 'kicks member',
    execute(bot,msg,args,guildConf){
        if (msg.member.hasPermission('KICK_MEMBERS')){
            let member = msg.mentions.members.first();
            if(!member) {
                return msg.reply("usage: `" + guildConf.prefix + "kick <@user>`");
            }
            if(!member.kickable) {
                return msg.reply("I cannot kick this member :(");
            }
            msg.channel.send({
                embed: {
                    title: "Kick :boot:",
                    description: [
                         "<@" + member + "> has been kicked"
                    ].join("\n"),
                    color: 15158332,
                    footer: {
                        text: "Requested by " + msg.author.tag,
                        icon_url: msg.author.avatarURL()
                    }, 
                    timestamp: new Date()
                }
            }).catch(() => msg.edit("error: give me embed permissions pls"));
            member.kick();
        } 
         else
            msg.reply("you wish");
    },
};