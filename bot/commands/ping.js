const func = require("../functions.js");
module.exports = {
    name: 'ping',
    aliases: ['p', 'pong'],
    description: 'Ping command',
    execute(bot,msg,args){
        async function iloveawait(){
            const botMsg = await msg.channel.send("pinging :ping_pong:")
            botMsg.edit({
                embed: {
                    title: "fuck you 📶",
                    description: [
                        "**Server**: `" + (botMsg.createdAt - msg.createdAt) + "ms`",
                        "**API**: `" + Math.round(bot.ws.ping) + "ms`",
                        "**Uptime**: `" + func.msToTime(bot.uptime) + "`"
                    ].join("\n"),
                    color: 14177041,
                    footer: {
                        text: "Requested by " + msg.author.tag,
                        icon_url: msg.author.avatarURL({ dynamic: true })
                    },
                    timestamp: new Date()
                }
            }).catch(() => botMsg.edit("error: give me permissions pls"));
            botMsg.edit(":ping_pong: fuck you");
        }
        iloveawait();
        },
};