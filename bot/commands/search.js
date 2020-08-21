const Discord = require('discord.js');
module.exports = {
    name: 'search',
    description: 'very useful!',
    execute(bot,msg,args,guildConf){
        msg.reply("google.ca");
    },
};