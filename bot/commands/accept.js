const Discord = require('discord.js');
const str1 = "will accept their fate.";
const str2 = "will participate in gaming.";
const str3 = "is never more here.";
const str4 = "is ready to run it down.";
const str5 = "has surrendered their will.";

module.exports = {
    name: 'accept',
    aliases: ['yes', 'ye'],
    description: 'accept your fate.',
    execute(bot,msg,args,guildConf,isBot){
        let x = Math.floor(Math.random() * (5 - 1) + 1);
        var z;
        switch (x) {
            case 1:
                z = str1;
                break;
            case 2:
                z = str2;
                break;
            case 3:
                z = str3;
                break;
            case 4:
                z = str4;
                break;
            case 5:
                z = str5;
                break;
        }
        if (isBot) {
            msg.channel.send({
                embed: {
                    title: "sauceBot is hopping on :white_check_mark: ",
                    description: [
                       "<@" + bot.user.id + "> " + z,
                    ].join("\n"),
                    color: 56319,
                    footer: {
                        text: "Accepted by " + bot.user.tag,
                        icon_url: bot.user.avatarURL()
                    },
                    timestamp: new Date()
                }
            })
            return;
        }
        msg.channel.send({
            embed: {
                title: msg.author.tag + " is hopping on :white_check_mark: ",
                description: [
                   "<@" + msg.author.id + "> " + z,
                ].join("\n"),
                color: 56319,
                footer: {
                    text: "Accepted by " + msg.author.tag,
                    icon_url: msg.author.avatarURL({dynamic : true})
                },
                timestamp: new Date()
            }
        }).catch(() => msg.edit("error: give me embed permissions pls"));
    },
};