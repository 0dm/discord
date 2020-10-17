const func = require("../functions.js");
const Discord = require('discord.js');
module.exports = {
    name: 'info',
    aliases: ['i', 'about'],
    description: 'displays bot information',
    execute(bot,msg,args){
        const embed = new Discord.MessageEmbed()
        .setTitle("sauceBot")
        .setAuthor("sauceBot", bot.user.avatarURL())
        .setColor(0x10FFFF)
        .setDescription("Hey, I'm a bot written in Discord.JS by seesaw#7777, that can do some tasks or just be completely useless.")
        .setFooter("woooooooo.")
        .setImage("https://i.imgur.com/817N9sI.gif")
        .setThumbnail(bot.user.avatarURL())
        .setTimestamp()
        .addField(";help", "and get started", false)
        .addField("**Uptime:**", func.msToTime(bot.uptime) + '', false)
        .setURL("https://0dm.github.io/")
    msg.channel.send(embed);
    },
};
