const Discord = require('discord.js');
module.exports = {
    name: 'announce',
    description: 'friendly vulgar message to everyone!',
    execute(bot,msg,args,guildConf){
        if (msg.member.hasPermission('ADMINISTRATOR'))
            msg.reply("says fuck you to @everyone");
    else
        msg.reply("nah fuck you")
    },
};