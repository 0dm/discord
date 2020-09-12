const Discord = require('discord.js');
const func = require("../functions.js");
module.exports = {
    name: '8ball',
    description: 'just as reliable as a normal one',
    execute(bot,msg,args,guildConf){
        async function Eball() {
            let Eballmsg = await msg.channel.send(":8ball: siphoning power from the oracle...")
            func.sleep(2000).then(() => {
                Eballmsg.edit({
                    embed: {
                        title: "Magic 8ball :8ball:",
                        description: [
                            "**fuck you** :8ball:"
                        ].join("\n"),
                        color: 0xFFFFFF,
                        footer: {
                            text: "Requested by " + msg.author.tag,
                            icon_url: msg.author.avatarURL({dynamic : true})
                        },
                        timestamp: new Date()
                    }
                }).catch(() => Eballmsg.edit("error: give me permissions pls"));
                Eballmsg.edit(":8ball: power consumed...")
            })
    
        }
        Eball();
    },
};