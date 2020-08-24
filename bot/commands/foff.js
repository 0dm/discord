const Discord = require('discord.js');
module.exports = {
    name: 'foff',
    description: 'used when this bot is a pain in the ass',
    execute(bot,msg,args,guildConf){
        if (msg.author.id == 215190712063492096) {
            return msg.reply("aight");
        } 
        if (msg.author.id == 360166880733822976){
            return msg.reply(":cry:");
        }
        msg.reply("fuck you");    },
};