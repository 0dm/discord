const func = require("../functions.js");
const fs = require('fs');
module.exports = {
    name: 'hopon',
    description: 'gets someone to hop on',
    execute(bot,msg,args,guildConf){
        async function asynchopon() {
        user = msg.mentions.users.first(5);
        if (!msg.mentions.users.first() || args == ""){
            let stop = await msg.reply(`usage: \`${guildConf.prefix}hopon <@user>\``);
            func.sleep(5000).then(() => { stop.delete();})
            return;
        }
        if (msg.mentions.users.first() == msg.author) {
            msg.reply(`you can't tell yourself to hop on`);
            return;
        }
        if (msg.mentions.users.first() == 650439523699916808) {
            if (msg.member.voice.channel) {
                msg.channel.send(`${guildConf.prefix}accept`)
                let isBot = true;
                bot.commands.get("accept").execute(bot,msg,args,guildConf,isBot);
                let voiceChannel = msg.member.voice.channel;
                const connection = await voiceChannel.join();
                const dispatcher = connection.play(fs.createReadStream('./audio/shadow.mp3'));

                dispatcher.on('finish', () => {
                    voiceChannel.leave();
                });
                
                return;
            }
        } 
        if (user != msg.author.id) { 
            msg.channel.send({
                embed: {
                    title: "Hop on :question:",
                    description: [
                         `hop on ${user}`
                    ].join("\n"),
                    color: 15105570,
                    footer: {
                        text: [ "Hop on Requested by " + msg.author.tag,
                        "use " + guildConf.prefix + "accept to accept",
                        "use " + guildConf.prefix + "reject to reject"
                    ].join("\n"),
                        icon_url: msg.author.avatarURL()
                    }, 
                    timestamp: new Date()
                }
            }).catch(() => msg.edit("error: give me embed permissions pls"));
        } 
    }asynchopon();},
};
