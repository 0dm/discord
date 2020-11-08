const Discord = require('discord.js');
const str1 = "denies their fate.";
const str2 = "hates gaming.";
const str3 = "so sad";
const str4 = "never hops on again?";
const str5 = "goes AFK.";

module.exports = {
    name: 'reject',
    aliases: ['no', 'nah'],
    description: 'deny your fate.',
    execute(bot,msg,args,guildConf){
        let x = Math.floor(Math.random() * (5 - 1) + 1);
        var z, desc;
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
        if (x != 3)
             desc = "<@" + msg.author.id + "> " + z;
        else desc = z;
        msg.channel.send({
            embed: {
                title: msg.author.tag + " will not be hopping on :no_entry_sign: ",
                description: desc,
                color: 15158332,
                footer: {
                    text: "Rejected by " + msg.author.tag,
                    icon_url: msg.author.avatarURL({dynamic : true})
                },
                timestamp: new Date()
            }
        }).catch(() => msg.edit("error: give me embed permissions pls"));
    },
};