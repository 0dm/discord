const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports = {
    name: 'star',
    description: 'you tried, you really did.',
    execute(bot,msg,args,guildConf){
        async function asyncstar() {
        if (args == ""){
            let stop = await msg.reply(`usage: \`${guildConf.prefix}star <text>\``);
            func.sleep(5000).then(() => { stop.delete();})
            return;
        }
        const [...varg] = args;
        const vkImage = Canvas.createCanvas(230, 219);
        const ctx = vkImage.getContext('2d');
        const background = await Canvas.loadImage(`images/examples/template.jpg`)
        ctx.drawImage(background, 0, 0, vkImage.width, vkImage.height)
        ctx.font = '16px Comic Sans MS';
        ctx.fillStyle = '#000000';
         ctx.fillText(varg.join(" "), vkImage.width / (2.3 + (varg.length / 4)), vkImage.height / 1.8);
        const finalimage = new Discord.MessageAttachment(vkImage.toBuffer(), `VoteKick.png`);
        msg.channel.send(finalimage);				                      
    }asyncstar()},
};