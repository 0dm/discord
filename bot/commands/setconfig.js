const index = require('..//index.js');
module.exports = {
    name: 'setconfig',
    description: 'change configuration',
    execute(bot,msg,args,guildConf){
        if (msg.member.hasPermission('ADMINISTRATOR')) {
            const [prop, ...value] = args;
            if (value == '') {
                return msg.reply("Example: `" + `${guildConf.prefix}` + "setconfig prefix !`");
            }
            if (!bot.settings.has(msg.guild.id, prop)) {
                return msg.reply("not in config...");
            }
            bot.settings.set(msg.guild.id, value.join(""), prop);
            msg.channel.send(`Configuration for ${prop} has been changed to:\n\`${value.join("")}\``)
        }
    },
};