const func = require("../functions.js");
module.exports = {
    name: 'hopon',
    description: 'gets someone to hop on',
    execute(bot,msg,args,guildConf){
        async function asynchopon() {
        user = msg.mentions.users.first(5);
        if (!msg.mentions.users.first() || args == ""){
            let stop = await msg.reply(`usage: \`${guildConf.prefix}hopon <@user>\``);
            func.sleep(3000).then(() => { stop.delete();})
            return;
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
        } else {
        let no = await msg.reply("you can't tell yourself to hop on!");
        func.sleep(3000).then(() => { no.delete();})
        }   
    }asynchopon();},
};
