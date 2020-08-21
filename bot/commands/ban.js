const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    description: 'kick but like permanent',
    execute(bot,msg,args,guildConf){
        if (msg.member.hasPermission('BAN_MEMBERS')){
            let member = msg.mentions.members.first();
            if(!member) {
                return msg.reply("usage: `" + guildConf.prefix + "ban <@user>`");
            }
            if(!member.bannable) {
                return msg.reply("I cannot ban this member :(");
            }
            
            msg.channel.send({
                embed: {
                    title: "Ban :hammer:",
                    description: [
                         "<@" + member + "> has been banned"
                    ].join("\n"),
                    color: 15158332,
                    footer: {
                        text: "Requested by " + msg.author.tag,
                        icon_url: msg.author.avatarURL()
                    }, 
                    timestamp: new Date()
                }
            }).catch(() => msg.edit("error: give me embed permissions pls"));
            member.ban();
        } 
         else
            msg.reply("you wish");
    },
};