const func = require("../functions.js");
const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: ['pfp', 'icon'],
    description: 'get user avatar',
    execute(bot,msg,args,guildConf){
        var target;
        let user = msg.mentions.users.first()
        if (!user) {
            target = msg.author;
        } else {target = user;}
        const avatarEmbed = new Discord.MessageEmbed()
        .setTitle(`${target.tag}'s avatar`)
        .setAuthor("sauceBot", bot.user.avatarURL())
        .setImage(target.avatarURL({dynamic : true}))
        msg.channel.send(avatarEmbed);
    },
};